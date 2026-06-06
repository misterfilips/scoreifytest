// Single source of truth for the verticals Scoreify serves.
// Used by the landing "Built for" section, the navbar "Who We Serve"
// dropdown, and the dynamic /who-we-serve/[slug] pages.
//
// Per vertical:
//   sections  -> the numbered 01-04 image+text blocks, each led by the
//                benefit Scoreify brings that specific industry
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
        title: "Run the weight-loss creative that actually converts",
        body: "We put you on accounts with the headroom to run results-led semaglutide and tirzepatide creative within Meta's rules. The angles that drive GLP-1 sales get approved instead of blocked.",
        points: ["Outcome-led creative that clears review", "Before-and-after within policy", "Direct response without throttling"],
      },
      {
        title: "Lower your cost per acquisition",
        body: "Trusted accounts reach high-intent weight-loss audiences at lower CPMs, and your campaigns never reset learning from a ban. Your acquisition cost drops and stays predictable.",
        points: ["Lower CPMs on high-intent audiences", "No relearning after a shutdown", "Predictable CAC at scale"],
      },
      {
        title: "Scale spend on what's working",
        body: "You get the account headroom to pour budget into winning GLP-1 campaigns without tripping limits or triggering reviews. Growth stops being capped by your account.",
        points: ["Push budget on winners", "No spend ceilings", "Scale without new-account risk"],
      },
      {
        title: "Stay in market when the category gets squeezed",
        body: "Years of clean spend in weight loss keep you delivering when Meta tightens and competitors on cold accounts go dark. You keep selling while the category resets around you.",
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
        title: "Get your ED creative approved, not auto-blocked",
        body: "We run you on accounts that get sexual-health creative reviewed instead of rejected on reflex. Your compliant sildenafil and tadalafil offers actually make it live.",
        points: ["Approvals for ED creative", "Fewer reflex rejections", "Problem-aware angles that clear review"],
      },
      {
        title: "Lower CAC on a high-LTV product",
        body: "Trusted accounts reach men's-health buyers at lower CPMs and keep your funnels delivering without interruption. On a subscription product, the gap between LTV and CAC widens fast.",
        points: ["Lower CPMs on men's-health audiences", "Uninterrupted funnel delivery", "Healthier LTV to CAC"],
      },
      {
        title: "Run direct response with room to scale",
        body: "You get the headroom to run clear, performance-driven messaging and push spend behind it. The creative that converts runs at the budget you want.",
        points: ["Performance creative without throttling", "Headroom cold accounts don't have", "Scale spend on winners"],
      },
      {
        title: "Keep funnels live through enforcement waves",
        body: "When Meta sweeps the category, our accounts keep delivering while competitors disappear. Established trust means your funnels stay on.",
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
        title: "Run the before-and-after proof that converts",
        body: "We put you on accounts that approve regrowth before-and-after creative within Meta's rules. The proof that sells hair-loss treatment gets to run.",
        points: ["Before-and-after within policy", "Results-led creative that clears review", "Proof without the bans"],
      },
      {
        title: "Advertise prescription regrowth without rejection",
        body: "Finasteride and minoxidil offers clear review on our accounts instead of getting auto-rejected. Your prescription programs stay live and selling.",
        points: ["Prescription offers that run", "Fewer reflexive rejections", "Approvals others can't get"],
      },
      {
        title: "Win a crowded category on cost",
        body: "Trusted accounts reach the same men at lower CPMs, so your budget outworks competitors stuck on cold accounts. You scale while they stall.",
        points: ["Lower CPMs in a crowded auction", "Budget that stretches further", "Outperform low-trust competitors"],
      },
      {
        title: "Stay live as the category tightens",
        body: "Real account history keeps you delivering when health enforcement reaches hair loss. You keep running while others get pulled.",
        points: ["Survive crackdowns", "Daily monitoring and fast fixes", "Consistent delivery"],
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
        title: "Run education and outcome creative that performs",
        body: "You get the headroom to run the education-led and outcome-driven angles hormone therapy sells on, within policy. The creative that works gets approved.",
        points: ["Outcome and education angles within policy", "Performance without throttling", "Headroom to test"],
      },
      {
        title: "Lower acquisition cost on a long-LTV patient",
        body: "Trusted accounts reach the right patients at lower CPMs and keep delivery steady. With long-retained patients, lower CAC compounds into real margin.",
        points: ["Lower CPMs on the right patients", "Uninterrupted delivery", "Stronger acquisition economics"],
      },
      {
        title: "Scale spend with stable footing",
        body: "We put you on accounts that hold in a category Meta enforces unpredictably, so you can grow spend without whiplash. Stability is what lets you scale.",
        points: ["Grow spend without limits", "Stability in a gray-zone category", "Fewer inconsistent rejections"],
      },
      {
        title: "Stay standing through enforcement",
        body: "Years of clean spend keep you live when Meta tightens on hormones. You keep acquiring while cold accounts disappear.",
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
        title: "Get approvals across every service line",
        body: "We run you on accounts that clear creative for each regulated treatment you offer. Your whole menu of services gets to advertise instead of getting blocked one by one.",
        points: ["Approvals across treatments", "Fewer service-by-service rejections", "Headroom to launch new lines"],
      },
      {
        title: "Scale patient acquisition without scaling risk",
        body: "Trusted accounts let you grow spend across services without the bans that cap telehealth advertisers. You scale acquisition on a base built to stay live.",
        points: ["Scale spend safely", "No relearning after a shutdown", "Accounts built to stay live"],
      },
      {
        title: "Lower CPMs across your services",
        body: "We reach patients for less across every service line, so the savings go back into growth. Better economics across the board, not just one funnel.",
        points: ["Lower CPMs across services", "Budget that stretches", "Stronger unit economics"],
      },
      {
        title: "Keep the whole platform live",
        body: "One flagged treatment won't take down your operation. Daily monitoring and fast fixes keep acquisition running across every service.",
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
        title: "Get regulated products approved",
        body: "We run you on accounts that get pharmacy creative reviewed and approved instead of blocked on sight. More of your catalog gets to advertise.",
        points: ["Approvals for regulated products", "Fewer reflexive rejections", "Headroom to advertise more lines"],
      },
      {
        title: "Scale the catalog on better economics",
        body: "Lower CPMs make more of your SKUs profitable to advertise, so you can scale across the catalog. Tight margins stretch further on trusted accounts.",
        points: ["Lower CPMs across products", "More SKUs worth advertising", "Budget that stretches"],
      },
      {
        title: "Grow spend on a base that holds",
        body: "You get the account headroom to scale across product lines without any single SKU taking you down. Growth without the per-SKU risk.",
        points: ["Scale across product lines", "Per-SKU risk contained", "No spend ceilings"],
      },
      {
        title: "Stay live through pharmacy crackdowns",
        body: "Real account history keeps you delivering when Meta targets pharmacy. You keep selling while cold accounts get pulled.",
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
