"use client";

import ProblemCard from "./ProblemCard";

const ProblemGrid = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {cards.map((card, index) => (
        <ProblemCard key={card.id} card={card} index={index} />
      ))}
    </div>
  );
};

export default ProblemGrid;
