"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Icons";
import { verticals } from "@/content/verticals";

const links = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Why Scoreify", href: "/#why" },
  { label: "FAQ", href: "/#faq" },
];

const resources = [
  { label: "Blog", href: "/blog", desc: "How Meta really treats health advertisers" },
  { label: "Best practices", href: "/best-practices", desc: "Playbooks per vertical and Meta ads overall" },
];

const chevron = (
  <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Navbar({ overDark = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [serveOpen, setServeOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light (white) treatment only while transparent over a dark hero.
  const light = overDark && !scrolled;
  const linkCls = light ? "text-white/80 hover:text-white" : "text-slate-600 hover:text-slate-900";
  const logoCls = light ? "text-white" : "text-slate-900";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="/" className="flex items-center">
          <Wordmark className={`h-6 w-auto ${logoCls}`} />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {/* Who We Serve dropdown */}
          <div className="group relative">
            <button className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkCls}`}>
              Who We Serve
              {chevron}
            </button>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-300/50">
                {verticals.map((v) => (
                  <a
                    key={v.slug}
                    href={`/who-we-serve/${v.slug}`}
                    className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50"
                  >
                    <div className="text-sm font-semibold text-slate-900">{v.name}</div>
                    <div className="mt-0.5 line-clamp-1 text-xs text-slate-500">{v.blurb}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Resources dropdown */}
          <div className="group relative">
            <button className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkCls}`}>
              Resources
              {chevron}
            </button>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-300/50">
                {resources.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-50"
                  >
                    <div className="text-sm font-semibold text-slate-900">{r.label}</div>
                    <div className="mt-0.5 line-clamp-1 text-xs text-slate-500">{r.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${linkCls}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#cta" className={`text-sm font-medium transition-colors ${linkCls}`}>
            Sign in
          </a>
          <a href="#cta" className="btn-primary">
            Book a consultation
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors md:hidden ${
            light ? "border-white/30 text-white" : "border-slate-200 text-slate-900"
          }`}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 transition ${light ? "bg-white" : "bg-slate-900"} ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 transition ${light ? "bg-white" : "bg-slate-900"} ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 transition ${light ? "bg-white" : "bg-slate-900"} ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <button
            onClick={() => setServeOpen((v) => !v)}
            className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-slate-700"
          >
            Who We Serve
            <svg className={`h-4 w-4 transition-transform ${serveOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {serveOpen && (
            <div className="mb-2 ml-3 border-l border-slate-200 pl-3">
              {verticals.map((v) => (
                <a
                  key={v.slug}
                  href={`/who-we-serve/${v.slug}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-slate-600"
                >
                  {v.name}
                </a>
              ))}
            </div>
          )}

          <button
            onClick={() => setResOpen((v) => !v)}
            className="flex w-full items-center justify-between py-2.5 text-sm font-medium text-slate-700"
          >
            Resources
            <svg className={`h-4 w-4 transition-transform ${resOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {resOpen && (
            <div className="mb-2 ml-3 border-l border-slate-200 pl-3">
              {resources.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-slate-600"
                >
                  {r.label}
                </a>
              ))}
            </div>
          )}

          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-medium text-slate-700"
            >
              {l.label}
            </a>
          ))}
          <a href="#cta" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
            Book a consultation
          </a>
        </div>
      )}
    </header>
  );
}
