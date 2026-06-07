const logos = Array.from({ length: 10 }, (_, i) => `/partners/logo-${i + 1}.png`);

export default function LogoStrip() {
  return (
    <section className="bg-slate-900 py-14">
      <div className="container-x">
        {/* Trustpilot rating */}
        <div className="flex flex-col items-center gap-2.5">
          <img src="/trustpilot.svg" alt="Rated Excellent on Trustpilot" className="h-6 w-auto" />
          <p className="text-xs font-medium text-white/50">
            Rated Excellent by health &amp; wellness advertisers
          </p>
        </div>

        {/* Logo marquee */}
        <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-14 pr-14 motion-reduce:animate-none">
            {[...logos, ...logos].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                aria-hidden="true"
                className="h-7 w-auto flex-none object-contain opacity-70 transition-opacity hover:opacity-100"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
