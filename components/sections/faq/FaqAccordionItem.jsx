"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqAccordionItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-stone/20 rounded-xl bg-obsidian-card overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
      >
        <span className="text-ivory font-medium text-base sm:text-lg">
          {item.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold transition-transform duration-200 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="px-6 pb-6 pt-0 text-stone text-sm sm:text-base leading-relaxed border-t border-stone/10 font-sans">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export default FaqAccordionItem;
