"use client";

import { useState } from "react";
import { Plus } from "./Icons";

const faqs = [
  {
    q: "Are you a marketing agency?",
    a: "No. We provide the trusted ad accounts you run on and keep them healthy. Strategy, creative, and audiences stay with you or your agency.",
  },
  {
    q: "Do I keep my page, followers, and customer data?",
    a: "Yes. Your page, your audience, and your customer data stay in your name. We only operate the ad account layer underneath.",
  },
  {
    q: "What makes your accounts “trusted”?",
    a: "Years of clean history and heavy, consistent spend in these exact health categories. That track record builds trust with Meta over time, and you can’t fake or rush it on a cold account.",
  },
  {
    q: "Do I still need to be LegitScript certified?",
    a: "Yes. LegitScript is the certification Meta requires to advertise health products. You need to have cleared it before we set you up on higher-trust accounts.",
  },
  {
    q: "Does the pixel and event tracking work normally?",
    a: "Yes. You get full pixel functionality and complete event tracking. Optimization and reporting behave exactly as expected.",
  },
  {
    q: "What kinds of brands do you work with?",
    a: "LegitScript-certified health and wellness brands already spending on Meta: compounded GLP-1 and weight-loss programs, men’s health (finasteride, minoxidil, sildenafil, TRT), online and compounding pharmacies, supplements, topicals, and similar regulated products.",
  },
  {
    q: "Can you guarantee a result or a way around the rules?",
    a: "No. We don’t guarantee outcomes and we don’t help anyone bypass Meta’s policies. We provide trusted accounts and keep them healthy so compliant brands can scale.",
  },
  {
    q: "What happens if an account gets flagged?",
    a: "We monitor every account daily and resolve flags fast, usually the same day. Your delivery stays steady.",
  },
  {
    q: "Is this a fit if we’re just getting started?",
    a: "Usually not. Scoreify is for certified brands already spending on Meta who want to scale. It isn’t built for businesses just starting out.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Questions, answered
            </h2>
            <p className="mt-4 text-slate-600">
              Not sure trusted accounts fit your brand? Book a call. We’ll tell you straight.
            </p>
            <a href="#cta" className="btn-ghost mt-6">
              Talk to us
            </a>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-slate-900">{f.q}</span>
                    <span
                      className={`flex h-7 w-7 flex-none items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-accent/50 bg-blue-50 text-accent" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-10 text-sm leading-relaxed text-slate-600">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
