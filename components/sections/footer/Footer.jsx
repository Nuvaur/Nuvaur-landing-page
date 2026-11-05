"use client";

import { footerData } from "@/data/footerData";
import FooterBrand from "./FooterBrand";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer className="bg-obsidian border-t border-stone/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 justify-between">
          <div className="lg:col-span-5">
            <FooterBrand brand={footerData.brand} />
          </div>
          <div className="lg:col-span-7">
            <FooterNav links={footerData.links} />
          </div>
        </div>

        <div className="pt-8 border-t border-stone/10 space-y-4">
          <p className="text-[11px] text-stone/60 leading-relaxed font-sans">
            {footerData.disclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-stone/70 pt-2 gap-2">
            <span>{footerData.brand.copyright}</span>
            <span className="font-mono text-[11px] text-stone/50">
              NUVAUR Platform v1.0
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
