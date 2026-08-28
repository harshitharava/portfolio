import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";
import aboutPhoto1 from "@/assets/about/about-harshith-pier.webp";
import aboutPhoto2 from "@/assets/about/about-harshith-alley.webp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Harshith Arava — UX Designer" },
      { name: "description", content: "From graphic design to Human-Technology Interaction: Harshith Arava brings visual craft, research, and product thinking together." },
      { property: "og:title", content: "About Harshith Arava — UX Designer" },
      { property: "og:description", content: "From graphic design to Human-Technology Interaction: craft, research, and product thinking." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    // TEMPORARY PLACEHOLDER: relative canonical until the real domain is live.
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  usePortfolioEffects();
  const photos = [
    { url: aboutPhoto1, alt: "Illustrated portrait of Harshith Arava on a pier wearing a band t-shirt" },
    { url: aboutPhoto2, alt: "Illustrated portrait of Harshith Arava in a narrow cobblestone alley" },
  ];
  const [active, setActive] = useState(0);

  // Auto-advance the portrait every 5s — long enough to actually look at
  // each illustration before it moves on, short enough that it doesn't
  // feel stalled. Restarts on every change (including manual dot clicks),
  // so picking a photo doesn't get immediately undone by a stale timer.
  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % photos.length);
    }, 5000);
    return () => clearInterval(id);
  }, [active, photos.length]);

  return (
    <main id="main">
    <section id={"about"}>
      <div className={"wrap"}>
        <div className={"section-head reveal"}>
          <p className={"eyebrow"}>About</p>
          <h1>About me.</h1>
        </div>

        <div className={"about-grid"}>
          <div className={"about-photos reveal"}>
            <div className={"about-scroller"}>
              <img key={photos[active].url} src={photos[active].url} alt={photos[active].alt} />
            </div>
            <div className={"about-dots"}>
              {photos.map((p, i) => (
                <button
                  key={p.url}
                  type="button"
                  className={"about-dot" + (i === active ? " is-active" : "")}
                  aria-label={`Show photo ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
          </div>
          <div className={"about-copy"}>
            <div className={"reveal"}>
              <p className="big">I started out designing visuals. Now I’m interested in how people actually use what we design.</p>
              <p>I’ve spent the last 4+ years working in graphic and digital design, across branding, campaigns, digital content, and visual systems. I’ve worked with different teams and clients, presented ideas, handled feedback, and learned how to design for very different audiences and business needs.</p>
              <p>While working in design, I became increasingly interested in what happens beyond the visual layer: how people understand information, make decisions, and interact with digital products. That interest eventually led me to pursue a Master’s in Human-Technology Interaction at Tampere University, where I’ve been developing my skills in UX research, interaction design, user flows, prototyping, and accessibility.</p>
              <p>Now I’m interested in bringing those two sides together: the visual and creative experience I already have, with the research and interaction-focused approach I’m developing through my studies. I’m particularly interested in digital products, AI, and the ways people interact with technology.</p>
              <p>Outside of design, I’m usually taking photos, exploring new places, or paying far too much attention to how things are designed around me.</p>
            </div>
            <div className={"about-facts reveal"}>
              <div>
                <h4>Experience</h4>
                <p>4+ years in graphic and digital design, working across branding, campaigns, visual systems, and digital experiences.</p>
              </div>
              <div>
                <h4>Industries</h4>
                <p>SaaS · Pharma · Banking · IT · F&B</p>
                <p>Experience working with clients across different industries and business contexts.</p>
              </div>
              <div>
                <h4>Philosophy</h4>
                <p>Understand first. Design second.</p>
                <p>I like to understand the problem, question assumptions, and iterate before settling on a solution.</p>
              </div>
              <div>
                <h4>Beyond the résumé</h4>
                <p>Photography · Cities · Visual storytelling</p>
                <p>When I’m not designing, I’m probably taking photos, chasing down a film festival, attempting a new recipe, or falling down a rabbit hole about the history of whatever city I’m in.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    </main>
  );
}
