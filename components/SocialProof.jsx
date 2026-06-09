const logos = Array.from({ length: 11 }, (_, i) => `/partners/logo-${i + 1}.png`);

export default function SocialProof({ dark = false }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={dark ? "/trustpilot.svg" : "/trustpilot-light.svg"}
        alt="Rated Excellent on Trustpilot"
        className="h-6 w-auto sm:h-7"
      />

      <div className="relative mt-8 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12 motion-reduce:animate-none">
          {[...logos, ...logos].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              aria-hidden="true"
              className={`h-9 w-auto flex-none object-contain transition-opacity duration-200 ${
                dark ? "opacity-70 hover:opacity-100" : "opacity-55 brightness-0 hover:opacity-90"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
