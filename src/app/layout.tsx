import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";

import { site } from "@/lib/data/site";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { BackToTop } from "@/components/layout/back-to-top";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";

import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://laprovince-azazga.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "La Province",
    template: "%s · La Province",
  },
  description: site.metaDescription,
  keywords: [
    "La Province",
    "restaurant Azazga",
    "restaurant Tizi Ouzou",
    "restaurant gastronomique Tizi Ouzou",
    "cuisine gastronomique Azazga",
    "restaurant familial Azazga",
  ],
  openGraph: {
    title: "La Province",
    description: site.metaDescription,
    url: siteUrl,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Province",
    description: site.metaDescription,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.legalName,
    image: `${siteUrl}/og-image.jpg`,
    servesCuisine: site.cuisine,
    priceRange: "€€",
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: "DZ",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "23:59",
    },
    sameAs: [site.social.facebook, site.social.tiktok, site.social.tripadvisor],
  };

  return (
    <html
      lang="fr"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-navy text-ivory font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-gold focus:px-4 focus:py-2 focus:text-navy focus:font-medium"
        >
          Aller au contenu
        </a>
        <ScrollProgress />
        {children}
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
