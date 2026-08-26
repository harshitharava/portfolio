import { createFileRoute } from "@tanstack/react-router";
import { usePortfolioEffects } from "@/components/site/usePortfolioEffects";

export const Route = createFileRoute("/work/fieldkit")({
  head: () => ({
    meta: [
      { title: 'FieldKit case study — Harshith Arava' },
      { name: "description", content: "UX case study: an exception-first fleet operations dashboard that took a dispatcher's morning from 40 tabs to one screen. 62% faster to find at-risk trailers." },
      { property: "og:title", content: 'FieldKit case study — Harshith Arava' },
      { property: "og:description", content: "UX case study: an exception-first fleet operations dashboard that took a dispatcher's morning from 40 tabs to one screen. 62% faster to find at-risk trailers." },
      { property: "og:type", content: 'article' },
      { property: "og:url", content: '/work/fieldkit' },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    // TEMPORARY PLACEHOLDER: relative canonical until the real domain is live.
    links: [{ rel: "canonical", href: '/work/fieldkit' }],
  }),
  component: FieldkitPage,
});

function FieldkitPage() {
  usePortfolioEffects();
  return (
    <main id="main">

    
    <section className={"cs-hero"}>
      <div className={"wrap"}>
        <p className={"eyebrow"}>FieldKit · Logistics · Web · Dashboard · 2023</p>
        <h1>A dispatcher's morning, down from 40 tabs to one screen.</h1>
        <p className={"lede"}>A fleet operations dashboard for a logistics company —
          built from mornings spent beside 8 dispatchers across 3 depots, and
          designed to show the 12 trailers that need action, not all 400.</p>

        <div className={"cs-meta"}>
          <div><h4>Role</h4><p>Senior product designer</p></div>
          <div><h4>Timeline</h4><p>3 months · 2023</p></div>
          <div><h4>Team</h4><p>1 designer, 4 engineers</p></div>
          <div><h4>Platform</h4><p>Web</p></div>
        </div>

        <div className={"cs-cover"} aria-hidden={"true"}>
          <svg viewBox={"0 0 1120 520"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"}>
            <rect width={"1120"} height={"520"} fill={"#d97706"} opacity={"0.09"} />
            <rect x={"120"} y={"70"} width={"880"} height={"400"} rx={"18"} fill={"var(--surface)"} stroke={"var(--line)"} />
            <rect x={"120"} y={"70"} width={"220"} height={"400"} fill={"var(--surface-2)"} />
            <rect x={"148"} y={"104"} width={"120"} height={"14"} rx={"7"} fill={"var(--ink)"} />
            <rect x={"148"} y={"150"} width={"164"} height={"12"} rx={"6"} fill={"var(--ink-3)"} opacity={"0.5"} />
            <rect x={"148"} y={"180"} width={"140"} height={"12"} rx={"6"} fill={"var(--ink-3)"} opacity={"0.4"} />
            <rect x={"148"} y={"210"} width={"152"} height={"12"} rx={"6"} fill={"var(--ink-3)"} opacity={"0.3"} />
            <rect x={"376"} y={"104"} width={"240"} height={"18"} rx={"9"} fill={"var(--ink)"} />
            <rect x={"376"} y={"150"} width={"286"} height={"90"} rx={"14"} fill={"#d97706"} />
            <rect x={"398"} y={"172"} width={"90"} height={"10"} rx={"5"} fill={"#fff"} opacity={"0.8"} />
            <rect x={"398"} y={"196"} width={"150"} height={"20"} rx={"10"} fill={"#fff"} />
            <rect x={"684"} y={"150"} width={"286"} height={"90"} rx={"14"} fill={"var(--surface-2)"} stroke={"var(--line)"} />
            <rect x={"706"} y={"172"} width={"90"} height={"10"} rx={"5"} fill={"var(--ink-3)"} opacity={"0.5"} />
            <rect x={"706"} y={"196"} width={"120"} height={"20"} rx={"10"} fill={"var(--ink)"} />
            <rect x={"376"} y={"272"} width={"594"} height={"52"} rx={"10"} fill={"var(--surface-2)"} stroke={"var(--line)"} />
            <circle cx={"404"} cy={"298"} r={"8"} fill={"#d97706"} />
            <rect x={"428"} y={"292"} width={"200"} height={"12"} rx={"6"} fill={"var(--ink)"} opacity={"0.7"} />
            <rect x={"376"} y={"338"} width={"594"} height={"52"} rx={"10"} fill={"var(--surface-2)"} stroke={"var(--line)"} />
            <circle cx={"404"} cy={"364"} r={"8"} fill={"#d97706"} opacity={"0.5"} />
            <rect x={"428"} y={"358"} width={"160"} height={"12"} rx={"6"} fill={"var(--ink-3)"} opacity={"0.6"} />
            <rect x={"376"} y={"404"} width={"594"} height={"36"} rx={"10"} fill={"var(--surface-2)"} stroke={"var(--line)"} opacity={"0.6"} />
            <g stroke={"var(--redline)"}>
              <line x1={"376"} y1={"52"} x2={"970"} y2={"52"} />
              <line x1={"376"} y1={"46"} x2={"376"} y2={"58"} />
              <line x1={"970"} y1={"46"} x2={"970"} y2={"58"} />
            </g>
            <rect x={"642"} y={"40"} width={"62"} height={"24"} rx={"6"} fill={"var(--redline)"} />
            <text x={"673"} y={"56"} textAnchor={"middle"} fontFamily={"JetBrains Mono, monospace"} fontSize={"12"} fill={"#fff"}>1 view</text>
          </svg>
        </div>
      </div>
    </section>

    
    <div className={"wrap cs-layout"}>
      <aside className={"cs-toc"} aria-label={"On this page"}>
        <h4>Contents</h4>
        <ol>
          <li><a href={"#overview"}>Overview</a></li>
          <li><a href={"#problem"}>Problem</a></li>
          <li><a href={"#approach"}>Approach</a></li>
          <li><a href={"#solution"}>Solution</a></li>
          <li><a href={"#results"}>Results</a></li>
          <li><a href={"#learnings"}>Learnings</a></li>
        </ol>
      </aside>

      <div className={"cs-body"}>
        <section className={"cs-section"} id={"overview"}>
          <h2>Overview</h2>
          <p>FieldKit's client runs a trailer fleet of around 400 units across three
            depots. Every morning, dispatchers answered one question — "where are my
            trailers and which ones need attention?" — by stitching together
            spreadsheets, a GPS portal, and a phone that never stopped ringing.</p>
          <p>I was the sole designer on a team of four engineers, owning research,
            interaction design, and the shipped UI over a three-month engagement.</p>
        </section>

        <section className={"cs-section"} id={"problem"}>
          <h2>Problem</h2>
          <div className={"highlight"}>Dispatchers weren't short on data — they were
            drowning in it. Forty browser tabs, three systems, and zero answers
            to "which trailers actually need me right now?"</div>
          <p>The cost was concrete: at-risk trailers — idle too long, off-route, or
            overdue for a depot check — were found by accident or by phone call, not
            by the tools. Each miss meant a late load, an unhappy customer, or a
            trailer sitting unbilled in a yard.</p>
        </section>

        <section className={"cs-section"} id={"approach"}>
          <h2>Approach</h2>
          <p>I shadowed 8 dispatchers across all 3 depots, sitting beside them
            through full morning shifts. The pattern was unmistakable: their day is
            interruption-driven, and every interruption cost them their place across
            dozens of tabs. They didn't need a map of everything — they needed a
            short, trustworthy list of what's wrong.</p>
          <ul className={"cs-list"}>
            <li><strong>Exceptions first.</strong> Show the 12 trailers that need
              action, not all 400. The healthy fleet earns a single quiet count.</li>
            <li><strong>Progressive disclosure.</strong> Alert → trailer → history.
              Each level answers one question before offering the next.</li>
            <li><strong>Survive the interruption.</strong> State, filters, and scroll
              position persist, so a phone call never resets the morning.</li>
          </ul>
          <figure className={"cs-figure"}>
            <svg viewBox={"0 0 720 300"} fill={"none"} xmlns={"http://www.w3.org/2000/svg"} aria-hidden={"true"}>
              <rect width={"720"} height={"300"} fill={"var(--surface)"} />
              <text x={"40"} y={"48"} fontFamily={"JetBrains Mono, monospace"} fontSize={"12"} fill={"var(--ink-3)"}>PROGRESSIVE DISCLOSURE — ALERT → TRAILER → HISTORY</text>
              <rect x={"40"} y={"80"} width={"180"} height={"170"} rx={"12"} fill={"var(--surface-2)"} stroke={"var(--line)"} />
              <circle cx={"68"} cy={"112"} r={"8"} fill={"#d97706"} />
              <rect x={"86"} y={"106"} width={"110"} height={"12"} rx={"6"} fill={"var(--ink)"} opacity={"0.7"} />
              <rect x={"60"} y={"140"} width={"140"} height={"10"} rx={"5"} fill={"var(--ink-3)"} opacity={"0.4"} />
              <rect x={"60"} y={"164"} width={"120"} height={"10"} rx={"5"} fill={"var(--ink-3)"} opacity={"0.3"} />
              <path d={"M232 165h48"} stroke={"#d97706"} strokeWidth={"3"} strokeLinecap={"round"} />
              <rect x={"292"} y={"80"} width={"180"} height={"170"} rx={"12"} fill={"var(--surface-2)"} stroke={"var(--line)"} />
              <rect x={"312"} y={"104"} width={"100"} height={"14"} rx={"7"} fill={"var(--ink)"} />
              <rect x={"312"} y={"134"} width={"140"} height={"60"} rx={"10"} fill={"#d97706"} opacity={"0.25"} />
              <rect x={"312"} y={"210"} width={"110"} height={"10"} rx={"5"} fill={"var(--ink-3)"} opacity={"0.4"} />
              <path d={"M484 165h48"} stroke={"#d97706"} strokeWidth={"3"} strokeLinecap={"round"} />
              <rect x={"544"} y={"80"} width={"136"} height={"170"} rx={"12"} fill={"var(--surface-2)"} stroke={"var(--line)"} />
              <path d={"M564 220l28-30 24 12 36-44"} stroke={"#d97706"} strokeWidth={"4"} strokeLinecap={"round"} fill={"none"} />
              <text x={"52"} y={"278"} fontFamily={"JetBrains Mono, monospace"} fontSize={"10"} fill={"var(--ink-3)"}>1 · alert</text>
              <text x={"304"} y={"278"} fontFamily={"JetBrains Mono, monospace"} fontSize={"10"} fill={"var(--ink-3)"}>2 · trailer</text>
              <text x={"556"} y={"278"} fontFamily={"JetBrains Mono, monospace"} fontSize={"10"} fill={"var(--ink-3)"}>3 · history</text>
            </svg>
            <figcaption>fig 01 — each level answers one question before offering the next</figcaption>
          </figure>
        </section>

        <section className={"cs-section"} id={"solution"}>
          <h2>Solution</h2>
          <p>The shipped dashboard opens on the exception queue: every trailer that
            needs action, ranked by urgency, each with the reason stated in plain
            language ("idle 3 days at Pune yard"). One click expands the trailer's
            live status; one more reveals its full movement history. The map is
            still there — but as evidence on demand, not the starting point.</p>
          <p>Crucially, we didn't fight the spreadsheets. Every queue exports to CSV
            in the exact column order dispatchers already used, which is what earned
            us the first week of honest adoption from experts who loved their
            existing tools.</p>
        </section>

        <section className={"cs-section"} id={"results"}>
          <h2>Results</h2>
          <div className={"metric-tiles"}>
            <div className={"metric-tile"}><b>−62%</b><span>time to locate an at-risk trailer</span></div>
            <div className={"metric-tile"}><b>11 min</b><span>average saved per dispatch cycle</span></div>
            <div className={"metric-tile"}><b>96%</b><span>weekly active dispatchers</span></div>
          </div>
          <p>Within two months, FieldKit was the first tab open at every depot each
            morning — and for most dispatchers, the only one. The GPS portal and
            the morning spreadsheet ritual quietly fell out of the routine.</p>
        </section>

        <section className={"cs-section"} id={"learnings"}>
          <h2>Learnings</h2>
          <ul className={"cs-list"}>
            <li><strong>Design for the interruption, not the flow.</strong>
              Dispatch work is a series of resumptions. Preserving context across
              phone calls did more for adoption than any visual polish.</li>
            <li><strong>Expert users don't resist change — they resist loss.</strong>
              The spreadsheet wasn't the enemy; it was their safety net. Matching
              its export format cost us a day and bought us their trust.</li>
            <li><strong>Fewer things, honestly ranked, beats everything on a map.</strong>
              Showing 12 trailers instead of 400 felt risky to stakeholders and
              obvious to every dispatcher we tested with.</li>
          </ul>
        </section>
      </div>
    </div>

    </main>
  );
}
