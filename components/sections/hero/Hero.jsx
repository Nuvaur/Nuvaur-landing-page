"use client";

import { heroData } from "@/data/heroData";
import HeroContent from "./HeroContent";
import HeroMockup from "./HeroMockup";

const Hero = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-obsidian">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <HeroContent data={heroData} />
          <HeroMockup mockup={heroData.mockup} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
