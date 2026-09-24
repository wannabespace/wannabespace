import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  description:
    "We like making cool products. Currently building Tamery and Lang.zone.",
  title: "Wannabe Space",
};

export const viewport: Viewport = {
  themeColor: [
    { color: "#f5f5f6", media: "(prefers-color-scheme: light)" },
    { color: "#1b1c1f", media: "(prefers-color-scheme: dark)" },
  ],
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={geist.variable}>
    <body className="bg-body text-foreground font-sans antialiased">
      {children}
    </body>
  </html>
);

export default RootLayout;
