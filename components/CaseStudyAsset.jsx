export default function CaseStudyAsset({ logo, brand, ratio = "aspect-[16/9]" }) {
  return (
    <div
      className={`relative flex ${ratio} w-full items-center justify-center overflow-hidden bg-gradient-to-br from-accent via-accent-deep to-cyan-600`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(255,255,255,0.3),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_92%,rgba(8,47,73,0.4),transparent_55%)]" />
      {logo ? (
        <img
          src={logo}
          alt={`${brand} logo`}
          className="relative h-10 w-auto max-w-[58%] object-contain drop-shadow-sm sm:h-14"
        />
      ) : (
        <span className="relative text-2xl font-bold text-white">{brand}</span>
      )}
    </div>
  );
}
