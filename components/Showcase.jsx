import AdPerformanceVisual from "./AdPerformanceVisual";
import BoldAdVisual from "./BoldAdVisual";
import StabilityAdVisual from "./StabilityAdVisual";
import OwnershipVisual from "./OwnershipVisual";
import { TrendDown, ShieldCheck, Bolt, Lock } from "./Icons";

const items = [
  {
    n: "01",
    icon: TrendDown,
    visual: "ad",
    title: "More from the same ad budget",
    body:
      "Trusted accounts cost less to run. You reach the same customers for less and put the savings straight back into scale.",
    points: ["Lower CPMs from day one", "Same creative, same audiences", "Every dollar reaches further"],
  },
  {
    n: "02",
    icon: ShieldCheck,
    visual: "stability",
    title: "Ads that stop getting rejected and banned",
    body:
      "We monitor every account daily and resolve flags the same day. Your delivery holds steady, and your account stays up when Meta cracks down on the category.",
    points: ["Daily monitoring on every account", "Same day flag resolution", "Stable when the category gets squeezed"],
  },
  {
    n: "03",
    icon: Bolt,
    visual: "bold",
    title: "Room to run bolder offers",
    body:
      "Trusted accounts have the headroom to run campaigns that get blocked elsewhere, all within Meta's rules. You compete on the same footing as the biggest brands in your space.",
    points: ["Headroom for regulated verticals", "Approvals others can't get", "Outperform accounts stuck on the bottom rung"],
  },
  {
    n: "04",
    icon: Lock,
    visual: "ownership",
    title: "You stay completely in control",
    body:
      "We don't make your ads or run your campaigns. Your page, your followers, and your customer data stay in your name. We keep the account underneath running clean.",
    points: ["No marketing handover", "Your assets stay yours", "We maintain the account, you run the show"],
  },
];

export default function Showcase() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why brands run on Scoreify</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            The only thing that changes is the trust behind the account
          </h2>
          <p className="mt-4 text-slate-600">
            Meta ranks every advertiser by trust. Move up the ranking and health advertising gets
            easier across the board.
          </p>
        </div>

        <div className="mt-20 space-y-28 md:mt-28 md:space-y-44">
          {items.map((it, i) => {
            const Icon = it.icon;
            const flip = i % 2 === 1;
            return (
              <div
                key={it.n}
                className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
              >
                <div className={flip ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold tracking-[0.2em] text-accent">
                      {it.n} <span className="text-slate-300">/ 04</span>
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
                  </div>
                  <div className="mt-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                    {it.title}
                  </h3>
                  <p className="mt-4 text-slate-600">{it.body}</p>
                  <ul className="mt-6 space-y-3">
                    {it.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-slate-700">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-accent">
                          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12.5l4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={flip ? "md:order-1" : ""}>
                  {it.visual === "ad" && <AdPerformanceVisual />}
                  {it.visual === "stability" && <StabilityAdVisual />}
                  {it.visual === "bold" && <BoldAdVisual />}
                  {it.visual === "ownership" && <OwnershipVisual />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
