import { HeroSection } from "@/components/sections/hero-section";
import { BrandStorySection } from "@/components/sections/brand-story-section";
import { SpecialsCarousel } from "@/components/sections/specials-carousel";
import { ThreeBannersSection } from "@/components/sections/three-banners-section";
import { SocialProofSection } from "@/components/sections/social-proof-section";
import { ReservationCTA } from "@/components/sections/reservation-cta";

/* Thin amber rule — marks transitions between sections with different backgrounds */
function SectionDivider({ light = false }: { light?: boolean }) {
  return (
    <div className={`w-full h-px ${light ? "bg-cream/10" : "bg-charcoal/10"}`} aria-hidden />
  );
}

export default function Home() {
  return (
    <main>
      {/* Hero — scroll-driven cinematic opener */}
      <HeroSection />

      {/* Brand Story — cream bg, generous vertical padding */}
      <SectionDivider />
      <BrandStorySection />

      {/* Today's Specials — charcoal bg contrast break */}
      <SectionDivider light />
      <SpecialsCarousel />

      {/* Three Banners — full-bleed navigation */}
      <SectionDivider light />
      <ThreeBannersSection />

      {/* Social Proof — charcoal bg */}
      <SectionDivider light />
      <SocialProofSection />

      {/* Reservation CTA — cinematic finale */}
      <SectionDivider light />
      <ReservationCTA />
    </main>
  );
}
