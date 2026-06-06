// Single source of truth for the verticals Scoreify serves.
// Used by the landing "Built for" section, the navbar "Who We Serve"
// dropdown, and the dynamic /who-we-serve/[slug] pages.
//
// Per vertical:
//   sections  -> the numbered 01-04 image+text blocks, written to the
//                specific realities of that industry
//   features  -> the "What you get" grid (Scoreify's deliverables)

export const verticals = [
  {
    slug: "compounded-glp-1",
    name: "Compounded GLP-1",
    blurb:
      "Semaglutide and tirzepatide weight-loss programs that scale on Meta without throttling or sudden bans.",
    heroTitle: "Trusted Meta accounts for compounded GLP-1 brands",
    heroSubtitle:
      "Run your semaglutide and tirzepatide weight-loss programs on accounts Meta already trusts. Lower costs, more approvals, and accounts that stay live.",
    sections: [
      {
        title: "The most scrutinized category on Meta right now",
        body: "GLP-1 demand exploded and Meta's enforcement followed. Compounded semaglutide and tirzepatide draw extra scrutiny, and most advertisers lose accounts faster than they can warm new ones.",
        points: ["Compounded formulations flagged by default", "New accounts banned before they ramp", "Trusted history keeps you in market"],
      },
      {
        title: "Run the weight-loss creative that converts",
        body: "The angles that sell GLP-1 are the same ones cold accounts get blocked for. Trusted accounts give you the headroom to run results-led creative within Meta's rules.",
        points: ["Outcome-led creative that clears review", "Before-and-after within policy", "Direct response without throttling"],
      },
      {
        title: "Protect your cost per acquisition at scale",
        body: "GLP-1 acquisition costs climb fast when CPMs are high and learning resets every time an account dies. Trusted accounts lower CPMs and keep campaigns out of permanent relaunch.",
        points: ["Lower CPMs on high-intent audiences", "No relearning after a ban", "Predictable acquisition cost"],
      },
      {
        title: "Stay in market when the category gets squeezed",
        body: "Every time Meta tightens on weight loss, brands on cold accounts go dark. Years of clean spend in this exact category keep you running when competitors disappear.",
        points: ["Survive category crackdowns", "Daily monitoring and fast fixes", "Consistent delivery month over month"],
      },
    ],
    features: [
      { title: "Lower CPMs on weight-loss offers", body: "Reach high-intent weight-loss audiences for less on accounts Meta already trusts." },
      { title: "Approvals for compounded formulations", body: "Compounded semaglutide and tirzepatide creative clears review instead of getting rejected." },
      { title: "Full pixel and event tracking", body: "Clean signal on every lead and purchase, so optimization works as it should." },
      { title: "Headroom to scale spend", body: "Push budget hard on winning campaigns without tripping account limits." },
      { title: "Same-day flag resolution", body: "When a flag lands, we clear it fast so your delivery never stalls." },
      { title: "Long-term stability", body: "Accounts with real history hold up when Meta cracks down on weight loss." },
    ],
  },
  {
    slug: "mens-sexual-health",
    name: "ED & men's sexual health",
    blurb:
      "Sildenafil, tadalafil, and performance programs advertised without the constant rejections.",
    heroTitle: "Trusted Meta accounts for ED & men's sexual health",
    heroSubtitle:
      "Advertise sildenafil, tadalafil, and men's performance programs on accounts built to clear review and keep delivering.",
    sections: [
      {
        title: "An industry Meta blocks on reflex",
        body: "Sexual-health language trips Meta's filters before a human ever sees the ad. Most ED brands burn through accounts getting rejected for compliant offers.",
        points: ["Fewer reflex rejections", "Compliant offers actually reviewed", "Accounts that survive the category"],
      },
      {
        title: "Run direct response that names the problem",
        body: "ED converts on directness, but cold accounts punish the exact language that performs. Trusted accounts have the headroom to run clear, problem-aware messaging within policy.",
        points: ["Problem-aware angles that clear review", "Performance creative without throttling", "Headroom cold accounts don't have"],
      },
      {
        title: "Lower CAC on a high-LTV product",
        body: "Subscriptions make men's health lucrative, but only if acquisition stays cheap. Trusted accounts lower CPMs and keep funnels delivering so LTV outruns CAC.",
        points: ["Lower CPMs on men's-health audiences", "Uninterrupted funnel delivery", "Healthier LTV to CAC"],
      },
      {
        title: "Keep funnels live through enforcement waves",
        body: "When Meta sweeps the category, ED advertisers on cold accounts vanish overnight. Established trust keeps your delivery steady while competitors scramble.",
        points: ["Stay live through sweeps", "Same-day flag resolution", "Steady, predictable delivery"],
      },
    ],
    features: [
      { title: "Approvals for ED creative", body: "Sildenafil and tadalafil offers clear review instead of getting blocked." },
      { title: "Lower CPMs", body: "Reach men's-health buyers for less and stretch every dollar further." },
      { title: "Room for direct messaging", body: "Run direct performance messaging within Meta's rules on accounts with headroom." },
      { title: "Full pixel functionality", body: "Complete event tracking for clean optimization and reporting." },
      { title: "Same-day flag resolution", body: "Flags handled fast so your funnels keep running." },
      { title: "Long-term stability", body: "Stay live when Meta tightens up on sexual-health advertising." },
    ],
  },
  {
    slug: "hair-loss",
    name: "Medical hair loss",
    blurb:
      "Finasteride and minoxidil regrowth offers that run bolder creative and stay approved.",
    heroTitle: "Trusted Meta accounts for medical hair loss treatment",
    heroSubtitle:
      "Advertise finasteride and minoxidil regrowth programs on accounts that approve the creative others get blocked for.",
    sections: [
      {
        title: "Before-and-after is your best creative and your biggest risk",
        body: "Regrowth results sell, but before-and-after is exactly what cold accounts get blocked for. Trusted accounts let you run the proof that converts within Meta's rules.",
        points: ["Before-and-after within policy", "Results-led creative that clears review", "Proof without the bans"],
      },
      {
        title: "Advertise prescription regrowth without rejection",
        body: "Finasteride and minoxidil are compliant products that still trip Meta's filters. Trusted accounts get your prescription offers reviewed and approved instead of auto-rejected.",
        points: ["Prescription offers that run", "Fewer reflexive rejections", "Approvals others can't get"],
      },
      {
        title: "Win a crowded category on cost",
        body: "Hair loss is competitive and CPMs decide who scales. Trusted accounts reach the same men for less, so your budget outworks brands stuck on cold accounts.",
        points: ["Lower CPMs in a crowded auction", "Budget that stretches further", "Outperform low-trust competitors"],
      },
      {
        title: "Stay live as the category tightens",
        body: "Health enforcement reaches hair loss too. Real account history keeps you delivering when others get pulled.",
        points: ["Survive crackdowns", "Daily monitoring", "Consistent delivery"],
      },
    ],
    features: [
      { title: "Approvals for before-and-after", body: "Run regrowth before-and-after creative that gets blocked on cold accounts." },
      { title: "Lower CPMs", body: "Reach hair-loss audiences for less on trusted accounts." },
      { title: "Prescription offers that run", body: "Advertise finasteride and minoxidil programs without constant rejections." },
      { title: "Full pixel functionality", body: "Clean signal and complete event tracking across your funnel." },
      { title: "Same-day flag resolution", body: "We clear flags fast so delivery stays steady." },
      { title: "Long-term stability", body: "Accounts with real history hold up through category crackdowns." },
    ],
  },
  {
    slug: "hormone-therapy",
    name: "Hormone therapy",
    blurb:
      "Men's and women's TRT and HRT programs advertised on accounts that survive category crackdowns.",
    heroTitle: "Trusted Meta accounts for hormone therapy brands",
    heroSubtitle:
      "Advertise men's and women's hormone therapy on accounts Meta trusts, with the headroom to scale and the stability to stay live.",
    sections: [
      {
        title: "A category Meta enforces hard and inconsistently",
        body: "TRT and HRT sit in a gray zone Meta polices aggressively and unpredictably. Trusted accounts give you stable footing where everyone else gets whiplashed.",
        points: ["Stability in a gray-zone category", "Fewer inconsistent rejections", "Accounts that hold"],
      },
      {
        title: "Run education-led creative that still performs",
        body: "Hormone therapy sells on education and outcomes, and both draw scrutiny on cold accounts. Trusted accounts give you the room to run them within policy.",
        points: ["Outcome and education angles within policy", "Performance without throttling", "Headroom to test"],
      },
      {
        title: "Protect acquisition on a long-LTV patient",
        body: "Hormone patients are high-value and long-retained, so acquisition economics matter. Trusted accounts lower CPMs and keep delivery steady so each patient pays off.",
        points: ["Lower CPMs on the right patients", "Uninterrupted delivery", "Stronger acquisition economics"],
      },
      {
        title: "Stay standing through enforcement",
        body: "When Meta tightens on hormones, cold accounts disappear. Years of clean spend keep you live.",
        points: ["Survive category crackdowns", "Same-day flag resolution", "Predictable delivery"],
      },
    ],
    features: [
      { title: "Approvals for TRT and HRT", body: "Hormone-therapy creative clears review instead of getting flagged." },
      { title: "Lower CPMs", body: "Reach the right patients for less and stretch your budget." },
      { title: "Headroom to scale spend", body: "Grow spend on winning campaigns without hitting account limits." },
      { title: "Full pixel functionality", body: "Complete event tracking for accurate optimization and reporting." },
      { title: "Same-day flag resolution", body: "Flags resolved fast so your delivery holds." },
      { title: "Long-term stability", body: "Stay standing when Meta cracks down on hormone advertising." },
    ],
  },
  {
    slug: "telehealth",
    name: "Telehealth & telemedicine",
    blurb:
      "Telehealth platforms that scale patient acquisition on Meta without account risk.",
    heroTitle: "Trusted Meta accounts for telehealth & telemedicine",
    heroSubtitle:
      "Scale patient acquisition across your services on accounts Meta already trusts, without the rejections and bans that throttle telehealth advertisers.",
    sections: [
      {
        title: "Many regulated services, one fragile ad account",
        body: "Telehealth platforms advertise across multiple regulated treatments, and any one of them can take an account down. Trusted accounts give your whole operation a stable base.",
        points: ["One stable base for every service", "Multi-treatment risk contained", "Accounts built to stay live"],
      },
      {
        title: "Approvals across every service line",
        body: "Each treatment you offer has its own compliance landmines. Trusted accounts get creative across your service lines through review instead of blocked.",
        points: ["Approvals across treatments", "Fewer service-by-service rejections", "Headroom to launch new lines"],
      },
      {
        title: "Scale acquisition without scaling risk",
        body: "Growth means more spend and more exposure on cold accounts. Trusted accounts let you scale patient acquisition without the bans that cap telehealth advertisers.",
        points: ["Scale spend safely", "Lower CPMs across services", "No relearning after a shutdown"],
      },
      {
        title: "Keep the whole platform live",
        body: "One flagged treatment shouldn't take down your entire funnel. Daily monitoring and fast fixes keep acquisition running across the board.",
        points: ["Protect the whole operation", "Same-day flag resolution", "Consistent delivery"],
      },
    ],
    features: [
      { title: "Scale acquisition without risk", body: "Grow patient volume on accounts built to stay live." },
      { title: "Lower CPMs across services", body: "Reach patients for less and put the savings back into growth." },
      { title: "Approvals for regulated treatments", body: "Get creative for regulated services through review." },
      { title: "Full pixel functionality", body: "Clean signal across every service line and funnel." },
      { title: "Same-day flag resolution", body: "We handle flags fast so acquisition never pauses." },
      { title: "Long-term stability", body: "Accounts with real history weather category crackdowns." },
    ],
  },
  {
    slug: "online-pharmacy",
    name: "Online pharmacy",
    blurb:
      "Online and compounding pharmacies advertising regulated products at scale.",
    heroTitle: "Trusted Meta accounts for online pharmacies",
    heroSubtitle:
      "Advertise regulated products across your catalog on accounts Meta trusts, with the approvals and stability online pharmacies rarely get.",
    sections: [
      {
        title: "Every SKU is a compliance risk",
        body: "An online pharmacy advertises a catalog of regulated products, and each one can flag the account. Trusted accounts give you a base that holds across the whole range.",
        points: ["A base that holds across the catalog", "Per-SKU risk contained", "Accounts built to stay live"],
      },
      {
        title: "Get regulated products approved",
        body: "Compliant pharmacy offers still get auto-rejected on cold accounts. Trusted accounts get your products reviewed and approved instead of blocked on sight.",
        points: ["Approvals for regulated products", "Fewer reflexive rejections", "Headroom to advertise more lines"],
      },
      {
        title: "Scale the catalog on better economics",
        body: "Margins are tight and CPMs decide what's profitable to advertise. Trusted accounts lower costs so more of your catalog is worth scaling.",
        points: ["Lower CPMs across products", "More SKUs worth advertising", "Budget that stretches"],
      },
      {
        title: "Stay live through pharmacy crackdowns",
        body: "Pharmacy is a perennial enforcement target. Real account history keeps you delivering when cold accounts get pulled.",
        points: ["Survive crackdowns", "Daily monitoring and fast fixes", "Predictable delivery"],
      },
    ],
    features: [
      { title: "Approvals for regulated products", body: "Get pharmacy creative through review instead of rejected." },
      { title: "Lower CPMs", body: "Reach buyers for less across your catalog." },
      { title: "Headroom to scale", body: "Grow spend across product lines without tripping limits." },
      { title: "Full pixel functionality", body: "Complete event tracking for clean optimization and reporting." },
      { title: "Same-day flag resolution", body: "Flags cleared fast so delivery stays consistent." },
      { title: "Long-term stability", body: "Accounts with real history stay up through crackdowns." },
    ],
  },
];

export function getVertical(slug) {
  return verticals.find((v) => v.slug === slug);
}
