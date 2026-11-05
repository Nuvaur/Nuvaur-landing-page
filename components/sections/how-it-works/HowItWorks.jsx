"use client";

import { howItWorksData } from "@/data/howItWorksData";
import HowItWorksHeader from "./HowItWorksHeader";
import HowItWorksGrid from "./HowItWorksGrid";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="py-20 md:py-28 bg-obsidian-light/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HowItWorksHeader
          eyebrow={howItWorksData.eyebrow}
          headline={howItWorksData.headline}
          description={howItWorksData.description}
        />
        <HowItWorksGrid steps={howItWorksData.steps} />
      </div>
    </section>
  );
};

export default HowItWorks;
