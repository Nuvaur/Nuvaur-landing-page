"use client";

import SecurityCard from "./SecurityCard";

const SecurityGrid = ({ highlights }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {highlights.map((highlight) => (
        <SecurityCard key={highlight.id} highlight={highlight} />
      ))}
    </div>
  );
};

export default SecurityGrid;
