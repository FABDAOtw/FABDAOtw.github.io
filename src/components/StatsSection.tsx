import React, { useEffect, useState } from "react";
import { StatsCard } from "./StatsCard";
export function StatsSection() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const stats = [{
    label: "PROJECTS",
    value: "56"
  }, {
    label: "HYPERCERTS",
    value: "24"
  }, {
    label: "PARTICIPANTS",
    value: "1,032"
  }, {
    label: "FUNDING (USD)",
    value: "$4,200,000"
  }];
  return <section className={`
        relative z-20 py-8 px-6 md:py-12 md:px-[80px]
        transition-all duration-100 ease-in
        ${scrolled ? "bg-[#F5F3EE] rounded-t-3xl" : "bg-[#093532] rounded-t-none"}
      `}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8">
        {stats.map((stat, index) => <StatsCard key={index} label={stat.label} value={stat.value} scrolled={scrolled} // 👈 pass the flag down
      />)}
      </div>
    </section>;
}