"use client";

import { ShieldCheck } from "lucide-react";

const FooterBrand = ({ brand }) => {
  return (
    <div className="space-y-4 max-w-sm">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center font-serif font-bold text-gold text-lg">
          N
        </div>
        <span className="font-serif text-xl font-semibold tracking-wider text-ivory">
          {brand.name}
        </span>
      </div>

      <p className="text-stone text-xs sm:text-sm leading-relaxed font-sans">
        {brand.tagline}
      </p>

      <div className="inline-flex items-center gap-2 text-xs text-stone/80 pt-1">
        <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
        <span>Physical Gold Vaulting Standard</span>
      </div>
    </div>
  );
};

export default FooterBrand;
