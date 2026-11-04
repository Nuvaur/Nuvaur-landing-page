"use client";

import HeroMockupHeader from "./HeroMockupHeader";
import HeroMockupActions from "./HeroMockupActions";
import HeroMockupDetails from "./HeroMockupDetails";

const HeroMockup = ({ mockup }) => {
  return (
    <div className="lg:col-span-5">
      <div className="relative rounded-2xl bg-obsidian-card border border-stone/20 p-6 shadow-2xl backdrop-blur-xl">
        {/* Header containing title, sample badge, and growth indicator */}
        <HeroMockupHeader
          title={mockup.title}
          tag={mockup.tag}
          growth={mockup.growth}
        />

        {/* Main Balance Display */}
        <div className="my-6">
          <h3 className="text-3xl sm:text-4xl font-bold text-ivory tracking-tight">
            {mockup.nairaBalance}
            <span className="text-stone text-lg font-normal">
              {mockup.nairaDecimal}
            </span>
          </h3>
          <p className="text-sm text-gold mt-1 font-medium">
            Equivalent to {mockup.goldWeight}
          </p>
        </div>

        {/* Reusable Action Buttons */}
        <HeroMockupActions />

        {/* Portfolio Live Details & Custody Record Badge */}
        <HeroMockupDetails
          livePrice={mockup.livePrice}
          planStatus={mockup.planStatus}
          custodyId={mockup.custodyId}
        />
      </div>
    </div>
  );
};

export default HeroMockup;
