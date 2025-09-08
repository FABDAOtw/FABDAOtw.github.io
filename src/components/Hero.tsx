import React from 'react';
export function Hero() {
  return <section className="w-full py-10 px-4 md:px-5 lg:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#1A3C40] mb-4">
          See the act. Track the fact
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-[#1A3C40] opacity-80">
          The Hypercerts Dashboard documents and verifies local public good
          contributions in Taiwan — turning actions into traceable facts and
          shared value.
        </p>
      </div>
    </section>;
}