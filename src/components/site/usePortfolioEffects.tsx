import { useEffect } from "react";

/** Scroll-reveal + nav scroll state, ported from the original portfolio script. */
export function usePortfolioEffects() {
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (!("IntersectionObserver" in window)) {
      revealEls.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    revealEls.forEach((el) => io.observe(el));

    const moreWorkCleanup = setUpMoreWorkScroll();

    const tocLinks = Array.from(document.querySelectorAll<HTMLElement>(".cs-toc a"));
    const csSections = Array.from(document.querySelectorAll<HTMLElement>(".cs-section[id]"));
    let tocIO: IntersectionObserver | undefined;
    if (tocLinks.length && csSections.length) {
      tocIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              tocLinks.forEach((l) =>
                l.classList.toggle("current", l.getAttribute("href") === "#" + entry.target.id),
              );
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );
      csSections.forEach((s) => tocIO!.observe(s));
    }

    return () => {
      io.disconnect();
      tocIO?.disconnect();
      moreWorkCleanup?.();
    };
  }, []);
}

/** Drives the "A few more things I've made" strip: a real scroll
 * container (wheel/trackpad/touch/drag all just work) with a gentle
 * ambient auto-scroll on top, so it still reads as a marquee when
 * you're not touching it. Auto-scroll pauses on any user interaction
 * and resumes ~2s after the last one. The track holds the card set
 * twice back-to-back so the loop (in either direction) can be a plain
 * scrollLeft jump by half the track width, invisible since both
 * halves are identical. No-ops (returns undefined) if the section
 * isn't on the page, and skips the auto-scroll for
 * prefers-reduced-motion while still leaving manual scroll/drag on.
 */
function setUpMoreWorkScroll(): (() => void) | undefined {
  const container = document.querySelector<HTMLElement>(".more-work");
  const track = document.querySelector<HTMLElement>(".more-work-track");
  if (!container || !track) return undefined;

  const RESUME_DELAY_MS = 2000;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let halfWidth = track.scrollWidth / 2;
  let pausedUntil = 0;
  let dragging = false;
  let dragStartX = 0;
  let dragStartScrollLeft = 0;
  let rafId = 0;
  let lastFrameTime = 0;

  container.scrollLeft = halfWidth;

  const pauseFor = (ms: number) => {
    pausedUntil = performance.now() + ms;
  };

  const onWheel = (e: WheelEvent) => {
    // Trackpads already send a horizontal deltaX; a plain vertical
    // mouse wheel doesn't, so convert it ourselves — otherwise a
    // mouse-wheel user just scrolls the page instead of the strip.
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
    pauseFor(RESUME_DELAY_MS);
  };

  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    dragging = true;
    dragStartX = e.clientX;
    dragStartScrollLeft = container.scrollLeft;
    container.classList.add("is-dragging");
    container.setPointerCapture(e.pointerId);
    pauseFor(RESUME_DELAY_MS);
  };

  const onPointerMove = (e: PointerEvent) => {
    if (!dragging) return;
    container.scrollLeft = dragStartScrollLeft - (e.clientX - dragStartX);
    pauseFor(RESUME_DELAY_MS);
  };

  const endDrag = () => {
    dragging = false;
    container.classList.remove("is-dragging");
  };

  const onTouchStart = () => pauseFor(RESUME_DELAY_MS);

  const onScroll = () => {
    // Wrap at the true edges regardless of what caused the scroll
    // (auto-advance, wheel, drag, or native touch scrolling) — starting
    // at halfWidth leaves a full halfWidth of room on each side before
    // this ever fires under normal use.
    if (container.scrollLeft <= 0) {
      container.scrollLeft += halfWidth;
    } else if (container.scrollLeft >= track.scrollWidth - container.clientWidth) {
      container.scrollLeft -= halfWidth;
    }
  };

  const onResize = () => {
    halfWidth = track.scrollWidth / 2;
  };

  container.addEventListener("wheel", onWheel, { passive: false });
  container.addEventListener("pointerdown", onPointerDown);
  container.addEventListener("pointermove", onPointerMove);
  container.addEventListener("pointerup", endDrag);
  container.addEventListener("pointercancel", endDrag);
  container.addEventListener("touchstart", onTouchStart, { passive: true });
  container.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);

  if (!reduceMotion) {
    // Same pace as the old 48s-per-half-loop CSS animation, just
    // driven from rAF now so it can share the same scrollLeft as
    // user-initiated scrolling instead of animating a transform.
    const pxPerMs = halfWidth / 48000;
    const tick = (time: number) => {
      if (lastFrameTime && performance.now() >= pausedUntil) {
        container.scrollLeft += pxPerMs * (time - lastFrameTime);
      }
      lastFrameTime = time;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
  }

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    container.removeEventListener("wheel", onWheel);
    container.removeEventListener("pointerdown", onPointerDown);
    container.removeEventListener("pointermove", onPointerMove);
    container.removeEventListener("pointerup", endDrag);
    container.removeEventListener("pointercancel", endDrag);
    container.removeEventListener("touchstart", onTouchStart);
    container.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onResize);
  };
}
