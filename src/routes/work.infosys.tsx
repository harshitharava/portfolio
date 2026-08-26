import { createFileRoute } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";

import heroSignin from "@/assets/infosys/hero/infosys-hero-signin.webp";
import dashboardMonitor from "@/assets/infosys/hero/infosys-dashboard-monitor.webp";

import screenSignin from "@/assets/infosys/screens/infosys-signin.webp";
import screenSignup from "@/assets/infosys/screens/infosys-signup.webp";
import screenBase from "@/assets/infosys/screens/infosys-dashboard-base.webp";
import screenNudgeDropdown from "@/assets/infosys/screens/infosys-dashboard-nudge-dropdown.webp";
import screenChat01 from "@/assets/infosys/screens/infosys-dashboard-aichat-01.webp";
import screenChat02 from "@/assets/infosys/screens/infosys-dashboard-aichat-02.webp";
import screenNudges01 from "@/assets/infosys/screens/infosys-dashboard-ainudges-01.webp";
import screenNudges02 from "@/assets/infosys/screens/infosys-dashboard-ainudges-02.webp";
import screenNudges03 from "@/assets/infosys/screens/infosys-dashboard-ainudges-03.webp";

export const Route = createFileRoute("/work/infosys")({
  head: () => ({
    meta: [
      { title: "Infosys Gen AI Web Application | Harshith Arava" },
      {
        name: "description",
        content:
          "An analytics-driven platform that enhances user engagement through personalized recommendations and interactive AI insights.",
      },
    ],
  }),
  component: InfosysPage,
});

function InfosysPage() {
  usePortfolioEffects();

  return (
    <main id="main" className="ig">
      {/* ---------- Hero ---------- */}
      {/* Full-bleed hero photo with tags and the headline both overlaid on
          top of it, matching CityLoop/Talos Care's hero-title-layer pattern
          exactly (including the offset text-shadow) rather than PlayPal's
          plain-photo-plus-separate-heading treatment. The photo has a soft
          cream fade built into its left third, which is exactly where the
          title sits — same placement CityLoop uses. */}
      <section className="ig-hero">
        <div className="ig-hero-media">
          <img
            src={heroSignin}
            alt="Infosys Gen AI Application sign-in screen, displayed on a laptop resting on a wooden table"
          />
          <div className="ig-wrap ig-hero-tags">
            <span>UX Design</span>
            <span>Service Design</span>
            <span>Information Architecture</span>
            <span>UI Design</span>
            <span>Prototyping</span>
          </div>
          <div className="ig-hero-title-layer">
            <div className="ig-wrap ig-hero-title-rail">
              <h1 className="ig-hero-title">
                Infosys Gen AI
                <br />
                Web Application
              </h1>
            </div>
          </div>
        </div>

        <div className="ig-wrap">
          <p className="ig-hero-sub">
            The Infosys Generative AI Application is an analytics-driven
            platform that enhances user engagement through personalized
            recommendations and interactive AI insights.
          </p>

          <div className="ig-meta">
            <div>
              <h4>Role</h4>
              <p>Graphic Designer</p>
            </div>
            <div>
              <h4>Duration</h4>
              <p>2 Months</p>
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
      <section className="ig-section">
        <div className="ig-wrap">
          <div className="ig-info-row">
            <h3>About the project</h3>
            <p>
              The <strong>Infosys Generative AI Application</strong> is a
              platform designed to track and analyze user journeys through
              metrics like{" "}
              <strong>site visits, cost per click, conversion rate</strong>, and
              impressions. It features a guided &ldquo;<strong>Nudge</strong>
              &rdquo; journey for customized recommendations and an{" "}
              <strong>AI-powered chatbot</strong> for interactive data queries,
              making insights accessible and actionable.
            </p>
          </div>
          <div className="ig-info-row">
            <h3>The brief</h3>
            <p>
              Infosys sought a <strong>dynamic web application</strong> that
              would enhance user engagement and provide in-depth analytics on
              user interactions. The brief emphasized a{" "}
              <strong>user-friendly experience</strong>, with features to
              support <strong>decision-making</strong> through AI insights and
              seamless interactions, reinforcing Infosys&rsquo; innovative brand
              image.
            </p>
          </div>
          <div className="ig-info-row">
            <h3>The challenge</h3>
            <p>
              The project&rsquo;s main challenges included designing an{" "}
              <strong>intuitive user journey</strong> flow that balances depth
              with ease of use, implementing a versatile chatbot that handles
              both <strong>preprogrammed</strong> and{" "}
              <strong>dynamic queries</strong>, and aligning the design with
              Infosys&rsquo; brand standards while maintaining{" "}
              <strong>high functionality</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Nudge User Journey ---------- */}
      <section className="ig-section">
        <div className="ig-wrap">
          <h2>User Journeys</h2>

          <h3 className="ig-flow-title">Nudge User Journey</h3>
          <div className="ig-flow">
            <div className="ig-flow-row">
              <div className="ig-flow-box">User logs into the platform</div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box">
                User requests customized recommendation
              </div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box start">User journey starts</div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box">Nudge dropdown gets displayed</div>
            </div>
            <div className="ig-flow-row">
              <div className="ig-flow-box">User makes the selection</div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box">
                Parameter dropdown gets displayed
              </div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box">User makes the selection</div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box">
                Confirmation message for final nudge
              </div>
            </div>
            <div className="ig-flow-row">
              <div className="ig-flow-box">User makes the confirmation</div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box">
                Customized recommended plan gets displayed
              </div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box end">User journey ends</div>
            </div>
          </div>

          {/* ---------- AI Chatbot Journey ---------- */}
          <h3 className="ig-flow-title">AI Chatbot Journey</h3>
          <div className="ig-flow">
            <div className="ig-flow-row">
              <div className="ig-flow-box">User logs into the platform</div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box">
                User selects Interactive QA session
              </div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box start">
                Chatbot user journey starts
              </div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box">
                Prompt to ask a question gets displayed
              </div>
            </div>

            <div className="ig-flow-row">
              <div className="ig-flow-box highlight">User makes the query</div>
            </div>

            <div className="ig-flow-branch">
              <div className="ig-flow-branch-col">
                <span className="ig-flow-branch-label">Pre-con. query</span>
                <div className="ig-flow-box">
                  AI-powered data diagnosis initiates
                </div>
                <span className="ig-flow-arrow" aria-hidden="true">
                  ↓
                </span>
                <div className="ig-flow-box">
                  Preconfigured parameter evaluation and KPI analysis
                </div>
                <span className="ig-flow-arrow" aria-hidden="true">
                  ↓
                </span>
                <div className="ig-flow-box">Response gets displayed</div>
              </div>
              <div className="ig-flow-branch-col">
                <span className="ig-flow-branch-label">Non pre-con. query</span>
                <div className="ig-flow-box">
                  In the demo version, this response is not available
                </div>
              </div>
            </div>

            <div className="ig-flow-row">
              <div className="ig-flow-box">
                Confirmation to end the chat is displayed
              </div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box">
                User provides the confirmation by entering a prompt
              </div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box">
                Thank you message gets displayed
              </div>
              <span className="ig-flow-arrow" aria-hidden="true">
                →
              </span>
              <div className="ig-flow-box end">User journey ends</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Web Screens ---------- */}
      <section className="ig-section">
        <div className="ig-wrap">
          <h2>Web Screens</h2>

          <figure className="ig-screens-hero">
            <img
              src={dashboardMonitor}
              alt="Infosys Gen AI Application dashboard, displayed on a desktop monitor, showing visits total, cost per click, conversion rate, total impressions, product sales trend, revenue by channel, top website referral channels and website demographics"
            />
          </figure>

          <div className="ig-screens-grid">
            <figure>
              <img src={screenSignin} alt="Sign in screen" />
            </figure>
            <figure>
              <img src={screenSignup} alt="Sign up screen" />
            </figure>
            <figure>
              <img src={screenBase} alt="Dashboard, base state" />
            </figure>
            <figure>
              <img
                src={screenChat01}
                alt="Dashboard with the AI Chat panel open, showing the initial greeting"
              />
            </figure>
            <figure>
              <img
                src={screenChat02}
                alt="Dashboard with the AI Chat panel showing a data insight about a customer buying pattern change"
              />
            </figure>
            <figure>
              <img
                src={screenNudgeDropdown}
                alt="Dashboard with the Nudges menu open, showing a notification about a losing customer for the Best Plan product"
              />
            </figure>
            <figure>
              <img
                src={screenNudges01}
                alt="Dashboard with the AI Nudges panel open, showing the initial greeting"
              />
            </figure>
            <figure>
              <img
                src={screenNudges02}
                alt="Dashboard with the AI Nudges panel showing a campaign traffic alert"
              />
            </figure>
            <figure>
              <img
                src={screenNudges03}
                alt="Dashboard with the AI Nudges panel showing a recommendation adoption update and options to end the chat or ask more queries"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
