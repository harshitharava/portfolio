import { createFileRoute } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";

import heroImage from "@/assets/equinox/hero/equinox-hero.webp";

import iconHumanCentric from "@/assets/equinox/rationale/icon-human-centric.webp";
import iconAdaptability from "@/assets/equinox/rationale/icon-adaptability.webp";
import iconEfficiency from "@/assets/equinox/rationale/icon-efficiency.webp";
import ringIllustration from "@/assets/equinox/rationale/equinox-ring.webp";

import titleSlide from "@/assets/equinox/foundations/equinox-title-slide.webp";

import socialFitness from "@/assets/equinox/social/equinox-social-fitness.webp";
import socialFashion from "@/assets/equinox/social/equinox-social-fashion.webp";

export const Route = createFileRoute("/work/equinox")({
  head: () => ({
    meta: [
      { title: "Infosys Equinox | Harshith Arava" },
      {
        name: "description",
        content:
          "A campaign identity for Infosys Equinox's 'Make Commerce Great Again' launch — a brand language built to feel human, flexible, and distinctly its own.",
      },
    ],
  }),
  component: EquinoxPage,
});

function EquinoxPage() {
  usePortfolioEffects();

  return (
    <main id="main" className="eq">
      {/* ---------- Hero ---------- */}
      <section className="eq-hero">
        <figure className="eq-hero-media">
          <img
            src={heroImage}
            alt="Infosys Equinox website displayed on an iMac resting on a wooden desk"
          />
          <div className="eq-wrap eq-hero-tags">
            <span>Design Research</span>
            <span>Branding</span>
            <span>Brand Identity</span>
            <span>Photoshop</span>
            <span>Illustrator</span>
            <span>Social Media</span>
          </div>
        </figure>

        <div className="eq-wrap">
          <h1 className="eq-hero-title">
            Make Commerce
            <br />
            Great Again Campaign
          </h1>
          <p className="eq-hero-sub">
            Infosys Equinox is a digital commerce platform that empowers
            businesses to deliver personalized and seamless customer
            experiences across channels.
          </p>

          <div className="eq-meta">
            <div>
              <h4>Role</h4>
              <p>Brand Designer</p>
            </div>
            <div>
              <h4>Team</h4>
              <p>Solo</p>
            </div>
            <div>
              <h4>Platform</h4>
              <p>Photoshop, Illustrator</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- About / Brief / Challenge ---------- */}
      <section className="eq-section">
        <div className="eq-wrap">
          <div className="eq-info-row">
            <h3>About the project</h3>
            <p>
              The &lsquo;Make Commerce Great Again&rsquo; project for{" "}
              <strong>Infosys Equinox</strong> involved creating a new brand
              language that extends their established aesthetic while
              emphasizing <strong>adaptability</strong> and{" "}
              <strong>human-centered commerce</strong>. I developed a dynamic
              visual element symbolizing flexibility, which was integrated
              across campaign content to meet diverse messaging needs.
              Balancing innovation with brand consistency was key to
              delivering a design that resonated with the client&rsquo;s
              vision.
            </p>
          </div>
          <div className="eq-info-row">
            <h3>The brief</h3>
            <p>
              The client emphasized that their competitors all had similar
              visual and content styles, making it hard to differentiate.
              They wanted a <strong>unique approach</strong> that broke the
              mold, leaning toward a <strong>B2C aesthetic</strong> to make
              their brand more relatable. The objective was to create a
              memorable and distinct identity that would stand out in the{" "}
              <strong>competitive landscape</strong>.
            </p>
          </div>
          <div className="eq-info-row">
            <h3>The challenge</h3>
            <p>
              The main challenge was balancing innovation with{" "}
              <strong>brand consistency</strong>, ensuring the new elements
              conveyed flexibility without straying from Infosys
              Equinox&rsquo;s <strong>established aesthetic</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Rationale ---------- */}
      <section className="eq-section">
        <div className="eq-wrap">
          <h2>How Did We Arrive Here?</h2>

          <div className="eq-concepts">
            <div className="eq-concept">
              <img src={iconHumanCentric} alt="" />
              <span>Human Centric</span>
            </div>
            <div className="eq-concept">
              <img src={iconAdaptability} alt="" />
              <span>Adaptability</span>
            </div>
            <div className="eq-concept">
              <img src={iconEfficiency} alt="" />
              <span>Efficiency</span>
            </div>
          </div>

          <div className="eq-rationale-grid">
            <figure className="eq-rationale-figure">
              <img
                src={ringIllustration}
                alt="An abstract ring illustration made of dozens of overlapping elliptical lines, gradiating from pink to blue"
              />
            </figure>
            <div className="eq-rationale-copy">
              <h3>The Framework of Progress</h3>
              <p>
                The frame can be seen as a gateway to new possibilities,
                where the efficiency is denoted by turning of the clock
                hand, adaptability is denoted by the changing shape of the
                circle making concentric circles with every change,
                retaining the outer circle shape from original assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Design Foundations ---------- */}
      <section className="eq-section">
        <div className="eq-wrap">
          <h2>Design Foundations</h2>

          <span className="eq-foundation-label">Color Palette</span>
          <div className="eq-palette">
            <span className="eq-swatch" style={{ background: "#3d5fe0" }} />
            <span className="eq-swatch" style={{ background: "#1467e0" }} />
            <span className="eq-swatch" style={{ background: "#a9c8ed" }} />
            <span className="eq-swatch" style={{ background: "#c3a6e8" }} />
            <span className="eq-swatch" style={{ background: "#d6d6d6" }} />
            <span className="eq-swatch" style={{ background: "#131313" }} />
            <span
              className="eq-swatch eq-swatch-gradient"
              aria-label="Equinox gradient: pink to blue"
            />
          </div>

          <span className="eq-foundation-label">Title Slide Template</span>
          <figure className="eq-template-figure">
            <img
              src={titleSlide}
              alt="Title slide template: Infosys Equinox logo top-left, a large 'Title Slide, Lorem Ipsum' headline, body copy, and a call-to-action button, with the ring illustration bleeding off the right edge"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Social Media Posts ---------- */}
      <section className="eq-section">
        <div className="eq-wrap">
          <h2>Social Media Posts</h2>

          <div className="eq-social-grid">
            <figure>
              <img
                src={socialFitness}
                alt="Instagram post: When commerce is this flexible, there will always be a choice — Make Commerce Human with Infosys Equinox, 125 likes"
              />
            </figure>
            <figure>
              <img
                src={socialFashion}
                alt="Instagram post: Commerce at the speed of fashion and apparel trends — why miss out, get agile and ahead for the fashion-forward, 452 likes"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
