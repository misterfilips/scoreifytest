import ShowcaseVisual from "./showcaseVisuals";
import SectionCTAs from "./SectionCTAs";

export default function VerticalShowcase({ vertical }) {
  const sections = vertical.sections || [];
  const total = String(sections.length).padStart(2, "0");

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Why Scoreify for {vertical.name}</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Built around what {vertical.name} brands face
          </h2>
          <p className="mt-4 text-slate-600">
            The problems your category runs into on Meta, and what changes once you&apos;re on an
            account it already trusts.
          </p>
        </div>

        <div className="mt-20 space-y-28 md:mt-28 md:space-y-44">
          {sections.map((it, i) => {
            const flip = i % 2 === 1;
            const n = String(i + 1).padStart(2, "0");
            return (
              <div key={it.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={flip ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold tracking-[0.2em] text-accent">
                      {n} <span className="text-slate-300">/ {total}</span>
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-accent/40 to-transparent" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
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
                  <SectionCTAs />
                </div>

                <div className={flip ? "md:order-1" : ""}>
                  <ShowcaseVisual slug={vertical.slug} index={i} label={`${vertical.name} ${n}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
