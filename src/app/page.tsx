import { HeroSection } from "@/components/sections/hero-section";
import { AtmosphereSection } from "@/components/sections/atmosphere-section";
import { DishesPreviewSection } from "@/components/sections/dishes-preview";
import { LiveMusicPreviewSection } from "@/components/sections/live-music-preview";
import { CocktailsPreviewSection } from "@/components/sections/cocktails-preview";
import { AntiquesPreviewSection } from "@/components/sections/antiques-preview";
import { GalleryPreviewSection } from "@/components/sections/gallery-preview";
import { ReservationCTA } from "@/components/sections/reservation-cta";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Main Cinematic Content Area */}
      <div className="relative z-10 w-full bg-background text-foreground flex flex-col pt-12 pb-24 gap-32">
        
        <div className="relative w-full">
          <AtmosphereSection />
        </div>

        {/* Warm Cinematic Glow Section for Dishes */}
        <div className="relative w-full cinematic-glow">
          <DishesPreviewSection />
        </div>

        <div className="relative w-full">
          <LiveMusicPreviewSection />
        </div>

        <div className="relative w-full dark-matte">
          <CocktailsPreviewSection />
        </div>

        <div className="relative w-full">
          <AntiquesPreviewSection />
        </div>

        <div className="relative w-full">
          <GalleryPreviewSection />
        </div>

        <div className="relative w-full bg-charcoal/30">
          <ReservationCTA />
        </div>

      </div>
    </>
  );
}
