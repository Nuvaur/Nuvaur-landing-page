"use client";

import { Lock } from "lucide-react";

const HeroMockupDetails = ({ livePrice, planStatus, custodyId }) => {
  return (
    <>
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between p-3 rounded-lg bg-obsidian/60 border border-stone/10 text-xs">
          <span className="text-stone">Live Gold Price (per gram)</span>
          <span className="text-ivory font-semibold">{livePrice}</span>
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg bg-obsidian/60 border border-stone/10 text-xs">
          <span className="text-stone">Recurring Purchase Plan</span>
          <span className="text-gold font-medium">{planStatus}</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-stone/10 flex items-center justify-between text-xs text-stone">
        <span className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 text-gold" /> Allocated Custody Record
        </span>
        <span className="text-stone/60">{custodyId}</span>
      </div>
    </>
  );
};

export default HeroMockupDetails;
