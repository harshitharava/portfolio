import { createFileRoute, Link } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";
import talosCareCard from "@/assets/cards/talos-card.webp";
import playPalCard from "@/assets/cards/playpal-card.webp";
import cityLoopCard from "@/assets/cards/cityloop-card.webp";
import myTownCard from "@/assets/cards/mytown-card.webp";
import phytivesCard from "@/assets/cards/phytives-card.webp";
import homeBakeryCard from "@/assets/cards/home-bakery-card.webp";
import infosysCard from "@/assets/cards/infosys-card.webp";
import boschBcwCard from "@/assets/cards/bosch-bcw-card.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harshith Arava | UX Designer" },
      {
        name: "description",
        content:
          "Harshith Arava is a UX Designer focused on Human-Technology Interaction, UX research, and AI.",
      },
      { property: "og:title", content: "Harshith Arava | UX Designer" },
      {
        property: "og:description",
        content:
          "Making technology make sense. UX Designer focused on Human-Technology Interaction, UX Research, and AI.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    // TEMPORARY PLACEHOLDER: relative canonical until the real domain is live.
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  usePortfolioEffects();
  return (
    <main id="main">
      <section className={"hero"} id={"top"}>
        <div className="grain-strong" aria-hidden="true" />
        <div className={"wrap hero-inner"}>
          <svg
            className={"hero-orbit a"}
            width={"44"}
            height={"44"}
            viewBox={"0 0 44 44"}
            fill={"none"}
            aria-hidden={"true"}
          >
            <path
              d={"M22 2v40M2 22h40M8 8l28 28M36 8 8 36"}
              stroke={"currentColor"}
              strokeWidth={"3"}
              strokeLinecap={"round"}
            />
          </svg>
          <svg
            className={"hero-orbit b"}
            width={"60"}
            height={"34"}
            viewBox={"0 0 60 34"}
            fill={"none"}
            aria-hidden={"true"}
          >
            <path
              d={"M2 30C14 6 34 2 56 6"}
              stroke={"currentColor"}
              strokeWidth={"3"}
              strokeLinecap={"round"}
            />
            <path
              d={"M48 2l8 4-5 8"}
              stroke={"currentColor"}
              strokeWidth={"3"}
              strokeLinecap={"round"}
              strokeLinejoin={"round"}
              fill={"none"}
            />
          </svg>

          <p className={"hero-role"} data-stagger={"1"}>
            UX Designer
          </p>

          <h1 data-stagger={"2"}>Making technology make sense.</h1>

          <p className={"hero-support"} data-stagger={"3"}>
            Human-Technology Interaction · UX Research · AI
          </p>

          <div className={"hero-ctas"} data-stagger={"4"}>
            <Link className={"btn btn-primary"} to={"/"} hash={"work"}>
              View my work{" "}
              <span className={"arrow"} aria-hidden={"true"}>
                →
              </span>
            </Link>
          </div>
        </div>

        <div className={"marquee"} aria-hidden={"true"}>
          <div className={"marquee-track"}>
            <span>UX Research</span>
            <span>Product Strategy</span>
            <span>Interaction Design</span>
            <span>Prototyping</span>
            <span>Design Systems</span>
            <span>Usability Testing</span>
            <span>Accessibility</span>
            <span>UX Research</span>
            <span>Product Strategy</span>
            <span>Interaction Design</span>
            <span>Prototyping</span>
            <span>Design Systems</span>
            <span>Usability Testing</span>
            <span>Accessibility</span>
          </div>
        </div>
      </section>

      <section id={"work"}>
        <div className={"wrap"}>
          <div className={"section-head reveal"}>
            <p className={"eyebrow"}>Selected work</p>
            <h2>Selected work.</h2>
            <p className={"lede"}>
              Three projects across urban discovery, social experiences, and
              care technology.
            </p>
          </div>

          <article className={"work-card reveal"}>
            <div className={"work-copy"}>
              <div className={"case-tags"}>
                <span className={"tag filled"}>Talos Care</span>
                <span className={"tag"}>Conversational AI</span>
                <span className={"tag"}>Human-Centered AI</span>
                <span className={"tag"}>UX Design</span>
              </div>
              <h3>
                Designing trustworthy AI conversations for sensitive healthcare
                disclosure
              </h3>
              <p>
                Talos Care is a conversational AI assistant designed to help
                patients disclose sensitive health information before meeting a
                healthcare professional.
              </p>
              <Link className={"text-link"} to={"/work/talos-care"}>
                Read the case study <span aria-hidden={"true"}>→</span>
              </Link>
            </div>
            <a className={"work-visual"} tabIndex={-1} aria-hidden={"true"}>
              <img className={"work-visual-img"} src={talosCareCard} alt="" />
              <svg
                viewBox={"0 0 560 420"}
                fill={"none"}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <rect width={"560"} height={"420"} fill={"#0d9488"} />
                <rect
                  x={"185"}
                  y={"50"}
                  width={"190"}
                  height={"420"}
                  rx={"28"}
                  fill={"var(--surface)"}
                />
                <rect
                  x={"209"}
                  y={"80"}
                  width={"86"}
                  height={"12"}
                  rx={"6"}
                  fill={"var(--ink)"}
                />
                <circle
                  cx={"352"}
                  cy={"86"}
                  r={"11"}
                  fill={"#0d9488"}
                  opacity={"0.3"}
                />
                <rect
                  x={"209"}
                  y={"110"}
                  width={"142"}
                  height={"86"}
                  rx={"14"}
                  fill={"#0d9488"}
                />
                <rect
                  x={"225"}
                  y={"128"}
                  width={"56"}
                  height={"8"}
                  rx={"4"}
                  fill={"#fff"}
                  opacity={"0.8"}
                />
                <rect
                  x={"225"}
                  y={"146"}
                  width={"86"}
                  height={"14"}
                  rx={"7"}
                  fill={"#fff"}
                />
                <rect
                  x={"225"}
                  y={"170"}
                  width={"42"}
                  height={"8"}
                  rx={"4"}
                  fill={"#fff"}
                  opacity={"0.6"}
                />
                <rect
                  x={"209"}
                  y={"212"}
                  width={"67"}
                  height={"60"}
                  rx={"12"}
                  fill={"var(--surface-2)"}
                />
                <rect
                  x={"284"}
                  y={"212"}
                  width={"67"}
                  height={"60"}
                  rx={"12"}
                  fill={"var(--surface-2)"}
                />
                <rect
                  x={"209"}
                  y={"288"}
                  width={"142"}
                  height={"9"}
                  rx={"4.5"}
                  fill={"var(--ink-3)"}
                  opacity={"0.5"}
                />
                <rect
                  x={"209"}
                  y={"306"}
                  width={"104"}
                  height={"9"}
                  rx={"4.5"}
                  fill={"var(--ink-3)"}
                  opacity={"0.35"}
                />
                <rect
                  x={"209"}
                  y={"336"}
                  width={"142"}
                  height={"40"}
                  rx={"20"}
                  fill={"#0d9488"}
                />
                <rect
                  x={"64"}
                  y={"120"}
                  width={"86"}
                  height={"86"}
                  rx={"16"}
                  fill={"var(--surface)"}
                  transform={"rotate(-6 64 120)"}
                />
                <circle
                  cx={"100"}
                  cy={"152"}
                  r={"16"}
                  fill={"#0d9488"}
                  opacity={"0.25"}
                />
                <path
                  d={"M93 152l5.5 5.5 10-11"}
                  stroke={"#0d9488"}
                  strokeWidth={"3"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                />
                <rect
                  x={"418"}
                  y={"220"}
                  width={"96"}
                  height={"70"}
                  rx={"14"}
                  fill={"var(--surface)"}
                  transform={"rotate(5 418 220)"}
                />
                <path
                  d={"M436 272l20-15 16 8 24-20"}
                  stroke={"#0d9488"}
                  strokeWidth={"3.5"}
                  strokeLinecap={"round"}
                  fill={"none"}
                  transform={"rotate(5 418 220)"}
                />
              </svg>
            </a>
          </article>

          <article className={"work-card reveal"}>
            <div className={"work-copy"}>
              <div className={"case-tags"}>
                <span className={"tag filled"}>PlayPal</span>
                <span className={"tag"}>UX Research</span>
                <span className={"tag"}>Usability Testing</span>
                <span className={"tag"}>UI Design</span>
              </div>
              <h3>
                Making it easier to find, create, and join social sports
                experiences
              </h3>
              <p>
                PlayPal brings people together around the sports they enjoy,
                with a straightforward way to discover and organise games.
              </p>
              <Link className={"text-link"} to={"/work/playpal"}>
                Read the case study <span aria-hidden={"true"}>→</span>
              </Link>
            </div>
            <a className={"work-visual"} tabIndex={-1} aria-hidden={"true"}>
              <img className={"work-visual-img"} src={playPalCard} alt="" />
              <svg
                viewBox={"0 0 560 420"}
                fill={"none"}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <rect width={"560"} height={"420"} fill={"#2b4bf2"} />
                <rect
                  x={"120"}
                  y={"56"}
                  width={"180"}
                  height={"400"}
                  rx={"26"}
                  fill={"var(--surface)"}
                />
                <rect
                  x={"144"}
                  y={"84"}
                  width={"76"}
                  height={"11"}
                  rx={"5.5"}
                  fill={"var(--ink)"}
                />
                <rect
                  x={"144"}
                  y={"112"}
                  width={"132"}
                  height={"112"}
                  rx={"14"}
                  fill={"#2b4bf2"}
                />
                <rect
                  x={"160"}
                  y={"130"}
                  width={"42"}
                  height={"8"}
                  rx={"4"}
                  fill={"#fff"}
                  opacity={"0.75"}
                />
                <rect
                  x={"160"}
                  y={"148"}
                  width={"80"}
                  height={"16"}
                  rx={"8"}
                  fill={"#fff"}
                />
                <rect
                  x={"160"}
                  y={"186"}
                  width={"96"}
                  height={"22"}
                  rx={"11"}
                  fill={"#fff"}
                  opacity={"0.22"}
                />
                <rect
                  x={"144"}
                  y={"242"}
                  width={"132"}
                  height={"9"}
                  rx={"4.5"}
                  fill={"var(--ink-3)"}
                  opacity={"0.45"}
                />
                <rect
                  x={"144"}
                  y={"260"}
                  width={"94"}
                  height={"9"}
                  rx={"4.5"}
                  fill={"var(--ink-3)"}
                  opacity={"0.3"}
                />
                <rect
                  x={"144"}
                  y={"292"}
                  width={"132"}
                  height={"42"}
                  rx={"21"}
                  fill={"var(--ink)"}
                />
                <rect
                  x={"175"}
                  y={"308"}
                  width={"70"}
                  height={"9"}
                  rx={"4.5"}
                  fill={"var(--bg)"}
                />
                <rect
                  x={"330"}
                  y={"120"}
                  width={"170"}
                  height={"108"}
                  rx={"16"}
                  fill={"var(--surface)"}
                  transform={"rotate(4 330 120)"}
                />
                <circle
                  cx={"362"}
                  cy={"156"}
                  r={"15"}
                  fill={"#2b4bf2"}
                  opacity={"0.18"}
                  transform={"rotate(4 330 120)"}
                />
                <path
                  d={"M356 156h11m-5.5-5.5v11"}
                  stroke={"#2b4bf2"}
                  strokeWidth={"2.5"}
                  strokeLinecap={"round"}
                  transform={"rotate(4 330 120)"}
                />
                <rect
                  x={"348"}
                  y={"184"}
                  width={"104"}
                  height={"8"}
                  rx={"4"}
                  fill={"var(--ink-3)"}
                  opacity={"0.45"}
                  transform={"rotate(4 330 120)"}
                />
                <rect
                  x={"348"}
                  y={"200"}
                  width={"76"}
                  height={"8"}
                  rx={"4"}
                  fill={"var(--ink-3)"}
                  opacity={"0.3"}
                  transform={"rotate(4 330 120)"}
                />
                <rect
                  x={"342"}
                  y={"268"}
                  width={"164"}
                  height={"56"}
                  rx={"14"}
                  fill={"var(--surface)"}
                  transform={"rotate(-3 342 268)"}
                />
                <circle
                  cx={"370"}
                  cy={"296"}
                  r={"12"}
                  fill={"#2c8c5e"}
                  opacity={"0.22"}
                  transform={"rotate(-3 342 268)"}
                />
                <path
                  d={"M364 296l4.5 4.5 7.5-8"}
                  stroke={"#2c8c5e"}
                  strokeWidth={"2.5"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  transform={"rotate(-3 342 268)"}
                />
                <rect
                  x={"392"}
                  y={"284"}
                  width={"82"}
                  height={"8"}
                  rx={"4"}
                  fill={"var(--ink-3)"}
                  opacity={"0.5"}
                  transform={"rotate(-3 342 268)"}
                />
                <rect
                  x={"392"}
                  y={"300"}
                  width={"56"}
                  height={"8"}
                  rx={"4"}
                  fill={"var(--ink-3)"}
                  opacity={"0.3"}
                  transform={"rotate(-3 342 268)"}
                />
              </svg>
            </a>
          </article>

          <article className={"work-card reveal"}>
            <div className={"work-copy"}>
              <div className={"case-tags"}>
                <span className={"tag filled"}>CityLoop</span>
                <span className={"tag"}>UX Research</span>
                <span className={"tag"}>Product Design</span>
                <span className={"tag"}>Interaction Design</span>
              </div>
              <h3>Helping people discover what their city has to offer</h3>
              <p>
                CityLoop is a city discovery experience for exploring local
                food, events, and things to do around you.
              </p>
              <Link className={"text-link"} to={"/work/cityloop"}>
                Read the case study <span aria-hidden={"true"}>→</span>
              </Link>
            </div>
            <a className={"work-visual"} tabIndex={-1} aria-hidden={"true"}>
              <img className={"work-visual-img"} src={cityLoopCard} alt="" />
              <svg
                viewBox={"0 0 560 420"}
                fill={"none"}
                xmlns={"http://www.w3.org/2000/svg"}
              >
                <rect width={"560"} height={"420"} fill={"#8b5cf6"} />
                <rect
                  x={"70"}
                  y={"64"}
                  width={"420"}
                  height={"292"}
                  rx={"18"}
                  fill={"var(--surface)"}
                />
                <rect
                  x={"70"}
                  y={"64"}
                  width={"112"}
                  height={"292"}
                  fill={"var(--surface-2)"}
                  opacity={"0.7"}
                />
                <rect
                  x={"90"}
                  y={"92"}
                  width={"64"}
                  height={"9"}
                  rx={"4.5"}
                  fill={"var(--ink)"}
                />
                <rect
                  x={"90"}
                  y={"120"}
                  width={"72"}
                  height={"7"}
                  rx={"3.5"}
                  fill={"var(--ink-3)"}
                  opacity={"0.5"}
                />
                <rect
                  x={"90"}
                  y={"138"}
                  width={"58"}
                  height={"7"}
                  rx={"3.5"}
                  fill={"#8b5cf6"}
                />
                <rect
                  x={"90"}
                  y={"156"}
                  width={"66"}
                  height={"7"}
                  rx={"3.5"}
                  fill={"var(--ink-3)"}
                  opacity={"0.5"}
                />
                <rect
                  x={"206"}
                  y={"94"}
                  width={"116"}
                  height={"34"}
                  rx={"17"}
                  fill={"#8b5cf6"}
                />
                <rect
                  x={"232"}
                  y={"107"}
                  width={"64"}
                  height={"9"}
                  rx={"4.5"}
                  fill={"#fff"}
                />
                <rect
                  x={"336"}
                  y={"94"}
                  width={"116"}
                  height={"34"}
                  rx={"17"}
                  fill={"none"}
                  stroke={"#8b5cf6"}
                  strokeWidth={"1.5"}
                />
                <rect
                  x={"362"}
                  y={"107"}
                  width={"64"}
                  height={"9"}
                  rx={"4.5"}
                  fill={"#8b5cf6"}
                />
                <rect
                  x={"206"}
                  y={"152"}
                  width={"116"}
                  height={"76"}
                  rx={"12"}
                  fill={"var(--surface-2)"}
                />
                <rect
                  x={"222"}
                  y={"168"}
                  width={"56"}
                  height={"8"}
                  rx={"4"}
                  fill={"var(--ink-3)"}
                  opacity={"0.6"}
                />
                <rect
                  x={"222"}
                  y={"186"}
                  width={"84"}
                  height={"10"}
                  rx={"5"}
                  fill={"var(--ink)"}
                />
                <rect
                  x={"222"}
                  y={"208"}
                  width={"40"}
                  height={"8"}
                  rx={"4"}
                  fill={"#8b5cf6"}
                />
                <rect
                  x={"336"}
                  y={"152"}
                  width={"116"}
                  height={"76"}
                  rx={"12"}
                  fill={"var(--surface-2)"}
                />
                <circle
                  cx={"360"}
                  cy={"180"}
                  r={"12"}
                  fill={"#8b5cf6"}
                  opacity={"0.3"}
                />
                <rect
                  x={"380"}
                  y={"174"}
                  width={"56"}
                  height={"8"}
                  rx={"4"}
                  fill={"var(--ink-3)"}
                  opacity={"0.6"}
                />
                <rect
                  x={"352"}
                  y={"200"}
                  width={"84"}
                  height={"8"}
                  rx={"4"}
                  fill={"var(--ink-3)"}
                  opacity={"0.35"}
                />
                <rect
                  x={"206"}
                  y={"252"}
                  width={"56"}
                  height={"22"}
                  rx={"6"}
                  fill={"#8b5cf6"}
                  opacity={"0.9"}
                />
                <rect
                  x={"270"}
                  y={"252"}
                  width={"56"}
                  height={"22"}
                  rx={"6"}
                  fill={"#8b5cf6"}
                  opacity={"0.6"}
                />
                <rect
                  x={"334"}
                  y={"252"}
                  width={"56"}
                  height={"22"}
                  rx={"6"}
                  fill={"#8b5cf6"}
                  opacity={"0.35"}
                />
                <rect
                  x={"398"}
                  y={"252"}
                  width={"50"}
                  height={"22"}
                  rx={"6"}
                  fill={"#8b5cf6"}
                  opacity={"0.16"}
                />
                <rect
                  x={"206"}
                  y={"298"}
                  width={"130"}
                  height={"10"}
                  rx={"5"}
                  fill={"var(--ink)"}
                />
                <rect
                  x={"206"}
                  y={"318"}
                  width={"190"}
                  height={"8"}
                  rx={"4"}
                  fill={"var(--ink-3)"}
                  opacity={"0.4"}
                />
              </svg>
            </a>
          </article>

          <div className={"reveal"}>
            <p
              className={"eyebrow"}
              style={{ marginTop: "clamp(24px, 4vw, 40px)" }}
            >
              A few more things I’ve made
            </p>
          </div>
          {/* Free-running marquee: the track below renders this same set of
              four cards twice back-to-back and loops via CSS transform, so
              it always scrolls on its own instead of needing a manual drag.
              Only the first copy is reachable by keyboard/screen reader —
              the second exists purely for the seamless visual loop. */}
          <div className={"more-work"}>
            <div className={"more-work-track"}>
              <Link
                className={"mini-card reveal"}
                to={"/work/mytown"}
                aria-label={"MyTown case study"}
              >
                <div className={"mini-thumb"}>
                  <img src={myTownCard} alt="MyTown project visual" />
                </div>
                <div className={"mini-body"}>
                  <span className={"cat"}>
                    UX Research · UX Design · Interaction Design
                  </span>
                  <h3>MyTown</h3>
                  <p>
                    Rethinking how people discover and connect with their
                    local community.
                  </p>
                  {/* the whole card is already the link (wrapped in <Link>
                      above); nesting a second <Link>/<a> here is invalid
                      HTML — browsers auto-correct by closing the outer tag
                      early, which was visually splitting the thumbnail and
                      body into two separate boxes. A plain span keeps the
                      same "Read the case study →" affordance text without
                      creating a second, illegally-nested link. */}
                  <span className={"text-link"} aria-hidden={"true"}>
                    Read the case study <span aria-hidden={"true"}>→</span>
                  </span>
                </div>
              </Link>

              <article className={"mini-card reveal"} data-delay={"1"}>
                <div className={"mini-thumb"}>
                  <img
                    src={phytivesCard}
                    alt="Phytives brand identity visual"
                  />
                </div>
                <div className={"mini-body"}>
                  <span className={"cat"}>
                    Brand Identity · Branding · Visual Design
                  </span>
                  <h3>Phytives</h3>
                  <p>
                    A visual identity built to give a growing brand a clearer
                    personality.
                  </p>
                </div>
              </article>

              <article className={"mini-card reveal"} data-delay={"2"}>
                <div className={"mini-thumb"}>
                  <img
                    src={homeBakeryCard}
                    alt="The Home Bakery brand identity visual"
                  />
                </div>
                <div className={"mini-body"}>
                  <span className={"cat"}>
                    Brand Identity · Branding · Packaging
                  </span>
                  <h3>The Home Bakery</h3>
                  <p>
                    A warmer, more distinctive identity for a homegrown
                    bakery brand.
                  </p>
                </div>
              </article>

              <Link
                className={"mini-card reveal"}
                to={"/work/infosys"}
                aria-label={"Infosys Gen AI Web Application case study"}
                data-delay={"3"}
              >
                <div className={"mini-thumb"}>
                  <img
                    src={infosysCard}
                    alt="Infosys Gen AI Web Application sign-in screen, displayed on an iMac"
                  />
                </div>
                <div className={"mini-body"}>
                  <span className={"cat"}>
                    UI / UX Design · Design Systems · UX Research
                  </span>
                  <h3>Infosys Gen AI</h3>
                  <p>
                    An analytics-driven platform for personalized
                    recommendations and interactive AI insights.
                  </p>
                  <span className={"text-link"} aria-hidden={"true"}>
                    Read the case study <span aria-hidden={"true"}>→</span>
                  </span>
                </div>
              </Link>

              <Link
                className={"mini-card reveal"}
                to={"/work/bosch-bcw"}
                aria-label={"Bosch BCW Interactive Infographic case study"}
                data-delay={"4"}
              >
                <div className={"mini-thumb"}>
                  <img
                    src={boschBcwCard}
                    alt="Bosch BCW infographic screen reading Bosch SDS is transforming ecosystems with Cognitive Experience Design"
                  />
                </div>
                <div className={"mini-body"}>
                  <span className={"cat"}>
                    UI / UX Design · Design Systems · UX Research
                  </span>
                  <h3>Bosch BCW Infographic</h3>
                  <p>
                    An interactive infographic for Bosch's BCW 2024 global
                    hybrid event, built under a two-day deadline.
                  </p>
                  <span className={"text-link"} aria-hidden={"true"}>
                    Read the case study <span aria-hidden={"true"}>→</span>
                  </span>
                </div>
              </Link>

              {/* ---- duplicate copy, decorative only ---- */}
              <Link
                className={"mini-card"}
                to={"/work/mytown"}
                aria-hidden={"true"}
                tabIndex={-1}
              >
                <div className={"mini-thumb"}>
                  <img src={myTownCard} alt="" />
                </div>
                <div className={"mini-body"}>
                  <span className={"cat"}>
                    UX Research · UX Design · Interaction Design
                  </span>
                  <h3>MyTown</h3>
                  <p>
                    Rethinking how people discover and connect with their
                    local community.
                  </p>
                  <span className={"text-link"}>
                    Read the case study <span aria-hidden={"true"}>→</span>
                  </span>
                </div>
              </Link>

              <article className={"mini-card"} aria-hidden={"true"}>
                <div className={"mini-thumb"}>
                  <img src={phytivesCard} alt="" />
                </div>
                <div className={"mini-body"}>
                  <span className={"cat"}>
                    Brand Identity · Branding · Visual Design
                  </span>
                  <h3>Phytives</h3>
                  <p>
                    A visual identity built to give a growing brand a clearer
                    personality.
                  </p>
                </div>
              </article>

              <article className={"mini-card"} aria-hidden={"true"}>
                <div className={"mini-thumb"}>
                  <img src={homeBakeryCard} alt="" />
                </div>
                <div className={"mini-body"}>
                  <span className={"cat"}>
                    Brand Identity · Branding · Packaging
                  </span>
                  <h3>The Home Bakery</h3>
                  <p>
                    A warmer, more distinctive identity for a homegrown
                    bakery brand.
                  </p>
                </div>
              </article>

              <Link
                className={"mini-card"}
                to={"/work/infosys"}
                aria-hidden={"true"}
                tabIndex={-1}
              >
                <div className={"mini-thumb"}>
                  <img src={infosysCard} alt="" />
                </div>
                <div className={"mini-body"}>
                  <span className={"cat"}>
                    UI / UX Design · Design Systems · UX Research
                  </span>
                  <h3>Infosys Gen AI</h3>
                  <p>
                    An analytics-driven platform for personalized
                    recommendations and interactive AI insights.
                  </p>
                  <span className={"text-link"}>
                    Read the case study <span aria-hidden={"true"}>→</span>
                  </span>
                </div>
              </Link>

              <Link
                className={"mini-card"}
                to={"/work/bosch-bcw"}
                aria-hidden={"true"}
                tabIndex={-1}
              >
                <div className={"mini-thumb"}>
                  <img src={boschBcwCard} alt="" />
                </div>
                <div className={"mini-body"}>
                  <span className={"cat"}>
                    UI / UX Design · Design Systems · UX Research
                  </span>
                  <h3>Bosch BCW Infographic</h3>
                  <p>
                    An interactive infographic for Bosch's BCW 2024 global
                    hybrid event, built under a two-day deadline.
                  </p>
                  <span className={"text-link"}>
                    Read the case study <span aria-hidden={"true"}>→</span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id={"process"}
        style={{
          background: "var(--surface)",
          borderBlock: "1.5px solid var(--line)",
        }}
      >
        <div className={"wrap"}>
          <div className={"section-head reveal"}>
            <p className={"eyebrow"}>How I work</p>
            <h2>A process built on evidence, not vibes.</h2>
            <p className={"lede"}>
              Eight steps, one loop. Every stage produces something testable,
              and every test feeds the next decision.
            </p>
          </div>
          <div className={"process-grid"}>
            <div className={"process-step reveal"}>
              <span className={"num"}>01</span>
              <h3>Research</h3>
              <p>
                Interviews, analytics, and support data to find the real
                problem.
              </p>
            </div>
            <div className={"process-step reveal"} data-delay={"1"}>
              <span className={"num"}>02</span>
              <h3>Define</h3>
              <p>
                Problem statements, success metrics, and scope everyone agrees
                on.
              </p>
            </div>
            <div className={"process-step reveal"} data-delay={"2"}>
              <span className={"num"}>03</span>
              <h3>Ideate</h3>
              <p>
                Divergent exploration — sketches, crazy-8s, competitive
                teardowns.
              </p>
            </div>
            <div className={"process-step reveal"} data-delay={"3"}>
              <span className={"num"}>04</span>
              <h3>Wireframe</h3>
              <p>
                Low-fidelity structure to test flows before investing in polish.
              </p>
            </div>
            <div className={"process-step reveal"}>
              <span className={"num"}>05</span>
              <h3>Prototype</h3>
              <p>Interactive prototypes real enough to get honest reactions.</p>
            </div>
            <div className={"process-step reveal"} data-delay={"1"}>
              <span className={"num"}>06</span>
              <h3>Test</h3>
              <p>
                Usability sessions with real users — five people, brutal
                clarity.
              </p>
            </div>
            <div className={"process-step reveal"} data-delay={"2"}>
              <span className={"num"}>07</span>
              <h3>Iterate</h3>
              <p>
                Fold findings back in. Kill darlings early, keep what works.
              </p>
            </div>
            <div className={"process-step reveal"} data-delay={"3"}>
              <span className={"num"}>08</span>
              <h3>Deliver</h3>
              <p>
                Specs, tokens, and handoff docs engineers actually want to use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id={"contact"}>
        <div className={"wrap"}>
          <div className={"contact-grid"}>
            <div className={"contact-info"}>
              <p className={"eyebrow reveal"}>Contact</p>
              <h2 className={"reveal"}>Let's make something people love.</h2>
              <p className={"lede reveal"}>
                Hiring for a UX role, or have a product that needs untangling?
                Tell me what you're working on — I reply to every serious
                message within 48 hours.
              </p>
              <div className={"contact-channels reveal"}>
                <a
                  className={"channel"}
                  href={"mailto:aravaharshith@gmail.com"}
                >
                  <span className={"ch-icon"}>
                    <svg
                      width={"17"}
                      height={"17"}
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                    >
                      <rect
                        x={"2"}
                        y={"4"}
                        width={"20"}
                        height={"16"}
                        rx={"3"}
                      />
                      <path d={"m2 7 10 7L22 7"} />
                    </svg>
                  </span>
                  <div>
                    <b>Email</b>
                    <span>aravaharshith@gmail.com</span>
                  </div>
                </a>
                <a
                  className={"channel"}
                  href={"https://www.linkedin.com/in/harshitharava/"}
                  target={"_blank"}
                  rel={"noopener"}
                >
                  <span className={"ch-icon"}>
                    <svg
                      width={"17"}
                      height={"17"}
                      viewBox={"0 0 24 24"}
                      fill={"currentColor"}
                    >
                      <path
                        d={
                          "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-8.5c0-2.03-.04-4.64-2.83-4.64-2.83 0-3.27 2.2-3.27 4.5V24H8V8z"
                        }
                      />
                    </svg>
                  </span>
                  <div>
                    <b>LinkedIn</b>
                    <span>linkedin.com/in/harshitharava</span>
                  </div>
                </a>
                <a className={"channel"} href={"#resume-placeholder"}>
                  {/* TEMPORARY PLACEHOLDER: swap for the real resume file URL. */}
                  <span className={"ch-icon"}>
                    <svg
                      width={"17"}
                      height={"17"}
                      viewBox={"0 0 24 24"}
                      fill={"none"}
                      stroke={"currentColor"}
                      strokeWidth={"2"}
                      strokeLinecap={"round"}
                      strokeLinejoin={"round"}
                    >
                      <path
                        d={
                          "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                        }
                      />
                    </svg>
                  </span>
                  <div>
                    <b>Resume</b>
                    <span>Temporary placeholder — resume file coming soon</span>
                  </div>
                </a>
                <a
                  className={"channel"}
                  href={"https://www.behance.net/aravaharshith3"}
                  target={"_blank"}
                  rel={"noopener"}
                >
                  <span className={"ch-icon"}>
                    <svg
                      width={"17"}
                      height={"17"}
                      viewBox={"0 0 24 24"}
                      fill={"currentColor"}
                    >
                      <path
                        d={
                          "M9.1 5.2c1.9 0 3.3 1 3.3 2.9 0 1.1-.6 1.9-1.5 2.4 1.3.4 2 1.4 2 2.9 0 2.2-1.7 3.4-3.9 3.4H2V5.2h7.1zm-.5 4.4c.9 0 1.4-.4 1.4-1.2s-.6-1.1-1.4-1.1H4.6v2.3h4zm.2 5c1 0 1.6-.5 1.6-1.4s-.6-1.3-1.6-1.3H4.6v2.7h4.2zM17.9 8.6c2.5 0 4.1 1.8 4.1 4.4v.7h-6c.2 1.2 1 1.9 2.1 1.9.9 0 1.5-.3 1.8-.9h2c-.5 1.7-1.9 2.6-3.9 2.6-2.6 0-4.3-1.8-4.3-4.4 0-2.5 1.8-4.3 4.2-4.3zm1.9 3.6c-.1-1.1-.9-1.8-1.9-1.8s-1.8.7-2 1.8h3.9zM15.3 6h5.2v1.4h-5.2V6z"
                        }
                      />
                    </svg>
                  </span>
                  <div>
                    <b>Behance</b>
                    <span>behance.net/aravaharshith3</span>
                  </div>
                </a>
              </div>
            </div>

            <form
              className={"contact-form reveal"}
              action={"#contact-form-placeholder"}
              method={"POST"}
            >
              <h3>Tell me about your project</h3>
              <input
                type={"hidden"}
                name={"_subject"}
                value={"Portfolio inquiry"}
              />
              <input type={"hidden"} name={"_captcha"} value={"false"} />

              <input
                type={"text"}
                name={"_honey"}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete={"off"}
              />
              <div className={"field"}>
                <label htmlFor={"f-name"}>Name</label>
                <input
                  id={"f-name"}
                  name={"name"}
                  type={"text"}
                  required
                  autoComplete={"name"}
                  placeholder={"Your name"}
                />
              </div>
              <div className={"field"}>
                <label htmlFor={"f-email"}>Email</label>
                <input
                  id={"f-email"}
                  name={"email"}
                  type={"email"}
                  required
                  autoComplete={"email"}
                  placeholder={"you@company.com"}
                />
              </div>
              <div className={"field"}>
                <label htmlFor={"f-type"}>What is this about?</label>
                <select id={"f-type"} name={"inquiry_type"}>
                  <option>Freelance / client project</option>
                  <option>Full-time opportunity</option>
                  <option>Consulting or audit</option>
                  <option>Speaking / mentoring</option>
                  <option>Something else</option>
                </select>
              </div>
              <div className={"field"}>
                <label htmlFor={"f-message"}>Message</label>
                <textarea
                  id={"f-message"}
                  name={"message"}
                  required
                  placeholder={"What are you building, and where does it hurt?"}
                ></textarea>
              </div>
              <button className={"btn btn-primary"} type={"submit"}>
                Send message{" "}
                <span className={"arrow"} aria-hidden={"true"}>
                  →
                </span>
              </button>
              <p className={"form-note"}>
                Straight to my inbox. No newsletters, no spam — just a reply.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
