import { createFileRoute } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";

import heroFullLight from "@/assets/mytown/hero/mytown-hero-full.webp";
import heroFullDark from "@/assets/mytown/hero/mytown-hero-full-dark.webp";
import logoLight from "@/assets/mytown/hero/mytown-logo.webp";
import logoDark from "@/assets/mytown/hero/mytown-logo-dark.webp";
/* the hero photo's sky is genuinely semi-transparent (confirmed by
   sampling — not a fixed light colour), so it blends with the page's own
   background and really does read darker in dark mode, the same way the
   headline text does. The navy logo that works against the light-blended
   sky loses almost all contrast against the darker one, so it swaps to
   the supplied light-blue wordmark in dark mode, same as the headline. */

import problemLight from "@/assets/mytown/problem/mytown-problem.webp";
import problemDark from "@/assets/mytown/problem/mytown-problem-dark.webp";

import researchJourneyLight from "@/assets/mytown/research/mytown-research-journey.webp";
import researchJourneyDark from "@/assets/mytown/research/mytown-research-journey-dark.webp";
import researchMethodsLight from "@/assets/mytown/research/mytown-research-methods.webp";
import researchMethodsDark from "@/assets/mytown/research/mytown-research-methods-dark.webp";

import userJourneyLight from "@/assets/mytown/journey-mapping/mytown-user-journey.webp";
import userJourneyDark from "@/assets/mytown/journey-mapping/mytown-user-journey-dark.webp";

import informationArchitecture from "@/assets/mytown/information-architecture/mytown-information-architecture.webp";

import designSystemLight from "@/assets/mytown/design-system/mytown-design-system.webp";
import designSystemDark from "@/assets/mytown/design-system/mytown-design-system-dark.webp";
import buttonsImage from "@/assets/mytown/design-system/mytown-buttons.webp";
import formControlsImage from "@/assets/mytown/design-system/mytown-form-controls.webp";

import exp01Light from "@/assets/mytown/experience/mytown-experience-01.webp";
import exp01Dark from "@/assets/mytown/experience/mytown-experience-01-dark.webp";
import exp02Light from "@/assets/mytown/experience/mytown-experience-02.webp";
import exp02Dark from "@/assets/mytown/experience/mytown-experience-02-dark.webp";
import exp03Light from "@/assets/mytown/experience/mytown-experience-03.webp";
import exp03Dark from "@/assets/mytown/experience/mytown-experience-03-dark.webp";
import exp04Light from "@/assets/mytown/experience/mytown-experience-04.webp";
import exp04Dark from "@/assets/mytown/experience/mytown-experience-04-dark.webp";

const DESCRIPTION =
  "UX case study: MyTown, a service concept helping international students settle into a new city — guided first-week tasks, consolidated support, local discovery, and community.";

export const Route = createFileRoute("/work/mytown")({
  head: () => ({
    meta: [
      { title: "MyTown case study — Harshith Arava" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "MyTown case study — Harshith Arava" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/mytown" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    // TEMPORARY PLACEHOLDER: relative canonical until the real domain is live.
    links: [{ rel: "canonical", href: "/work/mytown" }],
  }),
  component: MyTownPage,
});

type ThemedImageProps = {
  light: string;
  dark: string;
  alt: string;
};

// Renders the light and dark exports of one finished composition.
// Only one is ever visible — CSS toggles `display` off the hidden one,
// so it never overlaps its sibling and doesn't affect layout while
// hidden. Assets with no supplied dark export use a plain <img> and are
// deliberately left untouched in both themes rather than filtered.
function ThemedImage({ light, dark, alt }: ThemedImageProps) {
  return (
    <>
      <img className="mt-img-light" src={light} alt={alt} />
      <img className="mt-img-dark" src={dark} alt={alt} />
    </>
  );
}

function MyTownPage() {
  usePortfolioEffects();

  return (
    <main id="main" className="mt">
      {/* ---------- Hero ---------- */}
      {/* the supplied artwork is one continuous composition — sky,
          skyline, the four phones, and the "Arrival / Orientation /
          Essential Tasks / Support & Community" captions with their
          connecting arrows are all baked into a single image, already
          positioned exactly where the PDF places them. The area below
          the phones is genuine alpha transparency (confirmed by sampling
          — not a solid fill), so the page's own background shows through
          there, which is why the supplied dark export only recolours
          that caption text to a light tone rather than changing the sky:
          it's designed to sit on the dark theme's own dark page
          background, the same way the light export's dark captions sit
          on the light theme's cream background. Tags, logo and headline
          are overlaid on the empty sky at the top of the same image. */}
      <section className="mt-hero">
        <div className="mt-hero-photo">
          <ThemedImage
            light={heroFullLight}
            dark={heroFullDark}
            alt="Four MyTown screens — the splash screen, the home screen with a first-week checklist, a step-by-step SIM card guide, and the Support Hub — captioned Arrival, Orientation, Essential Tasks, and Support & Community"
          />
          <div className="mt-hero-overlay">
            {/* the tags sit in the page's normal-width wrap (matching the
                nav above), in one row like before; the logo/headline/sub
                sit in their own narrower centered block underneath —
                keeping the tags at their original width and position
                while centering only the lockup, per explicit direction */}
            <div className="mt-wrap mt-hero-tags-row">
              <div className="mt-hero-tags">
                <span>UX Research</span>
                <span>Human-Centered AI</span>
                <span>UX Design</span>
                <span>Figma</span>
                <span>Accessibility</span>
                <span>Interaction Design</span>
              </div>
            </div>

            <div className="mt-hero-rail">
              <div className="mt-hero-head">
                <figure className="mt-hero-logo-wrap">
                  <ThemedImage
                    light={logoLight}
                    dark={logoDark}
                    alt="MyTown logo"
                  />
                </figure>
                <div>
                  <h1 className="mt-hero-title">
                    Helping students
                    <br />
                    feel at home, sooner.
                  </h1>
                  <p className="mt-hero-sub">
                    Making every new beginning a little easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-wrap">
        <div className="mt-meta">
          <div>
            <h4>Role</h4>
            <p>UX &amp; Service Designer</p>
          </div>
          <div>
            <h4>Duration</h4>
            <p>8 Weeks</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>Figma • Mural • FigJam • Whiteboard</p>
          </div>
          <div>
            <h4>Team</h4>
            <p>5 Designers</p>
          </div>
          <div>
            <h4>Platform</h4>
            <p>Mobile</p>
          </div>
        </div>
      </div>

      {/* ---------- My Contribution ---------- */}
      <section className="mt-section">
        <div className="mt-wrap reveal">
          <h2>My Contribution</h2>
          <p>
            As one of two designers in a multidisciplinary team, I was involved
            throughout the project, from shaping the research to designing the
            final experience. I contributed to developing the interview script
            and later synthesized interview findings by reviewing the recorded
            sessions. Together with the other designer, I planned and
            facilitated the co-creation workshop, translating the findings into
            personas, journey maps, and design opportunities. I then designed
            the information architecture, created key mobile screens in Figma,
            and helped establish the application's visual identity, ensuring
            every design decision remained grounded in our research.
          </p>
        </div>
      </section>

      {/* ---------- Understanding the Problem ---------- */}
      <section className="mt-section">
        <div className="mt-wrap reveal">
          <h2>Understanding the Problem</h2>
          {/* the "challenge wasn't the lack of information" statement is
              already set inside the supplied problem artwork below, where the
              PDF places it — repeating it here as HTML duplicated it on the
              page */}
          <div className="mt-problem-intro">
            <p className="mt-lede">
              Starting a new life shouldn't begin with confusion
            </p>
            <p>
              For many international students, the excitement of moving to
              Finland is quickly replaced by navigating unfamiliar systems,
              administrative tasks, and scattered information.
            </p>
          </div>

          <figure className="mt-figure">
            <ThemedImage
              light={problemLight}
              dark={problemDark}
              alt="Diagram of the tasks facing a newly arrived student — registering an address with DVV, applying for a Poliisi card, banking, housing, transport, university services, healthcare, events and shopping — surrounded by the questions they ask along the way"
            />
          </figure>

          <div className="mt-hmw">
            <p>
              How might we simplify the first weeks of relocation by bringing
              essential information, services, and community support into one
              guided experience?
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Research Journey ---------- */}
      <section className="mt-section">
        <div className="mt-wrap reveal">
          <h2>Research Journey</h2>
          <p>
            Before designing the solution, we focused on understanding how
            international students experienced their first weeks in Finland.
            Through interviews, workshops, and journey mapping, we identified
            recurring challenges and translated them into actionable design
            opportunities.
          </p>
          <figure className="mt-figure mt-figure-scroll">
            <ThemedImage
              light={researchJourneyLight}
              dark={researchJourneyDark}
              alt="The research process, from semi-structured interviews and interview planning through workshop activities, research synthesis, personas and journey mapping, to feature prioritization"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Research Methods ---------- */}
      <section className="mt-section">
        <div className="mt-wrap reveal">
          <h2>Research Methods</h2>
          <p>
            We used a mix of qualitative methods to understand students' real
            experiences, challenges, and expectations while settling in Finland.
          </p>

          <div className="mt-grid mt-grid-2">
            <div className="mt-card">
              <h3>Semi-Structured Interviews</h3>
              <p>
                One-on-one conversations to explore students' experiences,
                challenges, and needs in depth. The script covered their
                background, relocation experience, current challenges and
                practical tasks, needs and expectations, reactions to potential
                features, and what would motivate continued use.
              </p>
            </div>
            <div className="mt-card">
              <h3>Workshop Activities</h3>
              <p>
                A collaborative session to validate insights, share experiences,
                and co-create ideas for features — structured around challenges
                and successes, what participants wished they'd had, and their
                feature preferences and reactions.
              </p>
            </div>
          </div>

          <figure className="mt-figure mt-figure-scroll">
            <ThemedImage
              light={researchMethodsLight}
              dark={researchMethodsDark}
              alt="The research methods in detail — an excerpt of the interview script, the workshop boards and focus areas, and the participant invitation email"
            />
          </figure>

          <div className="mt-ethics">
            <h3>Research Ethics</h3>
            <p>
              All participants signed the consent form before the interview.
              Data is anonymized, stored securely, and used only for this course
              project. Personal data will be deleted after the study.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Journey Mapping ---------- */}
      <section className="mt-section">
        <div className="mt-wrap reveal">
          <h2>Journey Mapping</h2>
          <div className="mt-cols">
            <p>
              To better understand how students' needs evolved over time, we
              mapped their relocation journey from pre-arrival to long-term
              settlement. This helped us visualize how actions, thoughts,
              emotions, and pain points changed across different stages of the
              relocation experience.
            </p>
            <p>
              By identifying moments of uncertainty alongside potential
              opportunities, we were able to pinpoint where timely guidance and
              support would have the greatest impact.
            </p>
          </div>
          <figure className="mt-figure mt-figure-scroll">
            <ThemedImage
              light={userJourneyLight}
              dark={userJourneyDark}
              alt="User journey map across four stages — before arrival, arrival week, settling in, and long-term usage — tracking actions, thoughts, feelings, pain points and opportunities at each stage"
            />
            <figcaption>
              Mapping the emotional and practical journey of an international
              student from arrival to long-term settlement.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ---------- Research Insights ---------- */}
      <section className="mt-section">
        <div className="mt-wrap reveal">
          <h2>Research Insights</h2>
          <p>
            Our interviews, workshop activities, and journey mapping revealed
            recurring patterns that extended beyond individual experiences.
            These insights became the foundation for every major design decision
            in MyTown.
          </p>

          <div className="mt-grid mt-grid-2">
            <div className="mt-card">
              <h3>Information existed, but it was scattered</h3>
              <p>
                Students relied on university websites, government portals,
                social media groups, and recommendations from peers. Finding
                reliable information often required switching between multiple
                sources, increasing confusion instead of reducing it.
              </p>
            </div>
            <div className="mt-card">
              <h3>Students require guidance</h3>
              <p>
                Participants generally knew what tasks they needed to complete
                but struggled to understand the correct order. The lack of a
                clear starting point made the relocation process feel
                overwhelming.
              </p>
            </div>
            <div className="mt-card">
              <h3>Settling in was both practical and emotional</h3>
              <p>
                Beyond completing administrative tasks, students wanted to feel
                confident, connected, and familiar with their new surroundings.
                Successfully settling into a new city required both information
                and community support.
              </p>
            </div>
            <div className="mt-card">
              <h3>Peer guidance filled important gaps</h3>
              <p>
                Students consistently relied on seniors, tutors, and fellow
                international students because their advice was practical,
                contextual, and based on real experiences rather than official
                documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- From Research to Solution ---------- */}
      <section className="mt-section">
        <div className="mt-wrap reveal">
          <h2>From Research to Solution</h2>
          <p>
            Rather than adding features based on assumptions, every major
            component of MyTown was directly informed by our research findings.
            Each feature was designed to address a specific challenge
            experienced by students during their relocation journey.
          </p>

          <div className="mt-map">
            <div className="mt-map-head">
              <span>Research insight</span>
              <span aria-hidden="true" />
              <span>Design response</span>
            </div>

            <div className="mt-map-row">
              <p className="mt-map-insight">
                Information was scattered across multiple platforms.
              </p>
              <p className="mt-map-arrow" aria-hidden="true">
                →
              </p>
              <p className="mt-map-response">
                <strong>Support Hub</strong>
                Consolidated essential guidance, FAQs, and practical resources
                into one place.
              </p>
            </div>

            <div className="mt-map-row">
              <p className="mt-map-insight">
                Students didn't know what to do first.
              </p>
              <p className="mt-map-arrow" aria-hidden="true">
                →
              </p>
              <p className="mt-map-response">
                <strong>First Week Checklist</strong>
                Introduced a step-by-step onboarding experience that prioritized
                essential tasks.
              </p>
            </div>

            <div className="mt-map-row">
              <p className="mt-map-insight">
                Students trusted recommendations from peers.
              </p>
              <p className="mt-map-arrow" aria-hidden="true">
                →
              </p>
              <p className="mt-map-response">
                <strong>Mentor Support</strong>
                Connected newcomers with experienced students for practical
                guidance.
              </p>
            </div>

            <div className="mt-map-row">
              <p className="mt-map-insight">
                Finding important places was difficult.
              </p>
              <p className="mt-map-arrow" aria-hidden="true">
                →
              </p>
              <p className="mt-map-response">
                <strong>Discover Map</strong>
                Helped students locate services, public spaces, grocery stores,
                and essential facilities.
              </p>
            </div>

            <div className="mt-map-row">
              <p className="mt-map-insight">
                Students wanted to engage with the local community.
              </p>
              <p className="mt-map-arrow" aria-hidden="true">
                →
              </p>
              <p className="mt-map-response">
                <strong>Events</strong>
                Highlighted university and city activities to encourage
                participation and social connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Information Architecture ---------- */}
      <section className="mt-section">
        <div className="mt-wrap reveal">
          <h2>Information Architecture</h2>
          <div className="mt-ia">
            <div>
              <p>
                Research showed that students weren't overwhelmed by the amount
                of information available, but by the effort required to find it
                across multiple platforms. Before designing the interface, we
                restructured the information into a simple, task-oriented
                architecture that aligned with the way students naturally
                approached settling into a new city.
              </p>
              <p>
                The information architecture was organized around four primary
                goals:
              </p>
              <ol className="mt-ia-goals">
                <li>Completing essential first-week tasks.</li>
                <li>Finding reliable information and guidance.</li>
                <li>Discovering important places and services.</li>
                <li>Connecting with the local student community.</li>
              </ol>
            </div>
            <figure>
              {/* no dark export supplied for this diagram — the light
                  version is used in both themes, deliberately unfiltered */}
              <img
                src={informationArchitecture}
                alt="Information architecture diagram organising the app around first-week tasks, support and guidance, discovery of places and services, and community"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- Design System ---------- */}
      <section className="mt-section">
        <div className="mt-wrap reveal">
          <h2>Design System</h2>
          <div className="mt-ds-intro">
            <div>
              <p className="mt-lede">Building a Consistent Visual Language</p>
              <p>
                To ensure consistency across the application, we developed a
                reusable design system that standardized typography, colors,
                components, and interaction patterns. Rather than designing each
                screen independently, the system provided a shared visual
                language that improved usability while accelerating the design
                process.
              </p>
            </div>
            <figure>
              <ThemedImage
                light={designSystemLight}
                dark={designSystemDark}
                alt="Two MyTown Discover screens shown against the brand's blue shapes — a map view with categorised pins and a place detail view"
              />
            </figure>
          </div>

          <div className="mt-ds-grid">
            <div className="mt-ds-col">
              <div>
                <h3>Buttons</h3>
                {/* no dark export supplied — light version used in both themes */}
                <img
                  src={buttonsImage}
                  alt="Primary, secondary, outline and ghost button styles, each in default, pressed and disabled states"
                />
              </div>
            </div>

            <div className="mt-ds-col">
              <div>
                <h3>Color Palette</h3>
                <div className="mt-swatch-group">
                  <p className="mt-swatch-label">Primary</p>
                  <div className="mt-swatches">
                    <span
                      className="mt-swatch"
                      style={{ background: "#ff844b" }}
                    />
                    <span
                      className="mt-swatch"
                      style={{ background: "#d95f27" }}
                    />
                  </div>
                </div>
                <div className="mt-swatch-group">
                  <p className="mt-swatch-label">Secondary</p>
                  <div className="mt-swatches">
                    <span
                      className="mt-swatch"
                      style={{ background: "#4ea3e0" }}
                    />
                    <span
                      className="mt-swatch"
                      style={{ background: "#2b5b85" }}
                    />
                  </div>
                </div>
                <div className="mt-swatch-group">
                  <p className="mt-swatch-label">Neutral</p>
                  <div className="mt-swatches">
                    <span
                      className="mt-swatch"
                      style={{
                        background: "#ffffff",
                        borderColor: "rgba(28,28,28,0.2)",
                      }}
                    />
                    <span
                      className="mt-swatch"
                      style={{ background: "#22262b" }}
                    />
                    <span
                      className="mt-swatch"
                      style={{ background: "#e3e6e9" }}
                    />
                    <span
                      className="mt-swatch"
                      style={{ background: "#c8ced5" }}
                    />
                    <span
                      className="mt-swatch"
                      style={{ background: "#98a3ae" }}
                    />
                    <span
                      className="mt-swatch"
                      style={{ background: "#6b7885" }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3>Typography</h3>
                <div className="mt-type-sample">
                  <span className="mt-aa">Aa</span>
                  <div>
                    <p style={{ fontWeight: 700, margin: 0 }}>Nunito Round</p>
                    <p style={{ color: "var(--mt-ink-soft)", margin: 0 }}>
                      Font Family
                    </p>
                  </div>
                </div>
                <p
                  style={{
                    marginTop: "calc(16 * var(--u))",
                    color: "var(--mt-ink-soft)",
                  }}
                >
                  Used across the product in Regular, Medium, SemiBold and Bold
                  weights.
                </p>
              </div>

              <div>
                <h3>Form Controls</h3>
                {/* no dark export supplied — light version used in both themes */}
                <img
                  src={formControlsImage}
                  alt="Input field styles in default, focused, error and disabled states, alongside radio button and checkbox states"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- The Experience ---------- */}
      {/* each supplied composition already carries its callout bubbles and
          pointers, so every block is: centred feature title, artwork at full
          column width, then the PDF's own Problem / Design Response pair */}
      <section className="mt-section">
        <div className="mt-wrap reveal">
          <h2>The Experience</h2>
          <p className="mt-lede">
            Designing a guided relocation journey from arrival to belonging
          </p>
          <p>
            Every feature in MyTown was designed to support a different stage of
            a student's relocation journey. Rather than functioning as
            standalone tools, these experiences work together to reduce
            uncertainty, simplify essential tasks, and help students build
            confidence in their new environment.
          </p>

          <h3 className="mt-exp-heading">Getting Started</h3>
          <figure className="mt-figure mt-figure-exp mt-figure-exp-narrow">
            <ThemedImage
              light={exp01Light}
              dark={exp01Dark}
              alt="The MyTown splash, home and SIM card guide screens, annotated with guided onboarding, actionable tasks and visible progress"
            />
          </figure>
          <div className="mt-exp-pair">
            <div className="mt-exp-panel">
              <h4>Problem</h4>
              <p>
                Students often knew what needed to be done, but struggled to
                understand the correct sequence of tasks.
              </p>
            </div>
            <div className="mt-exp-panel">
              <h4>Design Response</h4>
              <p>
                The First Week Checklist transforms complex administrative
                processes into a clear, step-by-step onboarding experience that
                guides students through their most important priorities.
              </p>
            </div>
          </div>

          <h3 className="mt-exp-heading">Finding Reliable Support</h3>
          <figure className="mt-figure mt-figure-exp">
            <ThemedImage
              light={exp02Light}
              dark={exp02Dark}
              alt="Support Hub screens showing help categories, settling and academic guides, FAQs and a mentor chat, annotated with centralized support and multiple help channels"
            />
          </figure>
          <div className="mt-exp-pair">
            <div className="mt-exp-panel">
              <h4>Problem</h4>
              <p>
                Important information was scattered across university websites,
                government portals, and community groups.
              </p>
            </div>
            <div className="mt-exp-panel">
              <h4>Design Response</h4>
              <p>
                Support Hub consolidates guides, FAQs, mentors, and emergency
                information into a single destination, making reliable
                assistance easier to access.
              </p>
            </div>
          </div>

          <h3 className="mt-exp-heading">Exploring the City</h3>
          <figure className="mt-figure mt-figure-exp">
            <ThemedImage
              light={exp03Light}
              dark={exp03Dark}
              alt="Discover screens showing a map with categorised pins and place details, annotated with finding essentials nearby and purpose-driven navigation"
            />
          </figure>
          <div className="mt-exp-pair">
            <div className="mt-exp-panel">
              <h4>Problem</h4>
              <p>
                Students struggled to locate essential services and often relied
                on recommendations from friends or some random YouTube video.
              </p>
            </div>
            <div className="mt-exp-panel">
              <h4>Design Response</h4>
              <p>
                Discover combines location-based recommendations with
                categorized places, helping students quickly find public
                services, grocery stores, transportation, and everyday
                essentials.
              </p>
            </div>
          </div>

          <h3 className="mt-exp-heading">Building Community</h3>
          <figure className="mt-figure mt-figure-exp mt-figure-exp-narrow">
            <ThemedImage
              light={exp04Light}
              dark={exp04Dark}
              alt="Events screens showing local and university activities with filtering, annotated with personalized discovery and simple filtering"
            />
          </figure>
          <div className="mt-exp-pair">
            <div className="mt-exp-panel">
              <h4>Problem</h4>
              <p>
                Many students found it difficult to connect with others and
                discover relevant activities after arriving.
              </p>
            </div>
            <div className="mt-exp-panel">
              <h4>Design Response</h4>
              <p>
                The Events experience highlights university and local activities
                while allowing students to filter opportunities based on their
                interests and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Reflection ---------- */}
      <section className="mt-section mt-reflection">
        <div className="mt-wrap reveal">
          <h2>Reflection</h2>

          <h3>What I Learned</h3>
          <p>
            This project strengthened my understanding of how user research
            shapes meaningful design decisions. Conducting interviews,
            facilitating workshops, and translating these insights into user
            journeys showed me the importance of designing around real
            experiences rather than assumptions. It also reinforced that
            effective service design is about creating a cohesive experience
            that supports users before, during, and after every interaction.
          </p>

          <div className="mt-cols" style={{ marginTop: "calc(40 * var(--u))" }}>
            <div>
              <h3>Challenges</h3>
              <p>
                One of the biggest challenges was balancing diverse user needs
                while keeping the experience simple and intuitive. International
                students face a wide range of academic, administrative, and
                social challenges, making prioritization essential. Working
                collaboratively also required aligning different perspectives
                and continuously refining ideas to create a cohesive solution.
              </p>
            </div>
            <div>
              <h3>Next Steps</h3>
              <p>
                With more time, I would conduct usability testing with newly
                arrived international students to validate the prototype and
                identify areas for improvement. I would also explore
                opportunities for personalization, allowing the experience to
                adapt to different universities, student backgrounds, and stages
                of the relocation journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
