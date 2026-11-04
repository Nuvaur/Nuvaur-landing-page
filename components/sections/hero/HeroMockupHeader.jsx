import { TrendingUp } from "lucide-react";

const HeroMockupHeader = ({ title, tag, growth }) => {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-stone/10">
      <div>
        <p className="text-xs text-stone uppercase tracking-wider">{title}</p>
        <p className="text-xs text-stone/60">{tag}</p>
      </div>
      <span className="px-2.5 py-1 rounded bg-emerald-success/10 text-emerald-success text-xs font-semibold flex items-center gap-1">
        <TrendingUp className="w-3.5 h-3.5" /> {growth}
      </span>
    </div>
  );
};

export default HeroMockupHeader;
