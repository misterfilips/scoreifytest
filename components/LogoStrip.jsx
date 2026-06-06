export default function LogoStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-12">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          Trusted by serious health &amp; wellness advertisers
        </p>
        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center justify-center">
              <div className="flex h-9 w-28 items-center justify-center rounded-md border border-dashed border-slate-300 text-[10px] uppercase tracking-[0.15em] text-slate-400">
                Logo
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
