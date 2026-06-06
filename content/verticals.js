// Single source of truth for the verticals Scoreify serves.
// Used by the landing "Built for" section, the navbar "Who We Serve"
// dropdown, and the dynamic /who-we-serve/[slug] pages.

export const verticals = [
  {
    slug: "compounded-glp-1",
    name: "Compounded GLP-1",
    blurb:
      "Semaglutide and tirzepatide weight-loss programs that scale on Meta without throttling or sudden bans.",
    heroTitle: "Trusted Meta accounts for compounded GLP-1 brands",
    heroSubtitle:
      "Run your semaglutide and tirzepatide weight-loss programs on accounts Meta already trusts. Lower costs, more approvals, and accounts that stay live.",
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
