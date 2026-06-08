import SavingsCalculator from "./SavingsCalculator";

export default function SavingsSection() {
  return (
    <section id="savings" className="scroll-mt-24 py-20 md:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            See what it’s worth to you
          </h2>
          <p className="mt-4 text-slate-600">
            Drag your monthly ad spend to estimate your net savings on trusted accounts, after our fee.
          </p>
        </div>
        <div className="mt-10">
          <SavingsCalculator />
        </div>
      </div>
    </section>
  );
}
