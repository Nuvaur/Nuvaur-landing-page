"use client";

const HowItWorksCard = ({ step }) => {
  return (
    <div className="relative p-8 rounded-2xl bg-obsidian-card border border-stone/20 hover:border-gold/40 transition-all duration-300 group shadow-lg flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-8">
          <span className="text-3xl sm:text-4xl font-serif text-gold font-normal">
            {step.id}
          </span>
          <span className="text-xs font-semibold tracking-wider text-stone uppercase bg-stone/10 px-2.5 py-1 rounded">
            {step.badge}
          </span>
        </div>
        <h3 className="text-ivory text-xl font-semibold mb-3">{step.title}</h3>
        <p className="text-stone text-sm sm:text-base leading-relaxed font-sans">
          {step.description}
        </p>
      </div>

      <div className="pt-6 mt-8 border-t border-stone/10 flex items-center justify-between text-xs text-gold">
        <span>Secure Workflow</span>
        <span className="group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </div>
  );
};

export default HowItWorksCard;
