const stats = [
  { value: "Lower", label: "CPMs than cold accounts", sub: "Your budget reaches further" },
  { value: "Same day", label: "Flags resolved", sub: "Every account monitored daily" },
  { value: "Day one", label: "Trusted from launch", sub: "Years of clean history behind it" },
  { value: "Yours", label: "Page, followers, and data", sub: "Nothing changes hands" },
];

export default function Stats() {
  return (
    <section className="py-16">
      <div className="container-x">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-7">
              <div className="bg-gradient-to-r from-accent to-accent-deep bg-clip-text text-3xl font-extrabold tracking-tight text-transparent md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-semibold text-slate-900">{s.label}</div>
              <div className="mt-1 text-xs text-slate-500">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
