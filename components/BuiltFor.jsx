import { Placeholder } from "./Hero";
import { Arrow } from "./Icons";
import { verticals } from "@/content/verticals";

export default function BuiltFor() {
  return (
    <section id="built-for" className="py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Who we serve</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Built for regulated health verticals
          </h2>
          <p className="mt-4 text-slate-600">
            We work with the categories Meta treats as high-risk. If your products are regulated and
            your spend is real, you're who we built this for.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v) => (
            <a
              key={v.slug}
              href={`/who-we-serve/${v.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg"
            >
              <Placeholder ratio="aspect-[16/10]" label={v.name} />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-slate-900">{v.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{v.blurb}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-deep">
                  Learn more
                  <Arrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
