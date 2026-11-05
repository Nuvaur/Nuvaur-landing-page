"use client";

import { securityData } from "@/data/securityData";
import SecurityHeader from "./SecurityHeader";
import SecurityGrid from "./SecurityGrid";

const SecuritySection = () => {
  return (
    <section
      id="security"
      className="py-20 md:py-28 bg-obsidian-light/30 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SecurityHeader
          eyebrow={securityData.eyebrow}
          headline={securityData.headline}
          description={securityData.description}
        />
        <SecurityGrid highlights={securityData.highlights} />
      </div>
    </section>
  );
};

export default SecuritySection;
