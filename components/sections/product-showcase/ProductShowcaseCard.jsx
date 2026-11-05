"use client";

import { TrendingUp, RefreshCw, Zap, ShieldCheck } from "lucide-react";

const iconMap = {
  rates: TrendingUp,
  recurring: RefreshCw,
  liquidity: Zap,
  custody: ShieldCheck,
};

const ProductShowcaseCard = ({ feature }) => {
  const IconComponent = iconMap[feature.id] || ShieldCheck;

  return (
    <div className="p-8 rounded-2xl bg-obsidian-card border border-stone/20 hover:border-gold/40 transition-all duration-300 group shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
            <IconComponent className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-semibold tracking-wider text-stone uppercase bg-stone/10 px-2.5 py-1 rounded border border-stone/10">
            {feature.tag}
          </span>
        </div>
        <h3 className="text-ivory text-xl font-semibold mb-2 group-hover:text-gold transition-colors">
          {feature.title}
        </h3>
        <p className="text-stone text-sm leading-relaxed font-sans">
          {feature.description}
        </p>
      </div>

      <div className="pt-6 mt-6 border-t border-stone/10 flex items-center justify-between text-xs text-stone group-hover:text-ivory transition-colors">
        <span>NUVAUR Feature</span>
        <span className="text-gold font-mono">01</span>
      </div>
    </div>
  );
};

export default ProductShowcaseCard;
