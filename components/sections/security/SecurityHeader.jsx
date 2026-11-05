"use client";

const SecurityHeader = ({ eyebrow, headline, description }) => {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold-highlight text-xs font-medium tracking-wide">
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
        {headline}
      </h2>
      <p className="text-stone text-base sm:text-lg leading-relaxed font-sans">
        {description}
      </p>
    </div>
  );
};

export default SecurityHeader;
