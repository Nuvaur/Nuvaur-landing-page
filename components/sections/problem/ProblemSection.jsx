"use client";

import { problemData } from "@/data/problemData";
import ProblemHeader from "./ProblemHeader";
import ProblemGrid from "./ProblemGrid";

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProblemHeader
          headline={problemData.headline}
          description={problemData.description}
        />
        <ProblemGrid cards={problemData.cards} />
      </div>
    </section>
  );
};

export default ProblemSection;
