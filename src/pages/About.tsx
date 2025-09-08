import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function About() {
  return <div className="flex flex-col min-h-screen w-full bg-[#f8f6f0]">
      <Header />
      <main className="flex-1 pt-8 pb-16">
        {/* Introduction Section */}
        <section className="px-4 md:px-5 lg:px-6 py-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d3e34] mb-6">
                Introduction
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-[#0d3e34] mb-4">
                Hypercerts Dashboard is a curation platform designed
                specifically for public contributions in Taiwan.
              </p>
              <p className="text-base md:text-lg lg:text-xl text-[#0d3e34] mb-4">
                Using Hypercert technology, we transform fragmented actions into
                visualised, traceable, and verifiable impact data—ensuring that
                public value is no longer overlooked, but instead becomes the
                foundation for visibility, comparison, connection, and further
                incentives.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/image.png" alt="Wavy green pattern" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>
        {/* Objective Section */}
        <section className="px-6 md:px-12 py-16 bg-[#f8f6f0]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d3e34] mb-6">
                Objective
              </h2>
              <p className="text-[#0d3e34]">
                By using Hypercerts as the unit of impact, we curate public
                goods contributions across different fields in Taiwan.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/image.png" alt="Wavy green pattern" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>
        {/* Featured/Recommended Hypercerts Section */}
        <section className="px-6 md:px-12 py-16 bg-[#f8f6f0]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d3e34] mb-6">
                Featured / Recommended Hypercerts
              </h2>
              <ul className="list-disc pl-5 space-y-4 text-[#0d3e34]">
                <li>
                  Allow users to deeply understand the actions, participants,
                  and contribution value behind each Hypercert.
                </li>
                <li>
                  In the future, we will visualise the relationships and
                  connections with ecosystem partners such as FAB DAO and
                  GreenSofa.
                </li>
                <li>
                  Through the Hypercert Dashboard, the international community
                  will have a central place to see Taiwan's development and
                  contributions in public goods.
                </li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="/image.png" alt="Wavy green pattern" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
}