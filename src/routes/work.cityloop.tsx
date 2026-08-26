import { createFileRoute } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";

import heroImage from "@/assets/cityloop/hero/cityloop-hero.webp";
import contributionImage from "@/assets/cityloop/contribution/cityloop-contribution.webp";
import iaImage from "@/assets/cityloop/information-architecture/cityloop-information-architecture.webp";
import primaryPersona from "@/assets/cityloop/personas/cityloop-primary-persona.webp";
import primaryPersonaDark from "@/assets/cityloop/personas/cityloop-primary-persona-dark.webp";
import userJourney from "@/assets/cityloop/user-journey/cityloop-user-journey.webp";
import userJourneyDark from "@/assets/cityloop/user-journey/cityloop-user-journey-dark.webp";
import userFlowImage from "@/assets/cityloop/user-flow/cityloop-user-flow.webp";
import userFlowImageDark from "@/assets/cityloop/user-flow/cityloop-user-flow-dark.webp";

import lofiMoodcast from "@/assets/cityloop/low-fidelity-screens/cityloop-moodcast.webp";
import lofiDining from "@/assets/cityloop/low-fidelity-screens/cityloop-dining.webp";
import lofiEvents from "@/assets/cityloop/low-fidelity-screens/cityloop-events.webp";
import lofiMuseum from "@/assets/cityloop/low-fidelity-screens/cityloop-museum-detail.webp";
import lofiRestaurant from "@/assets/cityloop/low-fidelity-screens/cityloop-restaurant-detail.webp";
import lofiDesktop from "@/assets/cityloop/low-fidelity-screens/cityloop-desktop-page.webp";

import contextAware from "@/assets/cityloop/experience/cityloop-context-aware-discovery.webp";
import categoryDiscovery from "@/assets/cityloop/experience/cityloop-category-based-discovery.webp";
import booking1 from "@/assets/cityloop/experience/cityloop-seamless-booking-experience-1.webp";
import booking2 from "@/assets/cityloop/experience/cityloop-seamless-booking-experience-2.webp";
import responsiveExperience from "@/assets/cityloop/experience/cityloop-responsive-experience.webp";

// Dark-mode counterparts: same compositions, re-exported with annotation arrows
// and labels that stay legible against a dark page. Swapped in purely by CSS
// visibility, never both rendered visible at once.
import contextAwareDark from "@/assets/cityloop/experience/cityloop-context-aware-discovery-dark.webp";
import categoryDiscoveryDark from "@/assets/cityloop/experience/cityloop-category-based-discovery-dark.webp";
import booking1Dark from "@/assets/cityloop/experience/cityloop-seamless-booking-experience-1-dark.webp";
// NOTE: supplied as "...Experience 3-dark.png" — no light-mode "3" exists, and this
// file's pixel dimensions (2164x1059) match "Seamless Booking Experience 2.png"
// exactly, so it is used as booking2's dark counterpart. Flagged in README.
import booking2Dark from "@/assets/cityloop/experience/cityloop-seamless-booking-experience-3-dark.webp";
import responsiveExperienceDark from "@/assets/cityloop/experience/cityloop-responsive-experience-dark.webp";

import logoOrange from "@/assets/cityloop/logos/cityloop-logo-orange-color.svg";
import logoLight from "@/assets/cityloop/logos/cityloop-logo-light-color.svg";
import primaryButton from "@/assets/cityloop/buttons/cityloop-primary-button.svg";
import secondaryButton from "@/assets/cityloop/buttons/cityloop-secondary-button.svg";

const ICONS = import.meta.glob("@/assets/cityloop/icons/*.svg", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const DESCRIPTION =
  "UI/UX case study: CityLoop, a city-exploration app that brings dining, events, movies, and context-aware recommendations into one discovery platform.";

export const Route = createFileRoute("/work/cityloop")({
  head: () => ({
    meta: [
      { title: "CityLoop case study — Harshith Arava" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "CityLoop case study — Harshith Arava" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/cityloop" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    // TEMPORARY PLACEHOLDER: relative canonical until the real domain is live.
    links: [{ rel: "canonical", href: "/work/cityloop" }],
  }),
  component: CityLoopPage,
});

type ThemedImageProps = {
  light: string;
  dark: string;
  alt: string;
};

// Renders the light and dark exports of one finished composition. Only one
// is ever visible: CSS toggles `display` off the hidden one entirely (not
// opacity/visibility), so it never overlaps or crossfades with its sibling,
// and doesn't affect layout while hidden.
function ThemedImage({ light, dark, alt }: ThemedImageProps) {
  return (
    <>
      <img className="cl-exp-light" src={light} alt={alt} />
      <img className="cl-exp-dark" src={dark} alt={alt} />
    </>
  );
}

function CityLoopPage() {
  usePortfolioEffects();
  const icons = Object.entries(ICONS)
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([path, src]) => src);

  return (
    <main id="main" className="cl">
      {/* ---------- Hero ---------- */}
      <section className="cl-hero">
        <div className="cl-hero-media">
          <img src={heroImage} alt="The CityLoop app shown on a phone resting on a wooden shelf" />
          <div className="grain-strong" aria-hidden="true" />
          {/* the supplied hero export is the photograph only; the wordmark is set
              in the case study's own display face, as on the artboard */}
          <div className="cl-hero-title-layer">
            <div className="cl-wrap cl-hero-title-rail">
              <p className="cl-hero-title">CityLoop</p>
            </div>
          </div>
          <div className="cl-wrap cl-hero-tags">
            <span>UX Research</span>
            <span>Product Design</span>
            <span>Interaction Design</span>
            <span>Responsive Design</span>
            <span>Accessibility</span>
            <span>Design Systems</span>
          </div>
        </div>
      </section>

      {/* ---------- Intro + meta ---------- */}
      <div className="cl-wrap">
        <div className="cl-intro">
          <h1>Where "What Should We Do Tonight?" Finally Has One Answer</h1>
          <div>
            <p>
              Planning a day out rarely happens in a single place. People browse restaurants, compare
              events, check movie timings, and coordinate plans across multiple platforms before
              making a decision. While these services solve individual needs well, the overall
              planning experience remains fragmented, requiring users to repeatedly switch between
              applications before deciding what to do.
            </p>
            <p>
              CityLoop was designed to simplify this journey by bringing urban discovery into one
              cohesive platform. Rather than treating every outing as an isolated activity, the
              platform encourages exploration through context, helping users discover experiences
              that align with their surroundings, preferences, and everyday decision-making. The
              result is a seamless discovery experience that reduces friction while maintaining a
              familiar and consistent interaction across different activities.
            </p>
          </div>
        </div>

        <div className="cl-meta">
          <div>
            <h4>Role</h4>
            <p>UI/UX Designer</p>
          </div>
          <div>
            <h4>Duration</h4>
            <p>8 Weeks</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>Figma • Mural • FigJam</p>
          </div>
          <div>
            <h4>Platform</h4>
            <p>Mobile &amp; Desktop</p>
          </div>
        </div>
      </div>

      {/* ---------- My Contribution ---------- */}
      <section className="cl-section">
        <div className="cl-wrap">
          <div className="cl-contribution reveal">
            <div className="cl-contribution-media">
              <img src={contributionImage} alt="CityLoop movie detail screens on two phones" />
            </div>
            <div>
              <h2>My Contribution</h2>
              <p>
                As one of four designers, I was responsible for translating the product vision into a
                cohesive visual experience. My primary contributions included designing the complete
                Movies booking journey, the Moodcast experience, and the responsive desktop
                interface, while establishing the project's visual language through branding,
                reusable UI components, and high-fidelity prototypes. I also contributed to user
                research and information architecture, collaborating with the team to shape
                interaction patterns and accessibility decisions that ensured a consistent experience
                across the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Understanding the Problem ---------- */}
      <section className="cl-section">
        <div className="cl-wrap reveal">
          <h2>Understanding the Problem</h2>
          <div className="cl-cols">
            <div>
              <p className="cl-lede">
                The ask is really simple: You shouldn't need five tabs to plan one evening.
              </p>
              <p>
                Whether it's a spontaneous evening after work or a weekend outing with friends,
                planning often involves jumping between multiple applications. One platform is used
                to browse restaurants, another to discover events, another to book movie tickets,
                while external factors like weather, time of day, or personal mood are considered
                separately. The decision-making process becomes fragmented long before a booking is
                ever made.
              </p>
            </div>
            <div>
            <p>
              Our research revealed that existing platforms are primarily designed around individual
              services rather than the broader experience of planning an outing. While each
              application performs its own function effectively, none considers the user's changing
              context or supports exploration across different types of activities in a unified way.
            </p>
            <p>
              This gap presented an opportunity to rethink how people discover experiences, not by
              replacing existing services, but by creating a single platform that supports
              exploration before the final decision is made.
            </p>
            </div>
          </div>

          <div className="cl-band">
            <p>How do we make planning, less a logistical headache, more a meaningful experience?</p>
          </div>
        </div>
      </section>

      {/* ---------- Research ---------- */}
      <section className="cl-section">
        <div className="cl-wrap reveal">
          <h2>Research</h2>
          <div className="cl-cols">
            <p>
              We conducted research on lifestyle and booking platforms, analysed competing products,
              and evaluated existing interfaces using heuristic evaluation and cognitive
              walkthroughs. Together, these methods helped us identify recurring usability issues,
              uncover opportunities for innovation, and understand how contextual factors such as
              weather, time, and personal preferences influence everyday decision-making.
            </p>
            <p>
              Before exploring interface solutions, we focused on understanding how people currently
              plan outings, what influences their decisions, and where existing products create
              friction. Our research combined qualitative and evaluative methods to build a broader
              understanding of both user behaviour and the current landscape of urban discovery.
            </p>
          </div>

          <div className="cl-table">
            <div className="cl-table-scroll">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Method</th>
                    <th scope="col">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Competitive Analysis</th>
                    <td>
                      Understand how existing discovery and booking platforms support users
                      throughout the planning process.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Heuristic Evaluation</th>
                    <td>
                      Identify usability issues and evaluate interface quality using established UX
                      principles.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Cognitive Walkthrough</th>
                    <td>
                      Examine how first-time users complete key tasks and where interaction
                      breakdowns occur.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Background Research</th>
                    <td>
                      Explore how contextual factors such as weather, location, and daily routines
                      influence urban discovery.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div style={{ marginTop: "calc(44 * var(--u))" }}>
            <h3>Observation</h3>
            <p>
              Rather than revealing a need for another booking platform, our research highlighted a
              larger opportunity: users needed support before making a booking. Their decisions were
              shaped by context as much as by intent, suggesting that urban discovery should adapt to
              changing circumstances instead of relying solely on static categories.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Understanding Our Users ---------- */}
      <section className="cl-section">
        <div className="cl-wrap reveal">
          <h2>Understanding Our Users</h2>
          <p className="cl-lede">Designing for real behaviours, not assumptions</p>
          <div className="cl-cols">
            <p>
              Our research showed that planning an outing is rarely a linear process. Users often
              begin with a general intention, such as wanting to relax, spend time with friends, or
              explore something new, rather than searching for a specific restaurant or event. Their
              decisions evolve as they compare options, check availability, and consider contextual
              factors like weather, time, and convenience.
            </p>
            <p>
              To better understand these behaviours, we developed personas and mapped their journeys
              through the planning process. Rather than representing individual users, these
              artefacts helped us identify recurring patterns, frustrations, and opportunities that
              guided our design decisions throughout the project.
            </p>
          </div>

          <p className="cl-section-label">Primary Persona</p>

          <figure className="cl-figure cl-figure-personas">
            <ThemedImage
              light={primaryPersona}
              dark={primaryPersonaDark}
              alt="Primary persona boards for Sofia Lehtinen and Mika Rainio, each with background and design impact"
            />
          </figure>

          {/* ---------- User Journey ---------- */}
          <p className="cl-section-label">User Journey</p>

          {/* finished composition: stage bar, all four rows and their colour
              coding are part of the export */}
          <figure className="cl-figure cl-figure-journey">
            <ThemedImage
              light={userJourney}
              dark={userJourneyDark}
              alt="User journey from Discover through Explore, Compare, Decide to Book, showing user goal, user actions, pain points and scope for each stage"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Research Findings ---------- */}
      <section className="cl-section">
        <div className="cl-wrap reveal">
          <h2>Research Findings</h2>
          <div className="cl-grid cl-grid-4">
            <div className="cl-card">
              <h3>Discovery happens before booking</h3>
              <p>
                Users spend significantly more time deciding what to do than actually completing a
                booking. Improving discovery therefore has a greater impact on the overall experience
                than optimising the transaction alone.
              </p>
            </div>
            <div className="cl-card">
              <h3>Context influences decisions</h3>
              <p>
                Weather, time of day and personal mood frequently shape activity choices, yet
                existing platforms rarely incorporate these factors into the discovery experience.
              </p>
            </div>
            <div className="cl-card">
              <h3>Consistency reduces cognitive load</h3>
              <p>
                Although users switch between restaurants, events and movies during planning, they
                expect familiar navigation patterns and interactions throughout the experience.
              </p>
            </div>
            <div className="cl-card">
              <h3>Exploration should remain flexible</h3>
              <p>
                Users don't always begin with a specific destination in mind. Instead, they move
                fluidly between different activities before committing to one, highlighting the need
                for a platform that supports exploration rather than rigid task completion.
              </p>
            </div>
          </div>

          <div className="cl-outcome">
            <h3>Design Outcome</h3>
            <p>
              Our research shifted the focus from designing another booking platform to designing a
              context-aware discovery experience.
            </p>
            <p>
              These insights became the foundation for CityLoop's design principles, information
              architecture, and feature set.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Design Principles ---------- */}
      <section className="cl-section">
        <div className="cl-wrap reveal">
          <h2>Design Principles</h2>
          {/* filled #efd9c8 / #b6b6b6-bordered, matching .cl-card elsewhere on
              the page — confirmed against the PDF; unlike the outline-only
              panels in Design System & Accessibility further down */}
          <div className="cl-grid cl-grid-2">
            <div className="cl-card">
              <h3>Context First</h3>
              <p>
                Recommendations should adapt to factors such as mood, weather, time, and location
                instead of relying solely on predefined categories.
              </p>
            </div>
            <div className="cl-card">
              <h3>Reduce Planning Friction</h3>
              <p>
                Users should be able to move from discovery to decision without repeatedly switching
                between different platforms.
              </p>
            </div>
            <div className="cl-card">
              <h3>Consistency Across Experiences</h3>
              <p>
                Dining, Events, Movies, and Moodcast should feel like parts of one product rather
                than separate services.
              </p>
            </div>
            <div className="cl-card">
              <h3>Simple by Default</h3>
              <p>
                Reduce cognitive load through clear hierarchy, progressive disclosure, and familiar
                interaction patterns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Information Architecture ---------- */}
      <section className="cl-section">
        <div className="cl-wrap reveal">
          <h2>Information Architecture</h2>
          <div className="cl-cols">
            <div>
              <p>
                With our design principles established, the next step was to organise the platform
                into a clear and predictable structure. Rather than overwhelming users with a deep
                navigation hierarchy, we adopted a shallow information architecture that prioritises
                quick access to the platform's core experiences.
              </p>
              <p>
                The application is organised around four primary discovery sections: Dining, Events,
                Movies, and Moodcast, allowing users to explore different activities through a
                consistent navigation model while preserving the unique functionality of each
                category. Supporting features such as Search, Saved, Bookings, and Profile remain
                easily accessible throughout the experience, reducing navigation effort and
                encouraging seamless exploration.
              </p>
            </div>
            <figure className="cl-figure" style={{ marginTop: 0 }}>
              <img src={iaImage} alt="CityLoop information architecture diagram" />
            </figure>
          </div>

          <div style={{ marginTop: "calc(48 * var(--u))" }}>
            <h3>Key Design Decisions</h3>
            <div className="cl-grid cl-grid-4">
              <div className="cl-card">
                <p>
                  Shallow navigation keeps essential actions within a few interactions, reducing
                  cognitive load.
                </p>
              </div>
              <div className="cl-card">
                <p>
                  Category-based organisation provides dedicated experiences for Dining, Events,
                  Movies, and Moodcast without fragmenting the product.
                </p>
              </div>
              <div className="cl-card">
                <p>
                  Consistent page structure enables users to move between sections without
                  relearning the interface.
                </p>
              </div>
              <div className="cl-card">
                <p>
                  Shared detail pages standardise actions such as viewing information, saving
                  favourites, and completing bookings
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Platform Journey (user flow artwork) ---------- */}
      <section className="cl-section">
        <div className="cl-wrap reveal">
          <h2>Platform Journey</h2>
          <p>
            By mapping the end-to-end experience, we identified where users encountered the most
            friction. The journey revealed that the biggest challenge wasn't completing a booking, it
            was navigating the fragmented discovery process that came beforehand. This reinforced the
            importance of creating a unified platform where users could explore different experiences
            through consistent interaction patterns while still having the flexibility to choose what
            suited them best.
          </p>
          <figure className="cl-figure cl-figure-scroll">
            <ThemedImage
              light={userFlowImage}
              dark={userFlowImageDark}
              alt="CityLoop platform journey flow: onboarding, browse and discover hub, details view, dining, events and movies action flows, Moodcast context flow, and post journey"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Low Fidelity Exploration ---------- */}
      <section className="cl-section">
        <div className="cl-wrap reveal">
          <h2>Low Fidelity Exploration</h2>
          <div className="cl-cols">
            <p>
              The wireframes focused on validating how users would browse different experiences, from
              context-aware recommendations in Moodcast to category-based discovery for Dining,
              Events, and Movies. We also explored detail pages, booking flows, and responsive
              layouts to ensure consistency across mobile and desktop.
            </p>
            <p>
              Before developing the visual identity, we used low-fidelity wireframes to explore the
              overall structure of the platform. These early concepts helped us experiment with
              layouts, information hierarchy, and navigation without being influenced by colours,
              typography, or visual styling.
            </p>
          </div>

          <div style={{ marginTop: "calc(57 * var(--u))" }}>
            <h3>Key Explorations</h3>
            <div className="cl-brackets">
              <div className="cl-bracket cl-bracket-down">
                <h4>Content hierarchy</h4>
                <p>
                  Tested different ways of presenting recommendations, categories, and featured
                  experiences.
                </p>
              </div>
              <div className="cl-bracket cl-bracket-up">
                <h4>Navigation patterns</h4>
                <p>Refined how users move between discovery, details, and booking</p>
              </div>
              <div className="cl-bracket cl-bracket-down">
                <h4>Responsive layouts</h4>
                <p>
                  Explored interfaces across mobile and desktop while maintaining a consistent
                  experience
                </p>
              </div>
              <div className="cl-bracket cl-bracket-up">
                <h4>Action prioritisation</h4>
                <p>
                  Evaluated the placement of key actions such as booking, saving, and viewing
                  additional information
                </p>
              </div>
            </div>
          </div>

          <p className="cl-section-label">Discovery Experience</p>
          <div className="cl-screens cl-screens-3 cl-phones">
            <figure>
              <img src={lofiMoodcast} alt="Moodcast home wireframe" />
              <figcaption>Moodcast home</figcaption>
            </figure>
            <figure>
              <img src={lofiDining} alt="Dining home wireframe" />
              <figcaption>Dining home</figcaption>
            </figure>
            <figure>
              <img src={lofiEvents} alt="Events home wireframe" />
              <figcaption>Events home</figcaption>
            </figure>
          </div>

          <p className="cl-section-label">Detail Experience</p>
          <div className="cl-screens cl-screens-2 cl-phones">
            <figure>
              <img src={lofiMuseum} alt="Museum detail page wireframe" />
              <figcaption>Museum detail page</figcaption>
            </figure>
            <figure>
              <img src={lofiRestaurant} alt="Restaurant detail page wireframe" />
              <figcaption>Restaurant detail page</figcaption>
            </figure>
          </div>

          <p className="cl-section-label">Responsive Exploration</p>
          <figure className="cl-figure">
            <img src={lofiDesktop} alt="Desktop wireframe" />
            <figcaption>Desktop wireframe</figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- The Experience ---------- */}
      <section className="cl-section">
        <div className="cl-wrap reveal">
          <h2>The Experience</h2>
          <p className="cl-lede">Transforming research into a cohesive product experience</p>
          <div className="cl-cols">
            <p>
              The research phase revealed that users struggled long before making a booking. Rather
              than optimising individual features, our focus shifted towards designing an experience
              that supports discovery, comparison, and decision-making as one continuous journey.
            </p>
            <p>
              Every interface was guided by the same design principles like prioritising contextual
              relevance, reducing planning friction, and maintaining consistency across different
              experiences. Instead of reinventing familiar interaction patterns, we refined them to
              create an interface that feels intuitive from the first interaction.
            </p>
          </div>

          <h3 className="cl-exp-heading">Context Aware Discovery</h3>
          <p>
            Moodcast was designed to reduce decision fatigue by surfacing recommendations that
            respond to a user's immediate context rather than relying solely on manual search.
          </p>
          {/* finished composition: phone, pointers and annotation bubbles are part of the export */}
          <figure className="cl-figure cl-figure-exp cl-figure-exp-cap-a">
            <ThemedImage
              light={contextAware}
              dark={contextAwareDark}
              alt="Context Aware Discovery: the Moodcast screen annotated with how weather, recommendation cards, contextual tags and secondary navigation work together"
            />
          </figure>

          <h3 className="cl-exp-heading">Category Based Discovery</h3>
          <p>
            Dining and Events were designed around a shared interaction model, allowing users to
            browse different categories through familiar layouts while preserving the unique identity
            of each experience.
          </p>
          <figure className="cl-figure cl-figure-exp">
            <ThemedImage
              light={categoryDiscovery}
              dark={categoryDiscoveryDark}
              alt="Category Based Discovery: the Dining and Events screens annotated with curated categories, grouped content, featured experiences and the shared interaction model"
            />
          </figure>

          <h3 className="cl-exp-heading">Seamless Booking Experience</h3>
          <p>
            The movie booking flow extends CityLoop beyond discovery by providing a familiar and
            frictionless journey from selection to payment.
          </p>
          {/* this export is close to square (three phones stacked tighter than its
              siblings), so at full column width it renders far taller than the other
              Experience compositions; capped on wider screens to keep phone scale
              consistent, still shown whole and undistorted */}
          <figure className="cl-figure cl-figure-exp cl-figure-exp-compact">
            <ThemedImage
              light={booking1}
              dark={booking1Dark}
              alt="Seamless Booking Experience: the Movies entry point and detail screens annotated with clear entry points and progressive disclosure"
            />
          </figure>
          <figure className="cl-figure cl-figure-exp">
            <ThemedImage
              light={booking2}
              dark={booking2Dark}
              alt="Seamless Booking Experience: showtime, seat selection and payment screens annotated with one decision at a time, seat colour coding and familiar payment patterns"
            />
          </figure>

          <h3 className="cl-exp-heading">Responsive Experience</h3>
          <p>
            The desktop experience adapts CityLoop's interaction patterns to larger screens while
            preserving the familiarity established on mobile.
          </p>
          <figure className="cl-figure cl-figure-exp">
            <ThemedImage
              light={responsiveExperience}
              dark={responsiveExperienceDark}
              alt="Responsive Experience: the CityLoop desktop interface annotated with expanding layouts, shared components and a design language that scales across devices"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Design System & Accessibility ---------- */}
      <section className="cl-section">
        <div className="cl-wrap reveal">
          <h2>Design System &amp; Accessibility</h2>
          <p className="cl-lede">Building consistency through a shared design system</p>
          <p>
            The design system was created to ensure visual consistency across every feature while
            supporting scalability and accessibility throughout the product. Accessibility
            considerations including colour contrast, touch target sizing, and clear visual hierarchy
            were incorporated throughout the interface to create an experience that is both intuitive
            and inclusive.
          </p>

          <div className="cl-system">
            <div className="cl-card-outline">
              <h3>Icons</h3>
              <div className="cl-icons">
                {icons.map((src, i) => (
                  <img key={src} src={src} alt="" aria-hidden="true" />
                ))}
              </div>
            </div>

            <div className="cl-card-outline">
              <h3>Color Palette</h3>
              {/* the artboard's palette: a seven-step accent ramp and a seven-step
                  neutral ramp, 76 units square */}
              <div className="cl-swatches">
                <span className="cl-swatch" style={{ background: "#fdedeb" }} />
                <span className="cl-swatch" style={{ background: "#f9c5bc" }} />
                <span className="cl-swatch" style={{ background: "#f68e74" }} />
                <span className="cl-swatch" style={{ background: "#d95f30" }} />
                <span className="cl-swatch" style={{ background: "#a14421" }} />
                <span className="cl-swatch" style={{ background: "#6c2b13" }} />
                <span className="cl-swatch" style={{ background: "#3b1406" }} />
              </div>
              <div className="cl-swatches">
                <span className="cl-swatch" style={{ background: "#d7dfd8" }} />
                <span className="cl-swatch" style={{ background: "#b0b7b1" }} />
                <span className="cl-swatch" style={{ background: "#8b918c" }} />
                <span className="cl-swatch" style={{ background: "#686c68" }} />
                <span className="cl-swatch" style={{ background: "#464947" }} />
                <span className="cl-swatch" style={{ background: "#282a28" }} />
                <span className="cl-swatch" style={{ background: "#101110" }} />
              </div>
            </div>

            <div className="cl-card-outline cl-buttons">
              <h3>Buttons</h3>
              <h4>Primary</h4>
              <img src={primaryButton} alt="Primary button states: enabled, pressed, disabled" />
              <h4 style={{ marginTop: "calc(24 * var(--u))" }}>Secondary</h4>
              <img src={secondaryButton} alt="Secondary button states: default toggle, selected toggle" />
            </div>

            <div className="cl-card-outline">
              <h3>Spacing</h3>
              <p>8 pt Grid</p>
              <p>16 px Padding</p>
              <p>24 px Section Gap</p>
            </div>

            <div className="cl-card-outline">
              <h3>Typography</h3>
              <h4>Heading</h4>
              <p className="cl-type-sample-kanit">
                Kanit Semibold - 28px
                <br />
                Kanit Bold - 28px
              </p>
              <h4 style={{ marginTop: "calc(20 * var(--u))" }}>Subheading</h4>
              <p className="cl-type-sample-kanit">
                Kanit Semibold - 20px
                <br />
                Kanit Medium - 20px
              </p>
              <h4 style={{ marginTop: "calc(20 * var(--u))" }}>Body</h4>
              <p>
                DM Sans Regular - 14px
                <br />
                DM Sans Medium - 14px
                <br />
                DM Sans Semibold - 14px
                <br />
                DM Sans Regular - 12px
                <br />
                DM Sans Medium - 12px
                <br />
                DM Sans Semibold - 12px
              </p>
            </div>

            <div className="cl-card-outline">
              <h3>Logo</h3>
              <div className="cl-logos">
                <div>
                  <div className="cl-logo-plate">
                    <img src={logoOrange} alt="CityLoop logo for light backgrounds" />
                  </div>
                  <p style={{ marginTop: "calc(14 * var(--u))" }}>For light background</p>
                </div>
                <div>
                  <div className="cl-logo-dark">
                    <img src={logoLight} alt="CityLoop logo for dark backgrounds" />
                  </div>
                  <p style={{ marginTop: "calc(14 * var(--u))" }}>For dark background</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Reflection ---------- */}
      <section className="cl-section cl-reflection">
        <div className="cl-wrap reveal">
          <h2>Reflection</h2>
          <p>
            CityLoop taught me that effective user experiences are shaped long before visual design
            begins. Research, information architecture, and iterative wireframing provided the
            foundation for decisions that ultimately influenced the final interface. Rather than
            treating each feature independently, I learned the importance of designing a cohesive
            product where navigation, interaction patterns, and visual language remain consistent
            across multiple user journeys.
          </p>

          <div className="cl-cols" style={{ marginTop: "calc(40 * var(--u))" }}>
            <div>
              <h3>Challenges</h3>
              <p>
                Designing a platform that combines dining, events, movies, and context-aware
                recommendations required balancing flexibility with consistency. Ensuring that each
                experience felt distinct while maintaining familiar navigation and reusable
                components was one of the project's biggest design challenges.
              </p>
            </div>
            <div>
              <h3>Key Takeaways</h3>
              <p>
                This project strengthened my ability to translate research insights into design
                decisions, collaborate within a multidisciplinary team, and contribute to a product
                from early research through high-fidelity prototyping. It reinforced that successful
                UX design is not only about creating polished interfaces but also about building
                experiences that are intuitive, scalable, and grounded in user needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
