"use client";

import { useEffect, useState } from "react";
import { useInView } from "./AdVisualKit";

// NOTE: percentage values are placeholders — swap in real figures when confirmed.
const metrics = [
  { value: 200, prefix: "$", suffix: "M+", label: "Ad spend processed", sub: "across regulated health verticals" },
  { value: 22, prefix: "", suffix: "%", label: "Lower CPMs", sub: "vs. cold health accounts" },
  { value: 30, prefix: "", suffix: "%", label: "Lower CPAs", sub: "more conversions per dollar" },
  { value: 98, prefix: "", suffix: "%", label: "Ad approval rate", sub: "creative that clears review" },
];

function useCountUp(target, inView, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, inView, duration]);
  return val;
}

function Metric({ m, inView }) {
  const val = useCountUp(m.value, inView);
  return (
    <div className="bg-white p-8 text-center">
      <div className="text-4xl font-extrabold tracking-tight text-accent-deep md:text-5xl">
        {m.prefix}
        {val}
        {m.suffix}
      </div>
      <div className="mt-3 text-sm font-semibold text-slate-900">{m.label}</div>
      <div className="mt-1 text-xs text-slate-500">{m.sub}</div>
    </div>
  );
}

export default function Stats() {
  const [ref, inView] = useInView(0.3);
  return (
    <section className="py-16">
      <div className="container-x">
        <div
          ref={ref}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((m) => (
            <Metric key={m.label} m={m} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
