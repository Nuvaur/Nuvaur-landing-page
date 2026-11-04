"use client";

import { ShieldCheck, Lock, CheckCircle2, FileText } from "lucide-react";
import { trustStripPillars } from "@/data/trustStripData";

const iconMap = {
  pricing: FileText,
  records: CheckCircle2,
  security: ShieldCheck,
  custody: Lock,
};

const TrustStrip = () => {
  return (
    <section className="border-y border-stone/10 bg-obsidian-light/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustStripPillars.map((pillar) => {
            const IconComponent = iconMap[pillar.id] || ShieldCheck;
            return (
              <div
                key={pillar.id}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-obsidian border border-stone/10 hover:border-gold/30 transition-colors"
              >
                <div className="p-2 rounded-lg bg-gold/10 text-gold flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-ivory text-sm">
                    {pillar.title}
                  </h4>
                  <p className="text-stone text-xs mt-1 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
