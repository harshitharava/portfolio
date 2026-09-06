import { createFileRoute } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";

import hero from "@/assets/home-bakery/hero/home-bakery-hero.webp";

import cardFront from "@/assets/home-bakery/identity/home-bakery-card-front.webp";
import cardBack from "@/assets/home-bakery/identity/home-bakery-card-back.webp";

import boxShipping from "@/assets/home-bakery/packaging/home-bakery-box-shipping.webp";
import boxWindow from "@/assets/home-bakery/packaging/home-bakery-box-window.webp";
import wrappingPaper from "@/assets/home-bakery/packaging/home-bakery-wrapping-paper.webp";
import boxTape from "@/assets/home-bakery/packaging/home-bakery-box-tape.webp";

import menu from "@/assets/home-bakery/menu/home-bakery-menu.webp";

export const Route = createFileRoute("/work/home-bakery")({
  head: () => ({
    meta: [
      { title: "The Home Bakery Brand & Packaging | Harshith Arava" },
      {
        name: "description",
        content:
          "Brand identity case study: a warm, approachable identity and packaging system for The Home Bakery, a neighborhood bakery, built without a clear brief on audience or pricing position.",
      },
      {
        property: "og:title",
        content: "The Home Bakery Brand & Packaging | Harshith Arava",
      },
      {
        property: "og:description",
        content:
          "Brand identity case study: a warm, approachable identity and packaging system for The Home Bakery, a neighborhood bakery, built without a clear brief on audience or pricing position.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://harshitharava.github.io/portfolio/work/home-bakery",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://harshitharava.github.io/portfolio/work/home-bakery",
      },
    ],
  }),
  component: HomeBakeryPage,
});

function HomeBakeryPage() {
  usePortfolioEffects();

  return (
    <main id="main" className="hb">
      {/* ---------- Hero ---------- */}
      <section className="hb-hero">
        <div className="hb-hero-media">
          <img
            src={hero}
            alt="The Home Bakery logo centered over a photo of hands kneading dough on a floured counter"
          />
          <div className="hb-wrap hb-hero-tags">
            <span>Branding</span>
            <span>Packaging Design</span>
            <span>Art Direction</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
          </div>
        </div>

        <div className="hb-wrap">
          <h1 className="sr-only">The Home Bakery brand &amp; packaging</h1>

          <div className="hb-meta">
            <div>
              <h4>Client</h4>
              <p>The Home Bakery</p>
            </div>
            <div>
              <h4>Focus</h4>
              <p>Brand &amp; packaging identity</p>
            </div>
            <div>
              <h4>Tools</h4>
              <p>Photoshop, Illustrator</p>
            </div>
            <div>
              <h4>Deliverables</h4>
              <p>Packaging, stationery, menu</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- About / Brief / Challenge ---------- */}
      <section className="hb-section">
        <div className="hb-wrap">
          <div className="hb-info-row">
            <h3>About the project</h3>
            <p>
              The Home Bakery is a charming neighborhood bakery specializing
              in wholesome, high-quality baked goods that evoke the warmth of
              home. With a cozy atmosphere and friendly service, it&rsquo;s a
              go-to spot for customers seeking{" "}
              <strong>quality treats</strong> made with care and a commitment
              to healthy, <strong>artisanal baking</strong>. The minimalist
              yet cozy ambiance of the bakehouse, along with carefully
              curated visuals, communicates a <strong>clean</strong> and{" "}
              <strong>healthy ethos</strong>.
            </p>
          </div>
          <div className="hb-info-row">
            <h3>The brief</h3>
            <p>
              The client wanted a <strong>warm, approachable</strong> brand
              identity for Home Bakery, highlighting its commitment to{" "}
              <strong>wholesome ingredients</strong> and a cozy, neighborhood
              bakery feel. The design needed to convey{" "}
              <strong>simplicity, quality</strong>, and a{" "}
              <strong>welcoming</strong> atmosphere.
            </p>
          </div>
          <div className="hb-info-row">
            <h3>The challenge</h3>
            <p>
              The challenges I encountered included the client&rsquo;s{" "}
              <strong>unclear vision</strong> for their brand persona and
              uncertainty about their target audience. They were also unsure
              of their <strong>pricing model</strong>, making it difficult to
              determine whether to position the bakery as a premium luxury
              brand or as value-for-money. This lack of direction required
              extensive exploration and <strong>refinement</strong> throughout
              the design process.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Design Foundations: Typography + Color Palette ---------- */}
      <section className="hb-section">
        <div className="hb-wrap">
          <h2>Design foundations</h2>

          <span className="hb-foundation-label">Typography</span>
          <div className="hb-type">
            <span className="hb-type-glyphs">Aa</span>
            <div className="hb-type-info">
              <p>
                Set in the <strong>Bicyclette</strong> font family across
                packaging, stationery, and menus.
              </p>
              <p className="hb-type-sample">
                Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn
                <br />
                Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
              </p>
            </div>
          </div>

          <span className="hb-foundation-label">Color palette</span>
          <div className="hb-palette">
            <div className="hb-swatch">
              <span style={{ background: "#fff6ee" }} />
              <code>#FFF6EE</code>
            </div>
            <div className="hb-swatch">
              <span style={{ background: "#373d72" }} />
              <code>#373D72</code>
            </div>
            <div className="hb-swatch">
              <span style={{ background: "#f8b1a5" }} />
              <code>#F8B1A5</code>
            </div>
            <div className="hb-swatch">
              <span style={{ background: "#284d78" }} />
              <code>#284D78</code>
            </div>
            <div className="hb-swatch">
              <span style={{ background: "#f07d53" }} />
              <code>#F07D53</code>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Identity & Stationery ---------- */}
      <section className="hb-section">
        <div className="hb-wrap">
          <h2>Identity &amp; stationery</h2>
          <div className="hb-cards">
            <img
              src={cardFront}
              alt="The Home Bakery business card front, showing the logo on a donut-pattern background"
            />
            <img
              src={cardBack}
              alt="The Home Bakery business card back, showing cake decorator Vito Corleone's contact details"
            />
          </div>
        </div>
      </section>

      {/* ---------- Packaging ---------- */}
      <section className="hb-section">
        <div className="hb-wrap">
          <h2>Packaging</h2>
          <div className="hb-packaging-grid">
            <figure>
              <img
                src={boxShipping}
                alt="The Home Bakery shipping box, branded with the logo, contact details, and handling icons"
              />
            </figure>
            <figure>
              <img
                src={boxWindow}
                alt="The Home Bakery cake box with a die-cut window, branded with the tHB monogram"
              />
            </figure>
            <figure>
              <img
                src={boxTape}
                alt="Kraft boxes sealed with The Home Bakery's striped branded tape"
              />
            </figure>
            <figure>
              <img
                src={wrappingPaper}
                alt="A roll of The Home Bakery's wrapping paper, patterned with the tHB monogram and hearts"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- Menu ---------- */}
      <section className="hb-section">
        <div className="hb-wrap">
          <h2>Menu</h2>
        </div>
        <figure className="hb-menu-figure">
          <img
            src={menu}
            alt="Two Home Bakery clipboard menus listing cupcakes, muffins, and tea cakes with prices"
          />
        </figure>
      </section>
    </main>
  );
}
