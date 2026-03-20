import type { Metadata } from "next";
import { Inter, Spectral, Besley, Bebas_Neue, Outfit, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { CustomCursor } from "@/components/ui/custom-cursor";
import CookieConsent from "@/components/ui/cookies-banner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const besley = Besley({
  variable: "--font-besley",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Pata Pata | African Cuisine & Vintage Atmosphere - Johannesburg",
  description:
    "Experience rustic-chic African dining, live music, craft cocktails and vintage atmosphere at Pata Pata, Johannesburg. Mozambique prawns, oxtail & grilled specialties.",
  keywords: "Pata Pata, African cuisine, Johannesburg restaurant, live music, vintage dining, Mozambique prawns, oxtail",
  openGraph: {
    title: "Pata Pata | African Cuisine & Vintage Atmosphere",
    description: "Rustic-chic African dining, live music & craft cocktails in Johannesburg.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spectral.variable} ${besley.variable} ${bebas.variable} ${outfit.variable} ${nunito.variable} antialiased`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <CookieConsent privacyHref="/" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
