import { Wordmark } from "./Icons";

const groups = [
  {
    title: "Product",
    links: [
      { label: "Why Scoreify", href: "/#why" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Who we serve", href: "/#built-for" },
      { label: "Case studies", href: "/case-studies" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Best practices", href: "/best-practices" },
      { label: "Book a consultation", href: "#cta" },
      { label: "Contact", href: "mailto:hello@scoreify.io" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "EULA", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="inline-flex items-center">
              <Wordmark className="h-7 w-auto text-slate-900" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Trusted Meta ad accounts for LegitScript-certified health and wellness brands. Lower
              costs, more approvals, no surprise bans.
            </p>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                {g.title}
              </div>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-slate-600 transition-colors hover:text-slate-900">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Scoreify. All rights reserved.</p>
          <p>Not affiliated with or endorsed by Meta Platforms, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
