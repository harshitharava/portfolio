import { createFileRoute } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";

import heroImage from "@/assets/playpal/hero/playpal-hero.png";
import contributionImage from "@/assets/playpal/contribution/playpal-contribution.png";

import primaryPersona from "@/assets/playpal/personas/playpal-primary-persona.png";
import primaryPersonaDark from "@/assets/playpal/personas/playpal-primary-persona-dark.png";

import userJourney from "@/assets/playpal/user-journey/playpal-user-journey.png";
import userJourneyDark from "@/assets/playpal/user-journey/playpal-user-journey-dark.png";

import appStructure from "@/assets/playpal/application-structure/playpal-application-structure.png";

import earlyExploration from "@/assets/playpal/early-design-exploration/playpal-early-design-exploration.png";
import earlyExplorationDark from "@/assets/playpal/early-design-exploration/playpal-early-design-exploration-dark.png";

import foundationsHero from "@/assets/playpal/design-foundations/playpal-design-foundations.png";
import foundationsHeroDark from "@/assets/playpal/design-foundations/playpal-design-foundations-dark.png";
import buttonsImage from "@/assets/playpal/design-foundations/playpal-buttons.png";
import componentsImage from "@/assets/playpal/design-foundations/playpal-components.png";
import logoImage from "@/assets/playpal/design-foundations/playpal-logo.png";

import expHome from "@/assets/playpal/experience/playpal-experience-01.png";
import expHomeDark from "@/assets/playpal/experience/playpal-experience-01-dark.png";
import expPlay from "@/assets/playpal/experience/playpal-experience-02.png";
import expPlayDark from "@/assets/playpal/experience/playpal-experience-02-dark.png";
import expCreate from "@/assets/playpal/experience/playpal-experience-03.png";
import expCreateDark from "@/assets/playpal/experience/playpal-experience-03-dark.png";
import expManage from "@/assets/playpal/experience/playpal-experience-04.png";
import expManageDark from "@/assets/playpal/experience/playpal-experience-04-dark.png";
import expProfile from "@/assets/playpal/experience/playpal-experience-05.png";
import expProfileDark from "@/assets/playpal/experience/playpal-experience-05-dark.png";

import reflectionImage from "@/assets/playpal/reflection/playpal-reflection.png";
import reflectionImageDark from "@/assets/playpal/reflection/playpal-reflection-dark.png";

const DESCRIPTION =
  "UX case study: PlayPal, a mobile app that simplifies how people find teammates, join games, and book venues for recreational sports.";

export const Route = createFileRoute("/work/playpal")({
  head: () => ({
    meta: [
      { title: "PlayPal case study — Harshith Arava" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "PlayPal case study — Harshith Arava" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/work/playpal" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    // TEMPORARY PLACEHOLDER: relative canonical until the real domain is live.
    links: [{ rel: "canonical", href: "/work/playpal" }],
  }),
  component: PlayPalPage,
});

type ThemedImageProps = {
  light: string;
  dark: string;
  alt: string;
};

// Renders the light and dark exports of one finished composition. Only one
// is ever visible: CSS toggles `display` off the hidden one entirely (not
// opacity/visibility), so it never overlaps or crossfades with its sibling,
// and doesn't affect layout while hidden. Same approach as CityLoop.
function ThemedImage({ light, dark, alt }: ThemedImageProps) {
  return (
    <>
      <img className="pp-img-light" src={light} alt={alt} />
      <img className="pp-img-dark" src={dark} alt={alt} />
    </>
  );
}

function PlayPalPage() {
  usePortfolioEffects();

  return (
    <main id="main" className="pp">
      {/* ---------- Hero ---------- */}
      {/* full-bleed like CityLoop/Talos Care: the photo spans the full
          viewport width, only rounded at the bottom corners. Tags and the
          PlayPal wordmark (Play in blue, Pal in yellow) sit in an overlay
          that's capped to the site's content column so they line up with
          the rest of the page even though the photo itself bleeds past it. */}
      <section className="pp-hero">
        <div className="pp-hero-media">
          <img
            src={heroImage}
            alt="A hand holding a phone showing the PlayPal home screen, with upcoming games and quick actions to find players or book a venue"
          />
          <div className="pp-hero-overlay">
            <div className="pp-wrap pp-hero-overlay-rail">
              <div className="pp-hero-tags">
                <span>UX Research</span>
                <span>Usability Testing</span>
                <span>UI Design</span>
                <span>Information Architecture</span>
                <span>Prototyping</span>
                <span>Interaction Design</span>
              </div>
              <p className="pp-hero-wordmark" aria-hidden="true">
                PlayPal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Intro + meta ---------- */}
      <div className="pp-wrap">
        <div className="pp-intro">
          <h1 className="pp-hero-title">
            Work hard.
            <br />
            Play harder.
            <br />
            Then why does the planning come in between?
          </h1>
          <div className="pp-intro-copy">
            <p>
              PlayPal is a mobile application designed to simplify how people
              organize and participate in recreational sports. Whether users are
              looking for teammates, joining existing games, or booking nearby
              venues, the platform brings these activities into a single,
              streamlined experience.
            </p>
            <p>
              Developed as part of the User Interfaces and Human-Centred Design
              course, the project followed a user-centered design process from
              research through prototyping. Through interviews, synthesis,
              wireframing, and iterative design, our team explored how
              technology could reduce the coordination effort that often
              prevents people from staying active.
            </p>
          </div>
        </div>

        <div className="pp-meta">
          <div>
            <h4>Role</h4>
            <p>UI/UX Designer</p>
          </div>
          <div>
            <h4>Duration</h4>
            <p>7 Weeks</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>Figma • FigJam</p>
          </div>
          <div>
            <h4>Team</h4>
            <p>3 Students</p>
          </div>
          <div>
            <h4>Platform</h4>
            <p>Mobile</p>
          </div>
        </div>
      </div>

      {/* ---------- My Contribution ---------- */}
      <section className="pp-section">
        <div className="pp-wrap">
          <div className="pp-contribution reveal">
            <div className="pp-contribution-media">
              <img
                src={contributionImage}
                alt="Two PlayPal screens: the Create Game form, and a confirmed game showing invited players and management options"
              />
            </div>
            <div className="pp-contribution-copy">
              <h2>My Contribution</h2>
              <p>
                As part of a three-member design team, I contributed throughout
                the project, from shaping the research approach to refining the
                final interface.
              </p>
              <ul>
                <li>Helped develop the interview guide</li>
                <li>
                  Reviewed and synthesized interview findings into actionable
                  insights
                </li>
                <li>
                  Explored information architecture and wireframe concepts
                </li>
                <li>Designed high-fidelity screens in Figma</li>
                <li>Simplified user flows based on peer feedback</li>
                <li>
                  Helped ensure the final experience was intuitive, consistent,
                  and accessible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Understanding the Problem ---------- */}
      <section className="pp-section">
        <div className="pp-wrap reveal">
          <h2>Understanding the Problem</h2>
          <p className="pp-lede">
            Staying active should mean staying active.
            <br />
            Here, it meant, planning, planning, and more planning.
          </p>
          <div className="pp-cols">
            <div>
              <p>
                Organizing recreational sports often involves more effort than
                the game itself. People rely on scattered WhatsApp groups, phone
                calls, venue websites, and personal networks to find players and
                coordinate schedules. Even when the motivation to play exists,
                these fragmented processes create enough friction to discourage
                participation.
              </p>
            </div>
            <div>
              <p>
                Our challenge was to design a solution that simplifies this
                experience by helping users discover nearby games, connect with
                compatible players, and book sports venues through a single,
                intuitive platform. Rather than focusing only on booking
                facilities, we wanted to support the entire journey of
                organizing and joining recreational sports with minimal effort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Research ---------- */}
      <section className="pp-section">
        <div className="pp-wrap reveal">
          <h2>Research</h2>
          <div className="pp-cols">
            <p>
              To better understand the challenges people face when organizing
              recreational sports, we conducted user research before exploring
              potential solutions. Through conversations with active sports
              participants, we investigated how they currently find players,
              coordinate games, book venues, and the obstacles that make these
              activities more difficult than they should be. The insights
              gathered during this phase shaped the direction of the product and
              informed the design decisions that followed.
            </p>
            <div className="pp-question" style={{ marginBlock: 0 }}>
              <p>
                How do we reduce the effort on planning with one seamless
                experience?
              </p>
            </div>
          </div>

          <div style={{ marginTop: "calc(56 * var(--u))" }}>
            <h3>Our literature review focused on three areas</h3>
            <div className="pp-brackets">
              <div className="pp-bracket pp-bracket-down">
                <h3>Player Coordination</h3>
                <p>
                  Understanding how people currently find teammates, organize
                  matches, and communicate with other players.
                </p>
              </div>
              <div className="pp-bracket pp-bracket-up">
                <h3>Venue Discovery</h3>
                <p>
                  Exploring how users search for sports venues, check
                  availability, and complete bookings.
                </p>
              </div>
              <div className="pp-bracket pp-bracket-down">
                <h3>Participation Barriers</h3>
                <p>
                  Identifying the logistical, social, and motivational factors
                  that prevent people from playing regularly.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "calc(64 * var(--u))" }}>
            <h3>Research Methods</h3>
            <p>
              To explore the challenges of organizing recreational sports, we
              conducted three semi-structured interviews with participants who
              regularly played different sports. The interview format encouraged
              open conversations about how they currently found players, booked
              venues, and coordinated games while allowing us to probe deeper
              into their experiences and frustrations. After the interviews, we
              transcribed the recordings and performed a collaborative thematic
              analysis, identifying recurring patterns that would later guide
              our design decisions.
            </p>

            <div className="pp-method-card">
              <div className="pp-method-cell">
                <h4>Research Method</h4>
                <p>Semi-Structured Interviews</p>
              </div>
              <div className="pp-method-cell">
                <h4>Participants</h4>
                <p>3</p>
              </div>
              <div className="pp-method-cell">
                <h4>Format</h4>
                <p>1 In-person, 2 Zoom</p>
              </div>
              <div className="pp-method-cell">
                <h4>Outcome</h4>
                <p>Themes &amp; Design Insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Key Research Insights ---------- */}
      <section className="pp-section">
        <div className="pp-wrap reveal">
          <h2>Key Research Insights</h2>
          <p>
            The interviews showed that participants were enthusiastic about
            playing sports, but the process of organizing games was often
            frustrating. Despite differences in age and sporting interests, the
            same problems appeared consistently across all interviews.
          </p>

          <div className="pp-insights">
            <div className="pp-insight">
              <h3>Skill-Level Matching</h3>
              <p>Follow-up questions can adapt based on previous responses.</p>
            </div>
            <div className="pp-insight">
              <h3>Finding Reliable Players</h3>
              <p>
                Users often struggled to find committed players outside their
                immediate social circles, making it difficult to organize games
                consistently.
              </p>
            </div>
            <div className="pp-insight">
              <h3>Venue Discovery &amp; Booking</h3>
              <p>
                Participants described booking venues as a fragmented process
                involving multiple websites, phone calls, and uncertain
                availability.
              </p>
            </div>
            <div className="pp-insight">
              <h3>Social Connection</h3>
              <p>
                Many participants viewed sports as an opportunity to meet new
                people, but limited networks and scheduling conflicts often
                prevented regular participation.
              </p>
            </div>
            <div className="pp-insight">
              <h3>Distance &amp; Safety</h3>
              <p>
                Travel distance and venue accessibility strongly influenced
                participation, especially for evening games and users without
                convenient transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Understanding Our Users ---------- */}
      <section className="pp-section">
        <div className="pp-wrap reveal">
          <h2>Understanding Our Users</h2>
          <p>
            Using the interview findings, we developed personas that represented
            the primary users of PlayPal. Rather than reflecting individual
            participants, these personas combined recurring behaviours,
            motivations, and frustrations observed throughout the research. They
            became a reference point for evaluating design decisions and
            ensuring the experience addressed genuine user needs.
          </p>

          <p className="pp-section-label">Primary Persona</p>

          <figure className="pp-figure">
            <ThemedImage
              light={primaryPersona}
              dark={primaryPersonaDark}
              alt="Two persona cards: Atharva, a 19-year-old student in Tampere, and Liza, a 29-year-old school teacher in Tampere, each with their background and design impact"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Design Principles ---------- */}
      <section className="pp-section">
        <div className="pp-wrap reveal">
          <h2>Design Principles</h2>
          <p>
            The research highlighted that users weren't struggling with
            motivation to play sports, they were struggling with the effort
            required to organize them. To address these challenges, we
            translated our findings into a set of design principles that guided
            every design decision throughout the project.
          </p>

          <div className="pp-grid pp-grid-4">
            <div className="pp-card">
              <h3>Reduce Coordination Effort</h3>
              <p>
                Help users create or join games with as few steps as possible.
              </p>
            </div>
            <div className="pp-card">
              <h3>Build Trust Between Players</h3>
              <p>
                Provide information such as skill level, game details, and
                participation status to help users feel confident joining
                unfamiliar groups.
              </p>
            </div>
            <div className="pp-card">
              <h3>Simplify Venue Discovery</h3>
              <p>
                Bring venue search, availability, and booking into one seamless
                experience.
              </p>
            </div>
            <div className="pp-card">
              <h3>Support Different Play Styles</h3>
              <p>
                Allow users to find games based on sport, skill level, location,
                and availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- User Journey ---------- */}
      <section className="pp-section">
        <div className="pp-wrap reveal">
          <h2>User Journey</h2>
          <p>
            Before moving into wireframes, we mapped the primary journeys users
            would take throughout PlayPal, from discovering games and creating
            events to booking venues and managing participation. Visualizing
            these flows helped us identify key decision points, simplify
            navigation, and ensure that each interaction supported a smooth
            end-to-end experience.
          </p>
          <figure className="pp-figure pp-figure-scroll">
            <ThemedImage
              light={userJourney}
              dark={userJourneyDark}
              alt="PlayPal user journey map covering onboarding, browse and discover, join game flow, create game flow, book game flow, game participation and post-game feedback"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Application Structure ---------- */}
      <section className="pp-section">
        <div className="pp-wrap reveal">
          <h2>Application Structure</h2>
          <div className="pp-structure">
            <div className="pp-structure-copy">
              <p className="pp-lede">
                Staying active wasn't the problem.
                <br />
                Organizing the game was.
              </p>
              <p>
                The application's structure was designed around four core areas:
                discovering games, creating events, community interaction, and
                profile management. Establishing a clear navigation hierarchy
                early helped ensure that users could move between key tasks with
                minimal effort while supporting future scalability.
              </p>
            </div>
            <div className="pp-structure-media">
              <img
                src={appStructure}
                alt="Application structure diagram: Home branches into Play Game, Create Game, Community and Profile, each with their own sub-sections"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Early Design Exploration ---------- */}
      <section className="pp-section">
        <div className="pp-wrap reveal">
          <h2>Early Design Exploration</h2>
          <p>
            Each team member initially developed individual wireframe concepts
            based on the research findings and conceptual model. We then
            reviewed the ideas collaboratively, combining the strongest aspects
            of each into a single, cohesive structure that balanced usability
            with a clear navigation flow.
          </p>
          <figure className="pp-figure pp-figure-scroll">
            <ThemedImage
              light={earlyExploration}
              dark={earlyExplorationDark}
              alt="Four early wireframe concepts annotated with their intent: a central dashboard for quick access to primary actions, browsing nearby games with filters, a structured game creation form, and a profile with personal statistics and achievements"
            />
          </figure>

          <div
            className="pp-grid pp-grid-4"
            style={{ marginTop: "calc(40 * var(--u))" }}
          >
            <div className="pp-card pp-card-tan">
              <h3>Central dashboard</h3>
              <p>For quick access to primary actions.</p>
            </div>
            <div className="pp-card pp-card-tan">
              <h3>Browse nearby games</h3>
              <p>Using sport, time, and skill-level filters.</p>
            </div>
            <div className="pp-card pp-card-tan">
              <h3>Structured form</h3>
              <p>Minimizes the effort required to organize a match.</p>
            </div>
            <div className="pp-card pp-card-tan">
              <h3>Personal statistics</h3>
              <p>Achievements encourage long-term engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Design Foundations ---------- */}
      <section className="pp-section">
        <div className="pp-wrap reveal">
          <div className="pp-foundations-intro">
            <div>
              <h2>Design Foundations</h2>
              <p className="pp-lede">
                Building a visual language that supports clarity and consistency
              </p>
              <p>
                The visual foundations of PlayPal were designed to support
                usability as much as aesthetics. Consistent typography, colour,
                iconography, and reusable interface components created a
                familiar experience that helped users navigate the application
                with confidence while maintaining a cohesive identity across
                every feature.
              </p>
            </div>
            <figure className="pp-figure pp-foundations-hero">
              <ThemedImage
                light={foundationsHero}
                dark={foundationsHeroDark}
                alt="Two hands holding a phone showing the PlayPal venue booking screen, set against a yellow backdrop with the brand's blue dashed accents"
              />
            </figure>
          </div>

          <div className="pp-foundations-grid">
            <div className="pp-foundations-col">
              <div>
                <h3>Buttons</h3>
                <img
                  src={buttonsImage}
                  alt="PlayPal primary, secondary and disabled button states in blue, yellow and neutral tones"
                />
              </div>
              <div>
                <h3>Components</h3>
                <img
                  src={componentsImage}
                  alt="Reusable PlayPal interface components: venue cards, toggle groups, skill-level selectors, search bars, bottom navigation, and game listing cards"
                />
              </div>
            </div>

            <div className="pp-foundations-col">
              <div className="pp-swatch-group">
                <h3>Color Palette</h3>
                <p className="pp-type-specimen-label">Primary</p>
                <div className="pp-swatches">
                  <span
                    className="pp-swatch"
                    style={{ background: "#2877fe" }}
                  />
                  <span
                    className="pp-swatch"
                    style={{ background: "#0150d7" }}
                  />
                  <span
                    className="pp-swatch"
                    style={{ background: "#0e67ff" }}
                  />
                  <span
                    className="pp-swatch"
                    style={{ background: "#5291fe" }}
                  />
                  <span
                    className="pp-swatch"
                    style={{ background: "#7babfc" }}
                  />
                </div>
                <p
                  className="pp-type-specimen-label"
                  style={{ marginTop: "calc(24 * var(--u))" }}
                >
                  Secondary
                </p>
                <div className="pp-swatches">
                  <span
                    className="pp-swatch"
                    style={{ background: "#ffc107" }}
                  />
                  <span
                    className="pp-swatch"
                    style={{ background: "#fed766" }}
                  />
                  <span
                    className="pp-swatch"
                    style={{ background: "#ffcd3d" }}
                  />
                  <span
                    className="pp-swatch"
                    style={{ background: "#c89700" }}
                  />
                  <span
                    className="pp-swatch"
                    style={{ background: "#9d7700" }}
                  />
                </div>
                <p
                  className="pp-type-specimen-label"
                  style={{ marginTop: "calc(24 * var(--u))" }}
                >
                  Neutral
                </p>
                <div className="pp-swatches">
                  <span
                    className="pp-swatch"
                    style={{
                      background: "#ffffff",
                      borderColor: "rgba(23,21,18,0.2)",
                    }}
                  />
                  <span
                    className="pp-swatch"
                    style={{ background: "#e4ded0" }}
                  />
                  <span
                    className="pp-swatch"
                    style={{ background: "#b9b2a0" }}
                  />
                  <span
                    className="pp-swatch"
                    style={{ background: "#2a2722" }}
                  />
                </div>
              </div>

              <div>
                <h3>Typography</h3>
                <div className="pp-type-sample">
                  <span className="pp-aa">Aa</span>
                  <div>
                    <p style={{ fontWeight: 700, margin: 0 }}>Zalando Sans</p>
                    <p style={{ color: "var(--pp-ink-soft)", margin: 0 }}>
                      Font Family
                    </p>
                  </div>
                </div>

                <div className="pp-type-specimen">
                  <h4>Heading</h4>
                  <p className="pp-type-semibold">
                    Zalando Sans Semibold - 22px
                  </p>
                  <p className="pp-type-light">Zalando Sans Light - 22px</p>
                </div>
                <div className="pp-type-specimen">
                  <h4>Subheading</h4>
                  <p className="pp-type-bold">Zalando Sans Bold - 20px</p>
                  <p className="pp-type-medium">Zalando Sans Medium - 20px</p>
                </div>
                <div className="pp-type-specimen">
                  <h4>Body</h4>
                  <p className="pp-type-regular">Zalando Sans Regular - 12px</p>
                  <p className="pp-type-regular" style={{ fontWeight: 500 }}>
                    Zalando Sans Medium - 12px
                  </p>
                </div>
              </div>

              <div className="pp-foundations-logo">
                <h3>Logo</h3>
                <img
                  src={logoImage}
                  alt="PlayPal logo: a basketball above the wordmark PlayPal, in blue and yellow"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- The Experience ---------- */}
      <section className="pp-section">
        <div className="pp-wrap reveal">
          <h2>The Experience</h2>
          <p className="pp-lede">
            Designing an experience that makes organizing sports simple
          </p>
          <p>
            The final interface was designed to simplify every stage of
            organizing recreational sports, from discovering nearby games to
            creating events, booking venues, and staying connected with other
            players. Every interaction was informed by research findings and
            focused on reducing coordination effort while creating a clean and
            approachable mobile experience.
          </p>

          <h3 className="pp-exp-heading">Home</h3>
          <figure className="pp-figure pp-figure-exp">
            <ThemedImage
              light={expHome}
              dark={expHomeDark}
              alt="PlayPal Home screen annotated: quick access to Play Game, Create Game, and Community reduces navigation effort; upcoming activity remains visible; primary actions are surfaced immediately; persistent navigation supports consistency"
            />
          </figure>

          <h3 className="pp-exp-heading">Play Game</h3>
          <figure className="pp-figure pp-figure-exp">
            <ThemedImage
              light={expPlay}
              dark={expPlayDark}
              alt="PlayPal Play Game screen annotated: information-rich game cards highlight essential details; multi-level filtering by sport, location, time, and skill; clear hierarchy prioritises availability and game details"
            />
          </figure>

          <h3 className="pp-exp-heading">Create Game</h3>
          <figure className="pp-figure pp-figure-exp">
            <ThemedImage
              light={expCreate}
              dark={expCreateDark}
              alt="PlayPal Create Game and Update your Game screens annotated: single-page creation flow, skill-level selection, flexible access settings for public or invite-only games, and flexible game management after publishing"
            />
          </figure>

          <h3 className="pp-exp-heading">Manage Game</h3>
          <figure className="pp-figure pp-figure-exp">
            <ThemedImage
              light={expManage}
              dark={expManageDark}
              alt="PlayPal Manage Game screen annotated: essential information grouped together, game confirmation, player management, and consistent interaction patterns mirroring Create Game"
            />
          </figure>

          <h3 className="pp-exp-heading">Profile</h3>
          <figure className="pp-figure pp-figure-exp">
            <ThemedImage
              light={expProfile}
              dark={expProfileDark}
              alt="PlayPal Profile screen annotated: personal progress at a glance, statistics and activity history, personalised experience, and achievements that encourage motivation"
            />
          </figure>
        </div>
      </section>

      {/* ---------- Reflection ---------- */}
      <section className="pp-section pp-reflection">
        <div className="pp-wrap reveal">
          <h2>Reflection</h2>

          <h3>What I Learned</h3>
          <p>
            This project reinforced the value of grounding design decisions in
            user research rather than assumptions. While it was tempting to
            focus on adding features, the interviews consistently showed that
            the real challenge wasn't motivating people to play sports—it was
            reducing the effort required to organize them. Throughout the
            project, I learned to prioritize simplicity, usability, and clear
            user flows over unnecessary complexity.
          </p>

          <div className="pp-cols" style={{ marginTop: "calc(40 * var(--u))" }}>
            <div>
              <h3>Challenges</h3>
              <p>
                One of the biggest challenges was balancing functionality with
                simplicity. Early versions of the interface included additional
                screens and interaction steps that made key tasks feel longer
                than necessary. Following feedback during our course
                presentation, we revisited the user flows and simplified several
                interactions by consolidating screens and reducing unnecessary
                navigation. This iteration improved the overall experience while
                keeping the core functionality intact.
              </p>
            </div>
            <div>
              <h3>Next Steps</h3>
              <p>
                Given more time, I would validate the prototype through
                usability testing with a broader group of recreational sports
                participants. Observing users completing real tasks would help
                identify remaining friction points and inform future
                improvements.
              </p>
              <p>
                I would also explore features such as real-time venue
                availability, integrated messaging, and personalized game
                recommendations to create an even more connected sports
                experience.
              </p>
            </div>
          </div>

          <figure className="pp-figure pp-reflection-media">
            <ThemedImage
              light={reflectionImage}
              dark={reflectionImageDark}
              alt="A grid of PlayPal screens shown at an angle: home, profile, create game, manage game, play game, and the PlayPal logo"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
