import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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

export const metadata: Metadata = {
  title: "Karmanya Kreatives — Premium Event Decor",
  description:
    "Luxury event decor management for weddings, birthdays, anniversaries and all celebrations. We transform spaces into unforgettable experiences.",
  keywords: ["event decor", "wedding decor", "luxury events", "birthday decor", "anniversary decor", "Karmanya Kreatives"],
  openGraph: {
    title: "Karmanya Kreatives — Premium Event Decor",
    description: "Luxury event decor for unforgettable celebrations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body className="grain bg-[#080808] text-[#faf7f0] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
