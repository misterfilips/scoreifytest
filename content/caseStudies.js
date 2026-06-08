// Case studies. `metrics` drives the carousel + page result cards.
// `body` is optional (article-style blocks: { h2 }, { p }, { ul }); when
// empty, the case study page renders a "coming soon" scaffold so detailed
// write-ups can be dropped in later without touching layout.

export const caseStudies = [
  {
    slug: "freya-meds",
    brand: "Freya Meds",
    logo: "/partners/logo-8.png",
    vertical: "Compounded GLP-1",
    headline: "Freya Meds scaled to 450,000 patients in Meta’s hardest category",
    summary:
      "How a compounded GLP-1 brand scaled patient acquisition in Meta’s most-restricted category.",
    metrics: [
      { value: "$68", label: "CPA reduction" },
      { value: "43%", label: "CPM reduction" },
      { value: "100%", label: "Ad approvals" },
    ],
    quote: null,
    body: null,
  },
  {
    slug: "we-relieve",
    brand: "We Relieve",
    logo: "/partners/logo-10.png",
    vertical: "Pain relief",
    headline: "We Relieve scaled $10k to $300k monthly revenue on Meta ads",
    summary:
      "How a pain-relief brand grew monthly revenue 30x on Meta while lifting ROAS.",
    metrics: [
      { value: "2×", label: "ROAS lift" },
      { value: "30%", label: "Profit margins" },
      { value: "$300k", label: "Monthly revenue" },
    ],
    quote: {
      text: "As long as I’m running ads, I will continue working with Scoreify because they increased my ROAS from 2X to 3X, which is a HUGE leap.",
      author: "Rohan Chainani",
      role: "Founder & CEO",
    },
    body: null,
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find((c) => c.slug === slug);
}
