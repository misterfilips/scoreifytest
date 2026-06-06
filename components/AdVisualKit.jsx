"use client";

import { useEffect, useRef, useState } from "react";

/* Reveal a node once it scrolls into view. */
export function useInView(threshold = 0.35) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* A floating card: outer handles the scroll reveal, inner handles the
   continuous float so the two transforms never fight each other. */
export function FloatCard({ inView, delay = 0, float = "animate-float", className = "", children }) {
  return (
    <div
      className={`absolute z-10 transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={inView ? float : ""}>{children}</div>
    </div>
  );
}

export function ArrowDown({ className = "h-3.5 w-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}
export function ArrowUp({ className = "h-3.5 w-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  );
}
export function CheckMark({ className = "h-3.5 w-3.5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

/* Shared chrome for the ad creative container. */
export function AdFrame({ src, alt, children }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/60 ring-1 ring-black/[0.03]">
      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
        <span className="ml-2 text-[11px] font-medium text-slate-400">Sponsored</span>
      </div>
      <img
        src={src}
        alt={alt}
        width={1080}
        height={1080}
        className="block aspect-square w-full object-cover"
      />
      {children}
    </div>
  );
}
