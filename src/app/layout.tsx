import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import { SiteHeader, SiteFooter } from "@/components/layout/Navbar";
import "@/app/globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MR TRADERS | Premium Paint Dealers in Ramanathapuram",
    template: "%s | MR TRADERS Ramanathapuram"
  },
  description: "Ramanathapuram's largest authorized dealer for premium paints, waterproofing, and construction chemicals. Over 30 years of trust. Serving Ramnad and Kilakarai.",
  keywords: ["Paint shop Ramanathapuram", "Waterproofing Ramnad", "Asian Paints Dealer near me", "Construction Chemicals Kilakarai", "MR Traders"],
  icons: {
    icon: "/assets/images/MR LOGO.jpg.jpeg",
    shortcut: "/assets/images/MR LOGO.jpg.jpeg",
    apple: "/assets/images/MR LOGO.jpg.jpeg",
  },
  openGraph: {
    title: "MR TRADERS | Custom Architectural Finishes",
    description: "100% Genuine architectural materials at wholesale prices in Ramanathapuram.",
    url: "https://mrtradersramnad.com",
    siteName: "MR TRADERS",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://mrtradersramnad.com",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Ramanathapuram",
    "geo.position": "9.360653;78.83712",
    "ICBM": "9.360653, 78.83712"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSerif.variable} ${manrope.variable} antialiased selection:bg-maroon selection:text-white`}>
        <SiteHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
