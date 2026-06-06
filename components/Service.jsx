import { Bolt, Receipt, Clock, Eye } from "./Icons";

const items = [
  {
    icon: Bolt,
    title: "Compliance, handled fast",
    body: "We resolve flags the same day, so your delivery never stalls.",
  },
  {
    icon: Receipt,
    title: "Transparent billing",
    body: "Clear, predictable terms. You always know what you’re paying for.",
  },
  {
    icon: Clock,
    title: "Around-the-clock coverage",
    body: "We monitor accounts across every time zone and catch issues the moment they surface.",
  },
  {
    icon: Eye,
    title: "Continuous protection",
    body: "We watch account health daily and act before small flags become shutdowns.",
  },
];

export default function Service() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 shadow-sm md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">How we keep accounts healthy</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              We keep your accounts healthy so you never go dark
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {items.map((it) => {
              const Icon = it.icon;
              return (
                <div key={it.title} className="bg-white p-8">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 text-accent">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
