import { createFileRoute } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";

import hero from "@/assets/phytives/hero/phytives-hero.webp";

import cardFront from "@/assets/phytives/identity/phytives-card-front.webp";
import cardBack from "@/assets/phytives/identity/phytives-card-back.webp";
import letterhead from "@/assets/phytives/identity/phytives-letterhead.webp";

import adRhiniphyt from "@/assets/phytives/campaign/phytives-ad-rhiniphyt.webp";
import adGlucophyt from "@/assets/phytives/campaign/phytives-ad-glucophyt.webp";
import productRange from "@/assets/phytives/campaign/phytives-product-range.webp";

export const Route = createFileRoute("/work/phytives")({
  head: () => ({
    meta: [
      { title: "Phytives Brand & Packaging Redesign | Harshith Arava" },
      {
        name: "description",
        content:
          "Brand identity case study: a complete packaging redesign for Phytives, a plant-based wellness supplement brand, moving away from clinical visuals toward a modern, natural, trustworthy look.",
      },
      {
        property: "og:title",
        content: "Phytives Brand & Packaging Redesign | Harshith Arava",
      },
      {
        property: "og:description",
        content:
          "Brand identity case study: a complete packaging redesign for Phytives, a plant-based wellness supplement brand, moving away from clinical visuals toward a modern, natural, trustworthy look.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://harshitharava.github.io/portfolio/work/phytives",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://harshitharava.github.io/portfolio/work/phytives",
      },
    ],
  }),
  component: PhytivesPage,
});

function PhytivesPage() {
  usePortfolioEffects();

  return (
    <main id="main" className="phy">
      {/* ---------- Hero ---------- */}
      <section className="phy-hero">
        <div className="phy-hero-media">
          <img
            src={hero}
            alt="The Phytives logo mark centered over a styled photo of supplement capsules, dried herbs, and tincture bottles"
          />
          <div className="phy-wrap phy-hero-tags">
            <span>Branding</span>
            <span>Packaging Design</span>
            <span>Art Direction</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
          </div>
        </div>

        <div className="phy-wrap">
          <h1 className="sr-only">Phytives brand &amp; packaging redesign</h1>
          <p className="phy-hero-sub">
            Phytives is a wellness brand offering plant-based supplements and
            natural health solutions for holistic well-being. This project
            modernized its packaging line and stationery while keeping the
            original logo intact.
          </p>

          <div className="phy-meta">
            <div>
              <h4>Client</h4>
              <p>Phytives, a unit of Sai Sattva</p>
            </div>
            <div>
              <h4>Focus</h4>
              <p>Packaging &amp; brand identity</p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>Photoshop, Illustrator</p>
            </div>
            <div>
              <h4>Deliverables</h4>
              <p>Packaging, stationery, campaign</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- About / Brief / Challenge ---------- */}
      <section className="phy-section">
        <div className="phy-wrap">
          <div className="phy-info-row">
            <h3>About the project</h3>
            <p>
              Phytives is a wellness brand dedicated to harnessing the power
              of nature, offering premium plant-based supplements and natural
              remedies designed to support holistic health, vitality, and
              sustainable living. With a focus on purity, quality, and
              eco-consciousness, Phytives promotes well-being through{" "}
              <strong>scientifically-backed, plant-derived ingredients</strong>.
            </p>
          </div>
          <div className="phy-info-row">
            <h3>The brief</h3>
            <p>
              A complete redesign of Phytives&rsquo; packaging line, aiming to{" "}
              <strong>modernize</strong> the look while retaining the original
              logo. The goal was a style that visually reflects the{" "}
              <strong>brand&rsquo;s commitment</strong> to natural, safe, and
              effective plant-based products &mdash; conveying purity, trust,
              and alignment with the{" "}
              <strong>wellness-focused mission</strong> of Phytives.
            </p>
          </div>
          <div className="phy-info-row">
            <h3>The challenge</h3>
            <p>
              The primary challenge was transforming the old, clinical-looking
              design into a more approachable, wellness-oriented style that
              aligns with Phytives&rsquo; natural brand values &mdash; moving
              away from <strong>anatomical visuals</strong> while ensuring the
              new design still conveyed <strong>trust</strong> and{" "}
              <strong>efficacy</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Design Foundations: Typography + Color Palette ---------- */}
      <section className="phy-section">
        <div className="phy-wrap">
          <h2>Design foundations</h2>

          <div className="phy-type">
            <span className="phy-type-glyphs">Aa</span>
            <div className="phy-type-info">
              <span className="phy-foundation-label">Typography</span>
              <p>
                Set in the <strong>Gotham</strong> font family across
                packaging, stationery, and campaign material.
              </p>
              <p className="phy-type-sample">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn
                <br />
                Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
              </p>
            </div>
          </div>

          <span className="phy-foundation-label">Color palette</span>
          <div className="phy-palette">
            <div className="phy-swatch">
              <span style={{ background: "#00953d" }} />
              <code>#00953D</code>
            </div>
            <div className="phy-swatch">
              <span style={{ background: "#007d90" }} />
              <code>#007D90</code>
            </div>
            <div className="phy-swatch">
              <span style={{ background: "#568937" }} />
              <code>#568937</code>
            </div>
            <div className="phy-swatch">
              <span style={{ background: "#00949f" }} />
              <code>#00949F</code>
            </div>
            <div className="phy-swatch">
              <span style={{ background: "#3f4440" }} />
              <code>#3F4440</code>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Identity & Stationery ---------- */}
      <section className="phy-section">
        <div className="phy-wrap">
          <h2>Identity &amp; stationery</h2>
          <div className="phy-cards">
            <img
              src={cardFront}
              alt="Phytives business card front, showing the logo and website on a subtle geometric pattern"
            />
            <img
              src={cardBack}
              alt="Phytives business card back, showing founder Abhishek Ujjani's contact details and a QR code"
            />
          </div>
          <figure className="phy-letterhead">
            <img
              src={letterhead}
              alt="Phytives letterhead mockup on a desk, laid inside a kraft-paper folder next to a pen and pins"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Packaging & Campaign ---------- */}
      <section className="phy-section">
        <div className="phy-wrap">
          <h2>Packaging &amp; campaign</h2>
          <div className="phy-ads">
            <img
              src={adRhiniphyt}
              alt="Rhiniphyt Capsules ad: The Gateway to Effortless Breathing — combats seasonal allergies, boosts respiratory health, improves immunity"
            />
            <img
              src={adGlucophyt}
              alt="Glucophyt Tablets ad: A capsule a day regulates blood sugar all the way — manages weight, regulates blood sugar, boosts metabolism"
            />
          </div>
        </div>
        <figure className="phy-range-figure">
          <img
            src={productRange}
            alt="The full Phytives product range — Psoraphyt Oil, Psoraphyt Cream, Arthrophyt Cream, Psoraphyt Tablets, Arthrophyt Capsules, Rhiniphyt Capsules, and Glucophyt Capsules — displayed on stone podiums"
          />
        </figure>
      </section>
    </main>
  );
}
