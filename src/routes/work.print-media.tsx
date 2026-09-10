import { createFileRoute } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";

import kariWeeklyA from "@/assets/print-media/kari-theory-weekly-poster-a.webp";
import kariWeeklyB from "@/assets/print-media/kari-theory-weekly-poster-b.webp";
import kariKiosk from "@/assets/print-media/kari-theory-kiosk-ads.webp";
import kariEvent from "@/assets/print-media/kari-theory-event-poster.webp";
import kariBillboard from "@/assets/print-media/kari-theory-billboard.webp";

import mocBuffet from "@/assets/print-media/ministry-of-chutneys-buffet-ad.webp";
import moBrunch from "@/assets/print-media/ministry-brunch-ad.webp";

import brochure from "@/assets/print-media/radisson-brochure.webp";

import tshirt from "@/assets/print-media/masster-chef-tshirt.webp";

export const Route = createFileRoute("/work/print-media")({
  head: () => ({
    meta: [
      { title: "Print Media | Harshith Arava" },
      {
        name: "description",
        content:
          "A collection of print and outdoor design work — restaurant posters, billboards, print ads, a hotel brochure, and merch illustration across a few different projects.",
      },
      { property: "og:title", content: "Print Media | Harshith Arava" },
      {
        property: "og:description",
        content:
          "A collection of print and outdoor design work — restaurant posters, billboards, print ads, a hotel brochure, and merch illustration across a few different projects.",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:url",
        content: "https://harshitharava.github.io/portfolio/work/print-media",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://harshitharava.github.io/portfolio/work/print-media",
      },
    ],
  }),
  component: PrintMediaPage,
});

function PrintMediaPage() {
  usePortfolioEffects();

  return (
    <main id="main" className="pm">
      <section className="pm-hero">
        <div className="wrap">
          <p className="eyebrow">Print &amp; outdoor</p>
          <h1>Print media.</h1>
          <p className="lede">
            A handful of print and outdoor pieces made outside the usual
            product-design work — restaurant posters, a citylight billboard,
            print ads, a hotel brochure, and one illustration project. Not
            one client, so each piece below is labeled with the project it
            belongs to.
          </p>
        </div>
      </section>

      <section className="pm-group">
        <div className="wrap">
          <h2>Kari Theory</h2>
          <p className="pm-group-note">
            Bar &amp; kitchen concept at Radisson Blu GRT Chennai.
          </p>
          {/* Full-width pair, not folded into .pm-grid — the billboard
              and kiosk-ad photos are both wide outdoor context shots,
              so they read best sitting level with each other edge to
              edge rather than sharing columns with the portrait pieces
              below. */}
          <div className="pm-pair">
            <figure className="pm-card">
              <img
                src={kariBillboard}
                alt="A Kari Theory citylight billboard on a city street, advertising the Kari Konar Kadai Dosa"
              />
              <figcaption>Citylight billboard — Kari Konar Kadai Dosa</figcaption>
            </figure>
            <figure className="pm-card">
              <img
                src={kariKiosk}
                alt="An outdoor kiosk with two Kari Theory ads: Brain Omelette and Murukku Cheese Sandwich"
              />
              <figcaption>Outdoor kiosk ads — Brain Omelette &amp; Murukku Cheese Sandwich</figcaption>
            </figure>
          </div>

          <div className="pm-grid">
            <figure className="pm-card">
              <img
                src={kariEvent}
                alt="A Tasty Show event poster for a comedy night at Kari Theory featuring Jordan Antony"
              />
              <figcaption>Event poster — &ldquo;A Tasty Show&rdquo; with Jordan Antony</figcaption>
            </figure>
          </div>

          {/* Its own full-width pair too — two versions of the same
              poster read as a comparison, so they need to sit level
              with each other edge to edge, not wherever the auto-fit
              grid above happens to place them. */}
          <div className="pm-pair">
            <figure className="pm-card">
              <img
                src={kariWeeklyB}
                alt="Kari Theory weekly happy-hour offers poster, yellow and pink, laid out as a calendar grid"
              />
              <figcaption>Weekly offers poster — calendar layout</figcaption>
            </figure>
            <figure className="pm-card">
              <img
                src={kariWeeklyA}
                alt="Kari Theory weekly happy-hour offers poster, blue, laid out with a photo for each day"
              />
              <figcaption>Weekly offers poster — alternate layout</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="pm-group">
        <div className="wrap">
          <h2>Ministry of Chutneys</h2>
          <p className="pm-group-note">
            Buffet restaurant concept, also at Radisson Blu GRT Chennai.
          </p>
          <div className="pm-grid">
            <figure className="pm-card">
              <img
                src={moBrunch}
                alt="A hand holding a folded newspaper mockup showing The Ministry Brunch print ad at a breakfast table"
              />
              <figcaption>Print ad — &ldquo;The Ministry Brunch&rdquo;</figcaption>
            </figure>
            <figure className="pm-card">
              <img
                src={mocBuffet}
                alt="Make Your Dish Come True print ad for the Market Style Buffet at Ministry of Chutneys"
              />
              <figcaption>Print ad — &ldquo;Make Your Dish Come True&rdquo;</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="pm-group">
        <div className="wrap">
          <h2>Radisson Blu GRT Chennai</h2>
          <p className="pm-group-note">Hotel-level collateral.</p>
          <div className="pm-grid">
            <figure className="pm-card">
              <img
                src={brochure}
                alt="A tri-fold Radisson Blu GRT Chennai hotel brochure mockup on a desk"
              />
              <figcaption>Tri-fold brochure — &ldquo;Come Experience GReaT&rdquo;</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="pm-group">
        <div className="wrap">
          <h2>Independent work</h2>
          <p className="pm-group-note">Not client work — an illustration project.</p>
          <div className="pm-grid">
            <figure className="pm-card">
              <img
                src={tshirt}
                alt="A white T-shirt printed with a Mass-ter Chef illustration of a chef pouring filter coffee"
              />
              <figcaption>T-shirt illustration — &ldquo;Mass-ter Chef&rdquo;</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
