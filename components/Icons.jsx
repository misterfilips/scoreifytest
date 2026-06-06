export function Logo({ className = "h-7 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="2" width="32" height="32" rx="9" fill="url(#sg)" />
      <path
        d="M11 22.5c1.4 1.6 3.4 2.5 5.7 2.5 3 0 5-1.4 5-3.6 0-2-1.4-3-4.6-3.7-2.6-.6-3.4-1-3.4-2 0-1 1-1.7 2.6-1.7 1.6 0 2.8.6 3.8 1.7"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 9.5v17" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      <defs>
        <linearGradient id="sg" x1="2" y1="2" x2="34" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ShieldCheck(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
export function TrendDown(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M3 6l6 6 4-4 8 8" />
      <path d="M21 16v-5m0 5h-5" />
    </svg>
  );
}
export function CheckCircle(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.2 2.2L16 9.5" />
    </svg>
  );
}
export function Gauge(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M4 17a8 8 0 1116 0" />
      <path d="M12 17l4-5" />
      <circle cx="12" cy="17" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function Layers(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}
export function Lock(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 018 0v3" />
    </svg>
  );
}
export function Bolt(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M13 3L5 13h6l-1 8 8-10h-6l1-8z" />
    </svg>
  );
}
export function Clock(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}
export function Receipt(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z" />
      <path d="M9 8h6M9 12h6" />
    </svg>
  );
}
export function Eye(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
export function Plus(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
export function Arrow(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
export function Check(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}
export function X(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
export function Dash(p) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M6 12h12" />
    </svg>
  );
}
