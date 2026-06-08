import { Arrow } from "./Icons";

export default function SectionCTAs({ showSecondary = true }) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <a href="#cta" className="btn-primary">
        Book a consult
        <Arrow className="h-4 w-4" />
      </a>
      {showSecondary && (
        <a href="/how-it-works" className="btn-ghost">
          How it works
        </a>
      )}
    </div>
  );
}
