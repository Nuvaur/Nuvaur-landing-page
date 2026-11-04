// inside components/sections/hero/HeroContent.jsx
import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import HeroBadge from "./HeroBadge";
import Button from "@/components/ui/Button";

const HeroContent = ({ data }) => {
  return (
    <div className="lg:col-span-7 space-y-6 text-left">
      <HeroBadge eyebrow={data.eyebrow} />

      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-ivory font-normal">
        {data.headline}
      </h1>

      <p className="text-stone text-base sm:text-lg max-w-2xl leading-relaxed font-sans">
        {data.description}
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
        <Link href="#waitlist">
          <Button
            variant="primary"
            size="lg"
            icon={ArrowUpRight}
            className="w-full sm:w-auto"
          >
            {data.primaryCta}
          </Button>
        </Link>
        <Link href="#how-it-works">
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            {data.secondaryCta}
          </Button>
        </Link>
      </div>

      <div className="flex items-center gap-2 pt-4 text-xs sm:text-sm text-stone/80">
        <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
        <span>{data.trustNote}</span>
      </div>
    </div>
  );
};

export default HeroContent;
