"use client";

import { useState } from "react";
import { Arrow } from "./Icons";

// Average CPA advantage on trusted accounts (see the stats band / blog).
const CPA_REDUCTION = 0.3;
const MIN = 50000;
const MAX = 2000000;
const STEP = 10000;

function rateFor(spend) {
  if (spend >= 1000000) return 0.015;
  if (spend >= 750000) return 0.0175;
  if (spend >= 500000) return 0.02;
  if (spend >= 250000) return 0.025;
  return 0.03;
}

function feeFor(spend) {
  if (spend >= 2000000) return null; // custom
  return Math.max(Math.round(spend * rateFor(spend)), 2500);
}

const usd = (n) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);

function abbr(n) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1)}M`;
  if (n >= 1000) return `$${Math.round(n / 1000)}k`;
  return usd(n);
}

export default function SavingsCalculator() {
  const [spend, setSpend] = useState(250000);
  const custom = spend >= MAX;
  const fee = feeFor(spend);
  const gross = spend * CPA_REDUCTION;
  const net = custom ? null : gross - fee;
  const rawFee = spend * rateFor(spend);
  const rateLabel = custom ? "Custom" : rawFee < 2500 ? "min fee" : `${+(rateFor(spend) * 100).toFixed(2)}%`;

  return (
    <div className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-xl shadow-slate-200/60 md:p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-900">Estimate what you save</h3>
        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-accent-deep">Per month</span>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <label htmlFor="spend" className="text-sm text-slate-500">
            Your monthly ad spend
          </label>
          <span className="font-display text-xl font-bold text-slate-900">
            {custom ? "$2,000,000+" : usd(spend)}
          </span>
        </div>
        <input
          id="spend"
          type="range"
          min={MIN}
          max={MAX}
          step={STEP}
          value={spend}
          onChange={(e) => setSpend(Number(e.target.value))}
          className="mt-3 w-full cursor-pointer accent-[#2563eb]"
        />
        <div className="mt-1 flex justify-between text-[11px] text-slate-400">
          <span>$50k</span>
          <span>$2M+</span>
        </div>
      </div>

      {custom ? (
        <div className="mt-6 rounded-xl border border-accent/20 bg-blue-50 p-6 text-center">
          <div className="text-lg font-bold text-slate-900">Custom plan</div>
          <p className="mx-auto mt-1 max-w-sm text-sm text-slate-600">
            Above $2M a month we build a custom rate. Let&apos;s walk through the numbers for your accounts.
          </p>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-xs text-slate-500">Saved on lower CPAs</div>
            <div className="mt-1 text-xl font-bold text-slate-900">{usd(gross)}</div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-xs text-slate-500">Scoreify fee ({rateLabel})</div>
            <div className="mt-1 text-xl font-bold text-slate-900">{usd(fee)}</div>
          </div>
          <div className="col-span-2 rounded-xl border border-accent/25 bg-blue-50 p-5">
            <div className="text-xs font-semibold text-accent-deep">Estimated net savings</div>
            <div className="mt-1 flex flex-wrap items-baseline gap-x-3">
              <span className="font-display text-4xl font-extrabold tracking-tight text-accent-deep">{usd(net)}</span>
              <span className="text-sm text-slate-500">/ month · about {abbr(net * 12)} a year</span>
            </div>
          </div>
        </div>
      )}

      <a href="#cta" className="btn-primary mt-6 w-full">
        Book a consult
        <Arrow className="h-4 w-4" />
      </a>

      <p className="mt-3 text-[11px] leading-relaxed text-slate-400">
        Estimates only. Assumes an average 30% lower CPA on trusted accounts, net of the Scoreify fee.
        Actual results vary by vertical, creative, and account.
      </p>
    </div>
  );
}
