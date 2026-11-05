"use client";

import HowItWorksCard from "./HowItWorksCard";

const HowItWorksGrid = ({ steps }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {steps.map((step) => (
        <HowItWorksCard key={step.id} step={step} />
      ))}
    </div>
  );
};

export default HowItWorksGrid;
