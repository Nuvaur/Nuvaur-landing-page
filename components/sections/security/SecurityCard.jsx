"use client";

import { ShieldCheck, FileCheck, KeyRound } from "lucide-react";

const iconMap = {
  vaults: ShieldCheck,
  audits: FileCheck,
  encryption: KeyRound,
};

const SecurityCard = ({ highlight }) => {
  const IconComponent = iconMap[highlight.id] || ShieldCheck;

  return (
    <div className="p-8 rounded-2xl bg-obsidian-card border border-stone/20 hover:border-gold/40 transition-all duration-300 group shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-semibold tracking-wider text-stone uppercase bg-stone/10 px-2.5 py-1 rounded border border-stone/10">
            {highlight.badge}
          </span>
        </div>
        <h3 className="text-ivory text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
          {highlight.title}
        </h3>
        <p className="text-stone text-sm leading-relaxed font-sans">
          {highlight.description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-stone/10 flex items-center justify-between text-xs text-gold">
        <span>Verified Custody</span>
        <span className="font-mono text-stone group-hover:text-gold transition-colors">
          100% Allocated
        </span>
      </div>
    </div>
  );
};

export default SecurityCard;
