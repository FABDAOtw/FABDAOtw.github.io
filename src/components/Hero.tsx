import React from "react";
interface HeroProps {
  /** Pixel height of the Stats section to subtract from viewport height */
  statsHeight?: number;
}
export function Hero({
  statsHeight = 184
}: HeroProps) {
  return <section className="
        sticky top-0 z-10 relative flex items-center justify-center
        py-8 px-6 md:py-[120px] md:px-[80px]
         transition-[height] duration-300
        bg-cover bg-center bg-no-repeat
        bg-[url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80')]
      " style={{
    height: `calc(100vh - ${statsHeight}px)`
  }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A2E2A] opacity-90"></div>

      {/* Content sits above overlay */}
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#29C4A9] mb-6 md:leading-[120%]">
          See the act. Track the fact
        </h1>
        <p className="text-lg md:text-2xl text-[#29C4A9]">
          The Hypercerts Dashboard documents and verifies local public good
          contributions in Taiwan — turning actions into traceable facts and
          shared value.
        </p>
      </div>
    </section>;
}