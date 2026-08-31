import { createFileRoute } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";
import heroImage from "@/assets/talos/hero/talos-hero.webp";
import heroImageMobile from "@/assets/talos/hero/talos-hero-mobile.webp";
import contributionImage from "@/assets/talos/contribution/talos-contribution.webp";
import trustImage from "@/assets/talos/trust/talos-trust.webp";
import welcomeShot from "@/assets/talos/experience/talos-welcome.webp";
import concernsShot1 from "@/assets/talos/experience/talos-concerns-01.webp";
import concernsShot2 from "@/assets/talos/experience/talos-concerns-02.webp";
import followupShot1 from "@/assets/talos/experience/talos-followup-01.webp";
import followupShot2 from "@/assets/talos/experience/talos-followup-02.webp";
import reviewShot from "@/assets/talos/experience/talos-review.webp";

const DESCRIPTION =
  "UX case study: Talos Care, a conversational AI assistant that helps patients disclose sensitive health information before meeting a healthcare professional.";

export const Route = createFileRoute("/work/talos-care")({
  head: () => ({
    meta: [
      { title: "Talos Care case study — Harshith Arava" },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Talos Care case study — Harshith Arava" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://harshitharava.github.io/portfolio/work/talos-care" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://harshitharava.github.io/portfolio/work/talos-care" }],
  }),
  component: TalosCarePage,
});

const DESIGN_QUESTION =
  "How might we help patients disclose sensitive health information honestly while making them feel safe, respected, and in control?";

function TalosCarePage() {
  usePortfolioEffects();

  return (
    <main id="main" className="tcs">
      {/* ---------- Hero ---------- */}
      <section className="tcs-hero">
        <div className="tcs-hero-media">
          <picture>
            <source media="(max-width: 760px)" srcSet={heroImageMobile} />
            <img src={heroImage} alt="Talos Care running on a laptop resting on dark rock" />
          </picture>
          <div className="grain-strong" aria-hidden="true" />
          <div className="tcs-wrap tcs-hero-tags">
            <span>Conversational AI</span>
            <span>Human-Centered AI</span>
            <span>UX Design</span>
            <span>Figma</span>
            <span>Accessibility</span>
            <span>Conversation Design</span>
          </div>
          <div className="tcs-hero-title-layer">
            <div className="tcs-wrap tcs-hero-title-rail">
              <p className="tcs-hero-title">
                Talos
                <br />
                Care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Intro + meta ---------- */}
      <div className="tcs-wrap">
        <div className="tcs-intro">
          <h1>Designing trustworthy AI conversations for sensitive healthcare disclosure</h1>
          <p>
            Talos Care is a conversational AI assistant designed to help patients disclose sensitive
            health information before meeting a healthcare professional. Instead of replacing
            clinical expertise, the system supports patients in communicating difficult topics with
            greater confidence while providing clinicians with a structured pre-consultation summary.
          </p>
        </div>

        <div className="tcs-meta">
          <div>
            <h4>Role</h4>
            <p>UX Designer</p>
          </div>
          <div>
            <h4>Duration</h4>
            <p>Jan - May 2026</p>
          </div>
          <div>
            <h4>Course</h4>
            <p>Conversational Interaction with AI</p>
          </div>
          <div>
            <h4>Tools</h4>
            <p>Figma • Groq API • JavaScript • Web Speech API</p>
          </div>
        </div>
      </div>

      {/* ---------- My contribution ---------- */}
      <section className="tcs-section">
        <div className="tcs-wrap">
          <div className="tcs-contribution reveal">
            <img src={contributionImage} alt="Talos Care home screen on a mobile device" />
            <div>
              <h2>My Contribution</h2>
              <p>
                As the UX Designer on Talos, I was responsible for translating healthcare research
                into a conversational experience that patients could trust.
              </p>
              <p>My responsibilities included:</p>
              <ul>
                <li>
                  Conducting a literature review on conversational AI, patient disclosure, and
                  healthcare ethics.
                </li>
                <li>
                  Analysing existing healthcare assistants to identify opportunities for more
                  transparent and user-controlled interactions.
                </li>
                <li>Defining conversation design principles based on research findings.</li>
                <li>
                  Designing user flows, conversation states, and mobile interface wireframes.
                </li>
                <li>
                  Creating interaction patterns for uncertainty, skip behaviour, and conversational
                  recovery.
                </li>
                <li>
                  Prototyping the final experience in Figma and collaborating with the team on
                  prompt refinement.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Understanding the problem ---------- */}
      <section className="tcs-section">
        <div className="tcs-wrap reveal">
          <h2>Understanding the Problem</h2>
          <div className="tcs-callout tcs-callout-full">
            <p className="tcs-callout-lede">Honest conversations shouldn't begin with fear.</p>
          </div>
          <div className="tcs-cols">
            <p>
              Many patients hesitate to discuss sensitive topics such as reproductive health, sexual
              wellbeing, mental health, or substance use during clinical appointments. Feelings of
              embarrassment, fear of judgment, and limited consultation time often prevent people
              from sharing complete information, making it harder for healthcare professionals to
              understand the patient's situation.
            </p>
            <div>
              <p>
                Traditional pre-consultation forms rarely solve this problem. They often feel
                impersonal, rigid, and incapable of adapting to uncertainty or emotional hesitation.
              </p>
              <p>
                This raised an <strong>important design question</strong>.
              </p>
            </div>
          </div>

          <div className="tcs-band">
            <p>{DESIGN_QUESTION}</p>
          </div>
        </div>
      </section>

      {/* ---------- Why conversational AI ---------- */}
      <section className="tcs-section">
        <div className="tcs-wrap reveal">
          <h2>Why Conversational AI?</h2>
          <p>
            Before designing the interface, we explored whether conversational AI was the right
            interaction model.
          </p>
          <p>
            We considered traditional approaches such as digital forms, symptom checklists, and
            static questionnaires. While these methods efficiently collect structured information,
            they struggle when users are uncertain, anxious, or unable to describe their symptoms
            using predefined options.
          </p>
          <p>A conversational interface offered several advantages:</p>

          <div className="tcs-grid tcs-grid-5">
            <div className="tcs-card-neutral">
              <p>Follow-up questions can adapt based on previous responses.</p>
            </div>
            <div className="tcs-card-neutral">
              <p>It allows users to explain concerns naturally in their own words.</p>
            </div>
            <div className="tcs-card-neutral">
              <p>Users can express uncertainty, not being forced into fixed answers.</p>
            </div>
            <div className="tcs-card-neutral">
              <p>The interaction feels more supportive than filling a medical form.</p>
            </div>
            <div className="tcs-card-neutral">
              <p>
                Supports both voice and text interaction, making it more accessible for users with
                disabilities
              </p>
            </div>
          </div>

          <div className="tcs-callout">
            <p className="tcs-callout-lede">Our goal was never to replace doctors with AI</p>
            <p>
              Instead, we wanted AI to act as a trusted conversation partner that prepares both the
              patient and the clinician for a more productive consultation.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Existing solutions ---------- */}
      <section className="tcs-section">
        <div className="tcs-wrap reveal">
          <h2>Existing Solutions</h2>
          <div className="tcs-cols">
            <p>
              Before proposing a solution, we examined how existing conversational healthcare systems
              support patients. Rather than evaluating which system performs best, we wanted to
              understand the different problems each system was designed to solve.
            </p>
            <p>
              Existing systems successfully support diagnosis, triage, and mental wellbeing. This
              review highlighted an opportunity to explore how conversational AI could instead
              support pre-consultation communication for sensitive healthcare discussions.
            </p>
          </div>

          <div className="tcs-table">
            <div className="tcs-table-scroll">
              <table>
                <colgroup>
                  <col />
                  <col />
                  <col />
                </colgroup>
              <thead>
                <tr>
                  <th scope="col">System</th>
                  <th scope="col">Primary Purpose</th>
                  <th scope="col">Typical Interaction</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Ada Health</th>
                  <td>Symptom assessment</td>
                  <td>Structured symptom questionnaire</td>
                </tr>
                <tr>
                  <th scope="row">Buoy Health</th>
                  <td>Care navigation &amp; triage</td>
                  <td>Adaptive symptom questioning</td>
                </tr>
                <tr>
                  <th scope="row">Infermedica</th>
                  <td>Clinical decision support</td>
                  <td>Guided diagnostic interview</td>
                </tr>
                <tr>
                  <th scope="row">Woebot</th>
                  <td>Mental health support</td>
                  <td>CBT-based conversations</td>
                </tr>
                <tr>
                  <th scope="row">ChatGPT</th>
                  <td>General conversational assistance</td>
                  <td>Open-ended natural language</td>
                </tr>
              </tbody>
              </table>
            </div>
          </div>

          <div className="tcs-observation">
            <h3>Observation</h3>
            <p>
              Although these systems successfully support symptom assessment, triage, and mental
              wellbeing, we noticed relatively little emphasis on helping patients prepare for
              conversations with healthcare professionals, particularly when discussing sensitive or
              uncertain health concerns.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Research ---------- */}
      <section className="tcs-section">
        <div className="tcs-wrap reveal">
          <h2>Research</h2>
          <p>
            Rather than designing Talos based on intuition, we began by reviewing existing research
            on conversational AI, healthcare communication, patient disclosure, and ethical AI. Our
            goal was to understand how conversational systems can encourage honest disclosure while
            protecting users' psychological safety and autonomy.
          </p>
          <p>
            Instead of asking "<strong>What features should our chatbot have?</strong>", we asked a
            more fundamental question:
          </p>

          <div className="tcs-band">
            <p>{DESIGN_QUESTION}</p>
          </div>

          <h3>Our literature review focused on three areas</h3>
          <div className="tcs-pillars">
            <div className="tcs-pillar tcs-pillar-down">
              <h3>Patient Disclosure</h3>
              <p>
                Understanding why people hesitate to discuss sensitive health concerns with
                clinicians.
              </p>
            </div>
            <div className="tcs-pillar tcs-pillar-up">
              <h3>Trust &amp; Conversation Design</h3>
              <p>
                Exploring how language, interaction style, and conversational structure influence
                user trust.
              </p>
            </div>
            <div className="tcs-pillar tcs-pillar-down">
              <h3>Ethics &amp; User Autonomy</h3>
              <p>
                Investigating how conversational AI should balance transparency, privacy, and user
                control in healthcare settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Research findings ---------- */}
      <section className="tcs-section">
        <div className="tcs-wrap reveal">
          <h2>Research Findings</h2>
          <p>
            Three research papers became the foundation for Talos. Rather than simply reviewing
            existing literature, we translated each key finding into concrete interaction and
            interface decisions.
          </p>

          <div className="tcs-grid tcs-grid-3">
            <article className="tcs-finding">
              <div className="tcs-finding-top">
                <h3>Blease (2024) | The BMJ</h3>
                <h4>Key Finding</h4>
                <p>
                  Patients are often more willing to disclose sensitive or stigmatized health
                  information to AI systems because they perceive them as less socially judgmental
                  than human clinicians.
                </p>
              </div>
              <div className="tcs-finding-app">
                <h4>Application:</h4>
                <ul>
                  <li>Neutral-supportive conversation style</li>
                  <li>Users can express uncertainty without pressure</li>
                  <li>Open-ended responses instead of rigid yes/no interactions</li>
                </ul>
              </div>
            </article>

            <article className="tcs-finding">
              <div className="tcs-finding-top">
                <h3>Rahsepar Meadi et al. (2025) | JMIR Mental Health</h3>
                <h4>Key Finding</h4>
                <p>
                  Conversational AI in mental healthcare should prioritise transparency, user
                  autonomy, and ethical safeguards to maintain trust.
                </p>
              </div>
              <div className="tcs-finding-app">
                <h4>Application:</h4>
                <ul>
                  <li>Explicit skip options</li>
                  <li>Review summary before sharing</li>
                  <li>Talos positioned as a pre-screening assistant rather than a diagnostic system</li>
                </ul>
              </div>
            </article>

            <article className="tcs-finding">
              <div className="tcs-finding-top">
                <h3>Lyu et al. (2024) | CHI Conference on Human Factors in Computing Systems</h3>
                <h4>Key Finding</h4>
                <p>
                  Participants perceived clinically neutral responses as more trustworthy than
                  exaggerated empathetic language, which often felt artificial.
                </p>
              </div>
              <div className="tcs-finding-app">
                <h4>Application:</h4>
                <ul>
                  <li>Neutral clinical validation ("I've noted that...")</li>
                  <li>Professional conversational tone</li>
                  <li>Focus on clarity rather than simulated empathy</li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ---------- Research insights ---------- */}
      <section className="tcs-section">
        <div className="tcs-wrap reveal">
          <h2>Research Insights</h2>
          <p>
            Our research consistently pointed toward one conclusion: designing an effective
            healthcare assistant was less about answering medical questions and more about creating
            an environment where users felt comfortable sharing personal information.
          </p>
          <p>Three insights became the foundation of Talos.</p>

          <div className="tcs-grid tcs-grid-3">
            <div className="tcs-card-insight">
              <h3>Trust before information</h3>
              <p>
                Participants were more willing to engage when the assistant clearly explained its
                purpose, limitations, and how their information would be used.
              </p>
              <h4>Design implication:</h4>
              <p>Transparency and user autonomy.</p>
            </div>
            <div className="tcs-card-insight">
              <h3>Conversations reduce pressure</h3>
              <p>
                Many users struggled to describe symptoms using clinical terminology and often
                worried about using the "wrong" words.
              </p>
              <h4>Design implication:</h4>
              <p>Flexible dialogue instead of fixed forms.</p>
            </div>
            <div className="tcs-card-insight">
              <h3>Users want guidance, not diagnosis.</h3>
              <p>
                Participants appreciated receiving structured follow-up questions, but expected the
                assistant to remain transparent about its limitations.
              </p>
              <h4>Design implication:</h4>
              <p>Information gathering, not diagnosis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Design constraints ---------- */}
      <section className="tcs-section">
        <div className="tcs-wrap reveal">
          <h2>Design Constraints</h2>
          <p>
            Designing for healthcare required balancing user comfort with ethical AI principles.
            Throughout the project, we established four constraints that guided every design
            decision.
          </p>

          <div className="tcs-grid tcs-grid-4">
            <div className="tcs-card-neutral">
              <h3>No medical diagnosis</h3>
              <p>Talos assists healthcare professionals rather than replacing them.</p>
            </div>
            <div className="tcs-card-neutral">
              <h3>User control</h3>
              <p>Users can skip questions and review information before sharing.</p>
            </div>
            <div className="tcs-card-neutral">
              <h3>Support uncertainty</h3>
              <p>The assistant accepts uncertainty instead of forcing definitive answers.</p>
            </div>
            <div className="tcs-card-neutral">
              <h3>Accessible interaction</h3>
              <p>Support both voice and text while keeping language simple.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Designing for trust ---------- */}
      <section className="tcs-section">
        <div className="tcs-wrap reveal">
          <h2>Designing for Trust</h2>
          <div className="tcs-callout tcs-callout-full">
            <p className="tcs-callout-lede">
              Every interaction was intentionally designed to make users feel informed, supported,
              and in control before discussing sensitive health concerns.
            </p>
          </div>
          <p>
            Trust was one of the most important design considerations throughout the project. Since
            users were expected to discuss sensitive health concerns, every interaction was designed
            to reduce pressure and reinforce transparency rather than simply collect information.
          </p>

          <div className="tcs-trust">
            <div className="tcs-trust-explain">
              <h3>Explain before asking</h3>
              <p>
                Talos introduces itself by clearly communicating its purpose and setting
                expectations before asking any health-related questions. Talos first explains its
                role as a pre-screening assistant before asking any health-related questions.
              </p>
            </div>

            <div className="tcs-trust-media">
              <img
                src={trustImage}
                alt="Talos Care pre-screening screen annotated with three trust cues: a clear introduction, suggested prompts, and the option to skip questions"
              />
            </div>

            <div className="tcs-trust-support">
              <h3>Support different ways of expressing concerns</h3>
              <p>
                Not every user knows how to describe their symptoms using medical terminology. To
                make conversations feel more natural, Talos allows users to either type freely or
                begin with suggested prompts such as Anxiety, Feeling down, or Sleep issues. This
                helps users start the conversation while still allowing them to explain their
                experiences in their own words.
              </p>
            </div>

            <div className="tcs-trust-control">
              <h3>Keep users in control</h3>
              <p>
                Users remain in control throughout the conversation. They can skip questions they
                are uncomfortable answering, choose between voice and text interactions, and review
                the generated summary before deciding whether to share it with a healthcare
                professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Designing conversations ---------- */}
      <section className="tcs-section">
        <div className="tcs-wrap reveal">
          <h2>Designing Conversations</h2>
          <p>
            Our literature review showed that users were often uncertain about their symptoms and
            worried about expressing them incorrectly.
          </p>
          <p>
            Instead of expecting precise medical answers, Talos was designed to acknowledge
            uncertainty, encourage natural language, and adapt its follow-up questions based on each
            response.
          </p>

          <div className="tcs-conversations">
            <div className="tcs-scenario tcs-scenario-1">
              <p className="tcs-scenario-label">Scenario 1 • Supporting Uncertainty</p>
              <div className="tcs-chat">
                <div className="tcs-bubble tcs-bubble-talos tcs-b1">
                  <span>TALOS</span>
                  <p>Have you felt significantly lower energy than usual?</p>
                </div>
                <div className="tcs-bubble tcs-bubble-patient tcs-b2">
                  <span>PATIENT</span>
                  <p>I guess... maybe? I'm not sure.</p>
                </div>
                <div className="tcs-bubble tcs-bubble-talos tcs-b3">
                  <span>TALOS</span>
                  <p>
                    That's completely okay. Would you like to choose "Unsure" or describe how it has
                    affected your daily routine?
                  </p>
                </div>
              </div>
              <div className="tcs-scenario-notes">
                <ul>
                  <li>Accepts uncertainty instead of forcing an answer</li>
                  <li>Uses empathetic language</li>
                  <li>Encourages natural conversation</li>
                </ul>
              </div>
            </div>

            <div className="tcs-scenario tcs-scenario-2">
              <p className="tcs-scenario-label">Scenario 2 • Building Trust Through Follow-up</p>
              <div className="tcs-chat">
                <div className="tcs-bubble tcs-bubble-talos tcs-b1">
                  <span>TALOS</span>
                  <p>Have you been avoiding social situations?</p>
                </div>
                <div className="tcs-bubble tcs-bubble-patient tcs-b2">
                  <span>PATIENT</span>
                  <p>Maybe... I've just been feeling tired.</p>
                </div>
                <div className="tcs-bubble tcs-bubble-talos tcs-b3">
                  <span>TALOS</span>
                  <p>Would you like to tell me more about what's been difficult, or select "Unsure"?</p>
                </div>
              </div>
              <div className="tcs-scenario-notes">
                <ul>
                  <li>Never assumes a diagnosis</li>
                  <li>Encourages clarification</li>
                  <li>Maintains user control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- The experience ---------- */}
      <section className="tcs-section">
        <div className="tcs-wrap reveal">
          <h2>The Experience</h2>
          <p>
            Talos transforms a traditional pre-consultation questionnaire into a guided conversation
            that adapts to the user's responses. Instead of asking users to complete long forms, the
            assistant gradually collects relevant information through a structured yet flexible
            dialogue.
          </p>
          <p>
            The experience is designed to reduce cognitive effort while giving users complete
            visibility and control over what they choose to share.
          </p>

          <h3>
            From onboarding to consultation-ready summary
          </h3>

        </div>

        {/* the four steps sit on the full artboard frame: the pale green pills
            bleed past the content column exactly as they bleed off the artboard */}
        <div className="tcs-frame">
          <div className="tcs-step-band tcs-step-1">
            <div className="tcs-step-pill" aria-hidden="true" />
            <div className="tcs-step-shot">
              <img src={welcomeShot} alt="Talos Care welcome screen with a Start Screening card" />
            </div>
            <div className="tcs-step-copy">
              <h3>1. Welcome</h3>
              <p>
                The conversation begins with a clear introduction, helping users understand Talos'
                role before discussing any health concerns.
              </p>
            </div>
          </div>

          <div className="tcs-step-band tcs-step-2">
            <div className="tcs-step-pill" aria-hidden="true" />
            <div className="tcs-step-shot tcs-step-shot-a">
              <img src={concernsShot1} alt="Talos Care conversation screen with suggested prompts" />
            </div>
            <div className="tcs-step-shot tcs-step-shot-b">
              <img src={concernsShot2} alt="Talos Care conversation screen with a typed answer" />
            </div>
            <div className="tcs-step-copy">
              <h3>2. Express Your Concerns</h3>
              <p>
                Users can describe their symptoms naturally using text or voice, or start with
                suggested prompts if they're unsure how to begin.
              </p>
            </div>
          </div>

          <div className="tcs-step-band tcs-step-3">
            <div className="tcs-step-pill" aria-hidden="true" />
            <div className="tcs-step-shot tcs-step-shot-a">
              <img src={followupShot1} alt="Talos Care voice mode thinking state" />
            </div>
            <div className="tcs-step-shot tcs-step-shot-b">
              <img src={followupShot2} alt="Talos Care voice mode listening state" />
            </div>
            <div className="tcs-step-copy">
              <h3>3. Guided Follow-up</h3>
              <p>
                Talos adapts its follow-up questions based on previous responses, collecting
                additional context without overwhelming the user.
              </p>
            </div>
          </div>

          <div className="tcs-step-band tcs-step-4">
            <div className="tcs-step-pill" aria-hidden="true" />
            <div className="tcs-step-shot">
              <img src={reviewShot} alt="Talos Care summary screen with a Review My Summary button" />
            </div>
            <div className="tcs-step-copy">
              <h3>4. Review &amp; Confirm</h3>
              <p>
                Before ending the session, users receive a structured summary of their conversation.
                They can review the information and decide whether to share it with a healthcare
                professional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Reflection ---------- */}
      <section className="tcs-section tcs-reflection">
        <div className="tcs-wrap reveal">
          <h2>Reflection</h2>
          <p>
            Designing Talos changed my perspective on conversational AI. I initially approached the
            project as a chatbot design challenge, but quickly realised that the real challenge was
            building an experience users felt comfortable trusting with sensitive health information.
          </p>
          <p>
            The project reinforced that successful AI interactions are shaped as much by empathy,
            transparency, and user control as they are by technology. Small design decisions, such as
            explaining why questions were asked, allowing users to skip responses, and reviewing
            information before sharing, played a significant role in creating a trustworthy
            experience.
          </p>
          <p>
            If I were to continue developing Talos, I would focus on validating the experience with
            healthcare professionals and patients, while expanding support for multilingual
            conversations and accessibility.
          </p>
        </div>
      </section>

      {/* ---------- Closing statement ---------- */}
      <section className="tcs-closing">
        <div className="tcs-wrap">
          <p>
            Good AI doesn't replace
            <br />
            human conversations.
            <br />
            It helps people have better ones.
          </p>
        </div>
      </section>
    </main>
  );
}
