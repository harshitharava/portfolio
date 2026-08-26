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
    };
  }, []);
}
