"use client";

import { productShowcaseData } from "@/data/productShowcaseData";
import ProductShowcaseHeader from "./ProductShowcaseHeader";
import ProductShowcaseGrid from "./ProductShowcaseGrid";

const ProductShowcase = () => {
  return (
    <section className="py-20 md:py-28 bg-obsidian relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductShowcaseHeader
          eyebrow={productShowcaseData.eyebrow}
          headline={productShowcaseData.headline}
          description={productShowcaseData.description}
        />
        <ProductShowcaseGrid features={productShowcaseData.features} />
      </div>
    </section>
  );
};

export default ProductShowcase;
