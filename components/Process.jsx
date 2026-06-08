const steps = [
  {
    n: "1",
    title: "Book a discovery call",
    body:
      "We learn your brand, your offers, and your current spend, then tell you straight whether trusted accounts fit.",
  },
  {
    n: "2",
    title: "Submit your LegitScript credentials",
    body:
      "You’ve already cleared LegitScript, the certification Meta requires to advertise health products. We use it to set you up on higher-trust accounts.",
  },
  {
    n: "3",
    title: "Launch and scale without limits",
    body:
      "Run your campaigns on accounts Meta already trusts. We monitor and protect them daily while you focus on growth.",
  },
];

export default function Process() {
  return (
    <section id="how" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            From cleared to scaling in three steps
          </h2>
          <p className="mt-4 text-slate-600">
            We maintain the trusted account your campaigns run on, so you can focus on growth.
          </p>
        </div>

        <div className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent md:block" />
          {steps.map((s) => (
            <div key={s.n} className="card relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-xl font-bold text-accent">
                {s.n}
              </div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
