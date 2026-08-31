import { createFileRoute } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";

import heroImac from "@/assets/bosch-bcw/hero/bosch-hero-imac.webp";
import heroImacMobile from "@/assets/bosch-bcw/hero/bosch-hero-mobile.webp";

import screensAll from "@/assets/bosch-bcw/screens/bosch-screens-all.webp";

import element1 from "@/assets/bosch-bcw/elements/bosch-element-1.webp";
import element2 from "@/assets/bosch-bcw/elements/bosch-element-2.webp";
import element3 from "@/assets/bosch-bcw/elements/bosch-element-3.webp";
import element4 from "@/assets/bosch-bcw/elements/bosch-element-4.webp";
import element5 from "@/assets/bosch-bcw/elements/bosch-element-5.webp";
import element6 from "@/assets/bosch-bcw/elements/bosch-element-6.webp";
import element7 from "@/assets/bosch-bcw/elements/bosch-element-7.webp";
import element8 from "@/assets/bosch-bcw/elements/bosch-element-8.webp";

export const Route = createFileRoute("/work/bosch-bcw")({
  head: () => ({
    meta: [
      { title: "Bosch BCW Interactive Infographic | Harshith Arava" },
      {
        name: "description",
        content:
          "An interactive infographic designed for Bosch's BCW 2024 global hybrid event, built in Adobe XD under a two-day deadline.",
      },
      {
        property: "og:title",
        content: "Bosch BCW Interactive Infographic | Harshith Arava",
      },
      {
        property: "og:description",
        content:
          "An interactive infographic designed for Bosch's BCW 2024 global hybrid event, built in Adobe XD under a two-day deadline.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://harshitharava.github.io/portfolio/work/bosch-bcw",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://harshitharava.github.io/portfolio/work/bosch-bcw",
      },
    ],
  }),
  component: BoschBcwPage,
});

function BoschBcwPage() {
  usePortfolioEffects();

  return (
    <main id="main" className="bcw">
      {/* ---------- Hero ---------- */}
      <section className="bcw-hero">
        <div className="bcw-hero-media">
          <picture>
            <source media="(max-width: 760px)" srcSet={heroImacMobile} />
            <img
              src={heroImac}
              alt="Bosch BCW interactive infographic displayed on an iMac, reading Let's drive #SmarterDigital with Cognitive Experience Design"
            />
          </picture>
          <div className="bcw-wrap bcw-hero-tags">
            <span>UI / UX Design</span>
            <span>Adobe XD</span>
            <span>Design Systems</span>
            <span>UX Research</span>
            <span>Design Thinking</span>
          </div>
          <div className="bcw-hero-title-layer">
            <div className="bcw-wrap bcw-hero-title-rail">
              <h1 className="bcw-hero-title">
                Bosch BCW
                <br />
                Interactive
                <br />
                Infographic
                <br />
                Design
              </h1>
              <p className="bcw-hero-sub">
                BCW 2024 is a global hybrid event which serves as a platform
                for industry leaders to share insights, strategies, and
                solutions, promoting networking and collaboration among
                participants.
              </p>
            </div>
          </div>
        </div>

        <div className="bcw-wrap">
          <div className="bcw-meta">
            <div>
              <h4>Role</h4>
              <p>UI/UX Designer</p>
            </div>
            <div>
              <h4>Duration</h4>
              <p>2 Days</p>
            </div>
            <div>
              <h4>Team</h4>
              <p>Solo</p>
            </div>
            <div>
              <h4>Platform</h4>
              <p>Adobe XD</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- About / Brief / Challenge ---------- */}
      <section className="bcw-section">
        <div className="bcw-wrap">
          <div className="bcw-info-row">
            <h3>About the project</h3>
            <p>
              For the &lsquo;<strong>BCW 2024</strong>&rsquo; event, I
              designed an <strong>interactive infographic</strong> within a
              tight <strong>two-day timeframe</strong>, showcasing my ability
              to deliver engaging visual content under pressure. The
              challenge lay in my unfamiliarity with{" "}
              <strong>Adobe XD</strong>, where I had only one day to learn
              the software before creating the designs.
            </p>
          </div>
          <div className="bcw-info-row">
            <h3>The brief</h3>
            <p>
              The client aimed to create an <strong>immersive experience</strong>{" "}
              for attendees through interactive infographics displayed on
              monitors at the event. They sought visually appealing designs
              that effectively communicated{" "}
              <strong>key information</strong>, encouraged{" "}
              <strong>audience engagement</strong>, and aligned with the
              event&rsquo;s theme.
            </p>
          </div>
          <div className="bcw-info-row">
            <h3>The challenge</h3>
            <p>
              I faced a steep learning curve with Adobe XD, having only one
              day to familiarize myself with the software before starting
              the <strong>design process</strong>. The{" "}
              <strong>limited timeframe</strong> compounded the pressure to
              produce <strong>high-quality work</strong> while navigating a
              new tool, making efficient <strong>time management</strong>{" "}
              crucial.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Design Foundations: Color Palette + Elements Used ---------- */}
      <section className="bcw-section">
        <div className="bcw-wrap">
          <h2>Design Foundations</h2>

          <span className="bcw-foundation-label">Color Palette</span>
          <div className="bcw-palette">
            <span
              className="bcw-swatch bcw-swatch-gradient"
              aria-label="Brand gradient: red to blue to green"
            />
            <span className="bcw-swatch" style={{ background: "#0084c0" }} />
            <span className="bcw-swatch" style={{ background: "#2fa563" }} />
            <span className="bcw-swatch" style={{ background: "#5b3991" }} />
            <span className="bcw-swatch" style={{ background: "#c0246c" }} />
            <span className="bcw-swatch" style={{ background: "#b7bdc4" }} />
            <span className="bcw-swatch" style={{ background: "#00a2b4" }} />
          </div>

          <span className="bcw-foundation-label">Elements Used</span>
          <div className="bcw-elements">
            <div className="bcw-element">
              <img src={element1} alt="" />
            </div>
            <div className="bcw-element">
              <img src={element2} alt="" />
            </div>
            <div className="bcw-element">
              <img src={element3} alt="" />
            </div>
            <div className="bcw-element">
              <img src={element4} alt="" />
            </div>
            <div className="bcw-element">
              <img src={element5} alt="" />
            </div>
            <div className="bcw-element">
              <img src={element6} alt="" />
            </div>
            <div className="bcw-element">
              <img src={element7} alt="" />
            </div>
            <div className="bcw-element">
              <img src={element8} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Screens ---------- */}
      <section className="bcw-section">
        <div className="bcw-wrap">
          <h2>Screens</h2>
        </div>

        <figure className="bcw-screens-figure">
          <img
            src={screensAll}
            alt="All six Bosch BCW infographic screens: Tap to know the secret that shapes all UX; So, what hinders an amazing experience?; Bosch SDS is transforming ecosystems with Cognitive Experience Design; At the confluence of AI and ML, NLP, Big Data and Analytics, Cloudification, and Smart Commerce; impact metrics of 20 to 30 percent reduction, 30 percent faster, and a 20 percent surge; and Let's drive #SmarterDigital with Cognitive Experience Design"
          />
        </figure>
      </section>
    </main>
  );
}
