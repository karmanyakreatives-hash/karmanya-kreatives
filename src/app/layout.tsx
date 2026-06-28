import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import PageTransition from "@/components/ui/PageTransition";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://karmanyakreatives.com"),
  title: "Karmanya Kreatives — Premium Event Decor",
  description:
    "Luxury event decor management for weddings, birthdays, anniversaries and all celebrations. We transform spaces into unforgettable experiences.",
  keywords: ["event decor", "wedding decor", "luxury events", "birthday decor", "anniversary decor", "Karmanya Kreatives", "Bay Area event decor", "San Francisco event decor"],
  openGraph: {
    title: "Karmanya Kreatives — Premium Event Decor",
    description: "Luxury event decor for unforgettable celebrations in the Bay Area.",
    type: "website",
    url: "https://karmanyakreatives.com",
    images: [
      {
        url: "/Logo_upscayl.png",
        width: 800,
        height: 800,
        alt: "Karmanya Kreatives — Premium Event Decor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karmanya Kreatives — Premium Event Decor",
    description: "Luxury event decor for unforgettable celebrations in the Bay Area.",
    images: ["/Logo_upscayl.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Karmanya Kreatives",
    description: "Luxury event decor management for weddings, birthdays, anniversaries and all celebrations.",
    url: "https://karmanyakreatives.com",
    logo: "https://karmanyakreatives.com/Logo_upscayl.png",
    image: "https://karmanyakreatives.com/Logo_upscayl.png",
    telephone: ["+14254690660", "+15714214321"],
    email: "karmanyakreatives@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: "San Francisco Bay Area, CA",
    sameAs: ["https://www.instagram.com/karmanya_kreatives"],
    priceRange: "$$$",
    foundingDate: "2020",
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain bg-[#080808] text-[#faf7f0] antialiased">
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppButton />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
