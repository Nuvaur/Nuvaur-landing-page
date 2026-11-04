"use client";

const ProblemHeader = ({ headline, description }) => {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
        {headline}
      </h2>
      <p className="text-stone text-base sm:text-lg leading-relaxed font-sans">
        {description}
      </p>
    </div>
  );
};

export default ProblemHeader;
