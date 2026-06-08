import { TrendDown, CheckCircle, Gauge, Bolt, Clock, ShieldCheck } from "./Icons";

const features = [
  {
    icon: TrendDown,
    title: "Lower CPMs",
    body: "Reach the same customers for less. Your budget stretches further from day one.",
  },
  {
    icon: CheckCircle,
    title: "More approvals",
    body: "Offers that get rejected on cold accounts go through, all within Meta’s rules.",
  },
  {
    icon: Gauge,
    title: "Full pixel functionality",
    body: "Clean signal and complete event tracking. Optimization and reporting work as they should.",
  },
  {
    icon: Bolt,
    title: "Aggressive scaling",
    body: "Push spend hard without tripping the limits that throttle cold accounts.",
  },
  {
    icon: Clock,
    title: "Faster delivery",
    body: "Campaigns exit the learning phase fast and ramp from the start.",
  },
  {
    icon: ShieldCheck,
    title: "Long-term stability",
    body: "Accounts with real history hold up when Meta cracks down on the category.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Everything a trusted account changes
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="card group">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-accent transition-colors group-hover:border-blue-200 group-hover:bg-blue-50">
                  <Icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
