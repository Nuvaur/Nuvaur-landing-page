const HeroBadge = ({ eyebrow }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-highlight text-xs font-medium tracking-wide">
      <span>{eyebrow}</span>
    </div>
  );
};

export default HeroBadge;
