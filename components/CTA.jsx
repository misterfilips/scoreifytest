import { Arrow } from "./Icons";

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-accent-deep px-6 py-16 text-center shadow-xl shadow-blue-200/60 md:px-12 md:py-20">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.25),transparent_35%)]" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Run on accounts Meta already trusts
            </h2>
            <p className="mt-5 text-lg text-blue-50">
              If you’re LegitScript certified and spending on Meta, book a call. We’ll show you what
              running at the top tier looks like for your brand.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href="mailto:hello@scoreify.io"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent-deep transition-all duration-200 hover:bg-blue-50 sm:w-auto"
              >
                Book a free consultation
                <Arrow className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-5 text-xs text-blue-100/80">
              For certified, compliant health &amp; wellness advertisers only. No guarantees, no
              workarounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
