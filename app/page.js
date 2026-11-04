import Hero from "@/components/sections/hero/Hero";
import ProblemSection from "@/components/sections/problem/ProblemSection";
import TrustStrip from "@/components/sections/trust-strip/TrustStrip";

const Home = () => {
  return (
    <div className="min-h-screen bg-obsidian text-ivory">
      <Hero />
      <TrustStrip />
      <ProblemSection />
    </div>
  );
};

export default Home;
