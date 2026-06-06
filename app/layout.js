import "./globals.css";

export const metadata = {
  title: "Scoreify | Trusted Meta ad accounts for regulated health brands",
  description:
    "Scoreify provides health and wellness brands with Meta ad accounts that carry years of clean history and real trust. Your ads cost less, get approved, and stay live. Built for LegitScript-certified GLP-1, men's health, pharmacy, and supplement advertisers.",
  metadataBase: new URL("https://scoreify.io"),
  openGraph: {
    title: "Scoreify | Run regulated health offers on Meta without the bans",
    description:
      "Run your ads on accounts Meta already trusts. Lower CPMs, more approvals, no surprise shutdowns.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
