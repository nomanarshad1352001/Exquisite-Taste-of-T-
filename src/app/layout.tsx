import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import FloatingOrder from "@/components/FloatingOrder";

export const metadata: Metadata = {
  title: {
    default: "Exquisite Taste of T — Chef-Owned Catering & Preorder Meals | Philadelphia & Delaware County",
    template: "%s | Exquisite Taste of T",
  },
  description:
    "Exquisite Taste of T is a chef-owned, preorder-only meal and catering company serving Philadelphia & Delaware County, PA. Chef-crafted weekly meals for pickup & delivery, plus full-service catering and private events.",
  keywords: [
    "catering Philadelphia",
    "Delaware County catering",
    "preorder meals",
    "private chef PA",
    "chef-owned catering",
    "weekly meal prep",
  ],
  openGraph: {
    title: "Exquisite Taste of T — Chef-Owned Catering & Preorder Meals",
    description:
      "Chef-crafted, preorder-only meals and full-service catering across Philadelphia & Delaware County, PA.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#161311",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Exquisite Taste of T",
  description:
    "Chef-owned, preorder-only meal service and luxury catering serving Philadelphia & Delaware County, PA. Chef-prepared meals for Saturday pickup & delivery, private chef dinners, weddings and events.",
  telephone: "+1-610-555-0179",
  email: "hello@exquisitetasteoft.com",
  servesCuisine: ["Southern", "Soul Food", "American", "Fine Dining"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Drexel Hill",
    addressRegion: "PA",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Philadelphia" },
    { "@type": "AdministrativeArea", name: "Delaware County, Pennsylvania" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "11:00",
      closes: "16:00",
    },
  ],
  sameAs: ["https://instagram.com", "https://facebook.com"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-charcoal font-sans text-ivory antialiased selection:bg-gold selection:text-charcoal">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>
          <div className="grain" aria-hidden="true" />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingOrder />
        </SmoothScroll>
      </body>
    </html>
  );
}
