// Best-practice articles (evergreen, SEO + AI-SEO oriented).
// Body blocks: { p }, { h2 }, { ul }. Optional faq: [{ q, a }] renders
// an FAQ section and FAQPage structured data.

export const guides = [
  {
    slug: "meta-ads-regulated-health",
    title: "Meta ads best practices for regulated health & wellness brands",
    category: "Meta ads",
    updated: "2026-06-01",
    readTime: "6 min read",
    excerpt:
      "A practical playbook for advertising regulated health products on Meta: credentialing, creative, signal, scaling, and account health.",
    body: [
      { p: "Regulated health brands face a version of Meta most advertisers never see. Higher CPMs, more rejections, stripped signal, and accounts that disappear without warning. The brands that scale anyway follow a consistent set of practices. Here is the short version." },
      { h2: "1. Treat credentialing as the foundation, not a checkbox" },
      { p: "LegitScript certification is the entry requirement, but certification alone does not change your trust tier on Meta. Aim for entity-level whitelisting and a high HiVA-tier on the infrastructure you run, because that is what moves CPMs and approval rates." },
      { h2: "2. Design creative for automated review, not just policy" },
      { p: "Most rejections come from automated pattern detection, not a human reading your policy. Avoid the patterns that trip filters even when your claim is compliant." },
      { ul: [
        "Avoid layouts that read as before/after unless your account can run them",
        "Keep restricted molecule names and condition claims out of automated-flag zones",
        "Watch URLs and event names that read as health identifiers",
        "Lead with outcomes and mechanism, not diagnosis language",
      ] },
      { h2: "3. Protect your signal" },
      { p: "Since the 2025 healthcare reclassification, conversion events and identifiers are routinely stripped in health categories. Use the Conversions API, keep event parameters clean, and understand that credentialed infrastructure is what lets the same pixel actually inform optimization." },
      { h2: "4. Scale in steps the account can absorb" },
      { p: "Aggressive scaling on a low-trust account triggers delivery limits and re-learning. Increase budgets in measured steps, consolidate winning campaigns, and avoid resetting learning by editing live ad sets too often." },
      { h2: "5. Monitor account health continuously" },
      { p: "The signals that predict a downgrade live outside Ads Manager. Track feedback score, restriction history, and policy trend, and fix issues within a day rather than waiting for CPMs to move." },
    ],
    faq: [
      { q: "Is LegitScript certification enough to advertise health products on Meta?", a: "It is required to advertise regulated health products, but on its own it does not lower your CPMs or change your trust tier. Entity-level whitelisting and a high HiVA-tier are what change performance." },
      { q: "Why do compliant health ads still get rejected?", a: "Meta scores entire categories as default risks and relies heavily on automated pattern detection. Compliant ads still trip filters through visuals, copy, URLs, or event names that look health-related." },
      { q: "How do you lower CPMs on regulated health offers?", a: "Run on credentialed, high-trust accounts, keep signal clean, design creative around automated review, and scale in steps the account can absorb." },
    ],
  },
  {
    slug: "compounded-glp-1",
    title: "How to advertise compounded GLP-1 on Meta",
    category: "Compounded GLP-1",
    updated: "2026-06-01",
    readTime: "5 min read",
    excerpt:
      "Best practices for scaling semaglutide and tirzepatide weight-loss programs on Meta without throttling or bans.",
    body: [
      { p: "Compounded GLP-1 is the most scrutinized category on Meta right now. Demand is enormous, and so is enforcement. These practices keep weight-loss programs delivering." },
      { h2: "Run results-led creative the account can support" },
      { p: "Outcome and transformation angles convert, and they are exactly what cold accounts get blocked for. Run them on credentialed infrastructure with the headroom to clear review, and keep before/after within policy." },
      { h2: "Protect your acquisition cost" },
      { ul: [
        "Lower CPMs come from trust tier, not just bidding",
        "Avoid re-learning by not resetting winning ad sets",
        "Keep conversion signal clean so optimization stays accurate",
      ] },
      { h2: "Stay live through category crackdowns" },
      { p: "Weight loss is a recurring enforcement target. Accounts with real history and daily monitoring keep delivering when cold accounts go dark." },
    ],
    faq: [
      { q: "Can you run before-and-after weight-loss ads on Meta?", a: "Before/after is high-risk and blocked on most accounts. On credentialed, high-trust accounts you can run results-led creative within Meta's rules." },
      { q: "Why do GLP-1 ad accounts get banned so often?", a: "Meta treats compounded GLP-1 as a high-risk category and enforces aggressively. Cold accounts get banned before they ramp; aged, credentialed accounts hold up." },
    ],
  },
  {
    slug: "mens-sexual-health",
    title: "How to advertise ED & men’s sexual health on Meta",
    category: "ED & men’s health",
    updated: "2026-06-01",
    readTime: "5 min read",
    excerpt:
      "Best practices for advertising sildenafil, tadalafil, and men’s performance programs on Meta without constant rejections.",
    body: [
      { p: "Sexual-health language trips Meta’s filters before a human ever reads the ad. These practices get compliant ED offers reviewed and delivering." },
      { h2: "Write for automated review" },
      { p: "Keep problem-aware messaging clear but avoid the explicit terms that auto-flag. Run direct response on accounts with the headroom to clear review rather than the bare minimum." },
      { h2: "Defend a high-LTV product with low CAC" },
      { ul: [
        "Subscriptions reward cheaper acquisition, so protect CPMs with trust tier",
        "Keep funnels live to avoid re-learning and lost momentum",
        "Track feedback score, which drives the auction post-Andromeda",
      ] },
      { h2: "Survive enforcement sweeps" },
      { p: "When Meta sweeps the category, cold accounts vanish. Established trust and same-day flag resolution keep your funnels on." },
    ],
    faq: [
      { q: "Can you advertise ED medication on Facebook and Instagram?", a: "Yes, with LegitScript certification and compliant creative. The challenge is reflexive rejections, which credentialed accounts and policy escalation reduce." },
      { q: "Why do men’s health ads get rejected even when compliant?", a: "Automated detection flags sexual-health terms and patterns regardless of compliance. High-trust accounts get creative reviewed in context instead of auto-blocked." },
    ],
  },
  {
    slug: "hair-loss",
    title: "How to advertise medical hair loss treatment on Meta",
    category: "Medical hair loss",
    updated: "2026-06-01",
    readTime: "5 min read",
    excerpt:
      "Best practices for advertising finasteride and minoxidil regrowth programs on Meta, including before-and-after creative.",
    body: [
      { p: "Regrowth results sell, and before-and-after is exactly what cold accounts get blocked for. Here is how to run the proof that converts and stay approved." },
      { h2: "Run before-and-after within policy" },
      { p: "On credentialed accounts you can run the results-led proof that drives hair-loss sales. Keep claims grounded and avoid the layouts that auto-flag on standard accounts." },
      { h2: "Win a crowded auction on cost" },
      { ul: [
        "Hair loss is competitive, so CPMs decide who scales",
        "Trusted accounts reach the same men for less",
        "Keep prescription offers (finasteride, minoxidil) clearing review",
      ] },
      { h2: "Hold up as enforcement reaches hair loss" },
      { p: "Health enforcement reaches regrowth too. Real account history and daily monitoring keep you delivering when others get pulled." },
    ],
    faq: [
      { q: "Can you run before-and-after hair regrowth ads on Meta?", a: "Before/after is restricted, but credentialed high-trust accounts can run results-led regrowth creative within policy." },
      { q: "Are finasteride and minoxidil ads allowed on Meta?", a: "Yes, with proper certification. They still trip automated filters, so credentialing and escalation matter for consistent approval." },
    ],
  },
  {
    slug: "hormone-therapy",
    title: "How to advertise hormone therapy (TRT & HRT) on Meta",
    category: "Hormone therapy",
    updated: "2026-06-01",
    readTime: "5 min read",
    excerpt:
      "Best practices for advertising men’s and women’s hormone therapy on Meta in a category enforced hard and inconsistently.",
    body: [
      { p: "TRT and HRT sit in a gray zone Meta enforces aggressively and unpredictably. Stable footing is what lets you run education-led offers and scale." },
      { h2: "Lead with education and outcomes" },
      { p: "Hormone therapy sells on education and outcomes, both of which draw scrutiny on cold accounts. Run them within policy on infrastructure with headroom to test." },
      { h2: "Protect acquisition on a long-LTV patient" },
      { ul: [
        "Hormone patients are high-value and long-retained, so lower CAC compounds",
        "Keep delivery steady to avoid re-learning",
        "Watch backend signals that move before your CPMs do",
      ] },
      { h2: "Stay standing through enforcement" },
      { p: "When Meta tightens on hormones, cold accounts disappear. Years of clean spend keep you live." },
    ],
    faq: [
      { q: "Can you advertise TRT and HRT on Meta?", a: "Yes, with certification and compliant, education-led creative. Enforcement is inconsistent, so high-trust accounts provide the stability to keep running." },
    ],
  },
  {
    slug: "telehealth",
    title: "How to advertise telehealth & telemedicine on Meta",
    category: "Telehealth",
    updated: "2026-06-01",
    readTime: "5 min read",
    excerpt:
      "Best practices for scaling patient acquisition across multiple regulated telehealth services on Meta without account risk.",
    body: [
      { p: "Telehealth platforms advertise across multiple regulated treatments, and any one of them can take an account down. These practices protect the whole operation." },
      { h2: "Get approvals across every service line" },
      { p: "Each treatment has its own compliance landmines. Run on accounts that clear creative across service lines instead of getting blocked one by one." },
      { h2: "Scale acquisition without scaling risk" },
      { ul: [
        "Growth means more spend and more exposure on cold accounts",
        "Trusted accounts let you scale without the bans that cap telehealth",
        "One flagged treatment should not take down your entire funnel",
      ] },
      { h2: "Keep the platform live" },
      { p: "Daily monitoring and fast fixes keep acquisition running across every service, not just the one that got flagged." },
    ],
    faq: [
      { q: "Why do telehealth ad accounts get restricted so often?", a: "A telehealth platform advertises several regulated treatments at once, and any single one can flag the account. A high-trust base contains that risk." },
    ],
  },
  {
    slug: "online-pharmacy",
    title: "How to advertise an online pharmacy on Meta",
    category: "Online pharmacy",
    updated: "2026-06-01",
    readTime: "5 min read",
    excerpt:
      "Best practices for advertising a catalog of regulated products as an online or compounding pharmacy on Meta.",
    body: [
      { p: "An online pharmacy advertises a catalog of regulated products, and each one can flag the account. These practices keep the whole range advertising." },
      { h2: "Get regulated products approved" },
      { p: "Compliant pharmacy offers still get auto-rejected on cold accounts. Credentialed accounts get products reviewed and approved instead of blocked on sight." },
      { h2: "Scale the catalog on better economics" },
      { ul: [
        "Lower CPMs make more SKUs profitable to advertise",
        "Contain per-SKU risk so one product does not take down the account",
        "Keep signal clean across product lines",
      ] },
      { h2: "Stay live through pharmacy crackdowns" },
      { p: "Pharmacy is a perennial enforcement target. Real account history keeps you delivering when cold accounts get pulled." },
    ],
    faq: [
      { q: "Can online pharmacies advertise on Meta?", a: "Yes, with LegitScript certification and compliant creative. The difficulty is per-product rejection risk, which credentialed accounts and escalation reduce." },
    ],
  },
];

export function getGuide(slug) {
  return guides.find((g) => g.slug === slug);
}
