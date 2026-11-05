"use client";

import ProductShowcaseCard from "./ProductShowcaseCard";

const ProductShowcaseGrid = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {features.map((feature) => (
        <ProductShowcaseCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default ProductShowcaseGrid;
