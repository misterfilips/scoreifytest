const logos = Array.from({ length: 11 }, (_, i) => `/partners/logo-${i + 1}.png`);

function TpStar({ className = "h-3 w-3" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.2l2.6 6.3 6.8.5-5.2 4.4 1.6 6.6L12 16.9 6.2 20l1.6-6.6L2.6 9l6.8-.5z" />
    </svg>
  );
}

function TrustpilotRating() {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="flex h-5 w-5 items-center justify-center rounded-[2px] bg-[#00b67a]">
            <TpStar className="h-3 w-3 text-white" />
          </span>
        ))}
        <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden rounded-[2px] bg-slate-300">
          <span className="absolute inset-y-0 left-0 w-1/2 bg-[#00b67a]" />
          <TpStar className="relative h-3 w-3 text-white" />
        </span>
      </div>
      <p className="text-sm text-slate-500">
        Rated <span className="font-semibold text-slate-800">Excellent</span> on{" "}
        <span className="inline-flex items-center gap-1 font-bold text-slate-800">
          <TpStar className="h-3.5 w-3.5 text-[#00b67a]" />
          Trustpilot
        </span>
      </p>
    </div>
  );
}

export default function SocialProof() {
  return (
    <div className="flex flex-col items-center">
      <TrustpilotRating />

      <div className="relative mt-8 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-12 pr-12 motion-reduce:animate-none">
          {[...logos, ...logos].map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              aria-hidden="true"
              className="h-9 w-auto flex-none object-contain opacity-55 brightness-0 transition-opacity duration-200 hover:opacity-90"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
