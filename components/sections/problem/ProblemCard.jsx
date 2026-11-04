"use client";

import { Coins, Eye, ArrowLeftRight } from "lucide-react";

const iconMap = {
  accessible: Coins,
  transparent: Eye,
  liquid: ArrowLeftRight,
};

const ProblemCard = ({ card, index }) => {
  const IconComponent = iconMap[card.id] || Coins;

  return (
    <div className="p-8 rounded-2xl bg-obsidian-card border border-stone/20 hover:border-gold/40 transition-all duration-300 group shadow-lg flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6 group-hover:scale-110 transition-transform">
          <IconComponent className="w-6 h-6" />
        </div>
        <span className="text-xs font-semibold tracking-wider text-gold uppercase">
          {card.title}
        </span>
        <p className="text-ivory text-base sm:text-lg font-medium mt-2 leading-snug">
          {card.copy}
        </p>
      </div>

      <div className="pt-8 mt-6 border-t border-stone/10 flex items-center justify-between text-xs text-stone group-hover:text-ivory transition-colors">
        <span>NUVAUR Standard</span>
        <span>0{index + 1}</span>
      </div>
    </div>
  );
};

export default ProblemCard;
