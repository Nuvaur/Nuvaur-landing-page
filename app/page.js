import Hero from "@/components/sections/hero/Hero";
import HowItWorks from "@/components/sections/how-it-works/HowItWorks";
import ProblemSection from "@/components/sections/problem/ProblemSection";
import ProductShowcase from "@/components/sections/product-showcase/ProductShowcase";
import TrustStrip from "@/components/sections/trust-strip/TrustStrip";

const Home = () => {
  return (
    <div className="min-h-screen bg-obsidian text-ivory">
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <HowItWorks />
      <ProductShowcase />
    </div>
  );
};

export default Home;
