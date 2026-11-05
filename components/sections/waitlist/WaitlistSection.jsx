"use client";

import { ShieldCheck } from "lucide-react";
import { waitlistData } from "@/data/faqData";
import WaitlistForm from "./WaitlistForm";

const WaitlistSection = () => {
  return (
    <section
      id="waitlist"
      className="py-20 md:py-28 bg-obsidian-light/40 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-highlight text-xs font-medium tracking-wide">
          <span>{waitlistData.eyebrow}</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
          {waitlistData.headline}
        </h2>

        <p className="text-stone text-base sm:text-lg max-w-xl mx-auto font-sans">
          {waitlistData.description}
        </p>

        <div className="pt-4">
          <WaitlistForm buttonText={waitlistData.buttonText} />
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-stone/80 pt-2">
          <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
          <span>{waitlistData.trustNote}</span>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
