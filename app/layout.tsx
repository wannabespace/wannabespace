import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = "https://wannabespace.com";
const description =
  "Wannabe Space is a small software studio building the products we want to use ourselves: Tamery, an AI database client, and Lang.zone, a natural translator.";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description,
  metadataBase: new URL(siteUrl),
  openGraph: {
    description,
    locale: "en_US",
    siteName: "Wannabe Space",
    title: "Wannabe Space",
    type: "website",
    url: "/",
  },
  robots: { follow: true, index: true },
  title: {
    default: "Wannabe Space — We like making cool products.",
    template: "%s — Wannabe Space",
  },
  twitter: { card: "summary_large_image" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  description,
  logo: `${siteUrl}/icon.svg`,
  name: "Wannabe Space",
  url: siteUrl,
};

export const viewport: Viewport = {
  themeColor: [
    { color: "#f5f5f6", media: "(prefers-color-scheme: light)" },
    { color: "#1b1c1f", media: "(prefers-color-scheme: dark)" },
  ],
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={inter.variable}>
    <body className="bg-body text-foreground font-sans antialiased">
      <script
        type="application/ld+json"
        // oxlint-disable-next-line react/no-danger -- static, trusted JSON-LD
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replaceAll("<", "\\u003c"),
        }}
      />
      {children}
    </body>
  </html>
);

export default RootLayout;
