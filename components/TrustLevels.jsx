const levels = [
  {
    tier: "The bottom rung",
    name: "“You’re approved to run ads”",
    desc:
      "The bare minimum. Most account sellers stop here, and so does anyone setting up on their own. It comes with high costs, frequent rejections, and bans the moment Meta tightens up on the category.",
    tone: "muted",
  },
  {
    tier: "Where the big names run",
    name: "Real, established trust",
    desc:
      "Lower costs. Approvals that go through. Accounts that stay up when Meta cracks down on everyone else. For years this was out of reach unless you were a massive brand.",
    tone: "accent",
  },
];

export default function TrustLevels() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div className="glow pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] opacity-80" />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Meta has trust tiers most advertisers never see
          </h2>
          <p className="mt-4 text-slate-600">
            Most brands sit at the bottom tier without knowing it, and assume the high costs and
            sudden bans are just part of advertising in health.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {levels.map((l) => (
            <div
              key={l.name}
              className={`relative rounded-2xl border p-8 ${
                l.tone === "accent"
                  ? "border-accent/30 bg-gradient-to-b from-blue-50 to-white shadow-lg shadow-blue-100/60"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div
                className={`text-xs font-semibold uppercase tracking-[0.18em] ${
                  l.tone === "accent" ? "text-accent-deep" : "text-slate-400"
                }`}
              >
                {l.tier}
              </div>
              <h3 className="mt-3 text-xl font-bold text-slate-900">{l.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{l.desc}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <p className="text-lg leading-relaxed text-slate-700">
            <span className="font-semibold text-slate-900">Scoreify’s accounts sit at that higher
            level.</span> They carry years of clean history and heavy, steady spend in these exact
            health categories. That track record is what earns Meta’s trust.
          </p>
          <p className="mt-4 text-sm font-medium text-accent-deep">
            Our accounts already carry the trust most brands spend years trying to build on their own.
          </p>
        </div>
      </div>
    </section>
  );
}
