"use client";

import { faqData } from "@/data/faqData";
import FaqAccordionItem from "./FaqAccordionItem";

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-obsidian relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-highlight text-xs font-medium tracking-wide">
            <span>{faqData.eyebrow}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal">
            {faqData.headline}
          </h2>
          <p className="text-stone text-base sm:text-lg max-w-2xl mx-auto">
            {faqData.description}
          </p>
        </div>

        <div className="space-y-4">
          {faqData.items.map((item) => (
            <FaqAccordionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
