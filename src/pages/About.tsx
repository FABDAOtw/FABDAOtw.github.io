import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function About() {
  return <div className="flex flex-col justify-center items-center min-h-screen w-full bg-[#F5F3EE]">
      <Header />
      <main className="w-full">
        {/* Wrapper to control spacing between sections and side padding on mobile */}
        <div className="flex flex-col lg:px-0 mx-auto">
          {/* Hero Banner */}
          <section className="flex-1">
            {/* Content */}
          </section>
          <section className="z-10 flex min-h-[50vh] items-center justify-center py-8 px-6 md:py-[120px] md:px-[80px] bg-[#0A2E2A]/90 bg-[url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80')] bg-cover bg-center bg-no-repeat">
          {/* dark overlay */}
          <div className="absolute inset-0 bg-[#0A2E2A] opacity-90"></div>
           {/* content */}
          <div className="relative max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#29C4A9] mb-6 md:leading-[120%]">
              About Us
            </h2>
          </div>
          </section>
          {/* Introduction Section */}
          <section className="sticky top-0 md:h-screen z-20 flex items-top justify-center rounded-t-3xl py-8 px-6 md:py-[120px] md:px-[80px] bg-[#F5F3EE]">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-[#0A8A79] text-xl mb-2 pb-3 md:pb-0">Introduction</h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#093532] mb-6 md:leading-[120%]">
                Hypercerts Dashboard is a curation platform designed specifically
                for public contributions in Taiwan.
              </h2>
              <p className="text-lg md:text-2xl text-[#093532]">
                Using Hypercert technology, we transform fragmented actions into
                visualised, traceable, and verifiable impact data—ensuring that
                public value is no longer overlooked, but instead becomes the
                foundation for visibility, comparison, connection, and further
                incentives.
              </p>
            </div>
          </section>
          {/* Objective Section */}
          <section className="sticky top-0 h-screen z-30 flex items-top justify-center rounded-t-3xl py-8 px-6 md:py-[120px] md:px-[80px] bg-[#0A2E2A]/90 bg-[url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80')] bg-cover bg-center bg-no-repeat">
          {/* dark overlay */}
          <div className="absolute inset-0 bg-[#0A2E2A] opacity-90 rounded-t-3xl"></div>
          {/* content */}
          <div className="relative max-w-7xl mx-auto">
            <h3 className="text-[#29C4A9] text-xl mb-2 pb-3 md:pb-0">Objective</h3>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#29C4A9] mb-6 md:leading-[120%]">
              By using Hypercerts as the unit of impact, we curate public goods
              contributions across different fields in Taiwan.
            </h2>
          </div>
          </section>


          {/* Features Section */}
          <section className="sticky top-0 h-screen z-40 flex items-top justify-center rounded-t-3xl py-8 px-6 md:py-[120px] md:px-[80px] bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#093532] mb-6">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F7F7F7] p-8 rounded-[24px]">
                  <p className="text-lg md:text-2xl text-[#0A2E2A]">
                    Allow users to deeply{' '}
                    <span className="text-[#0A8A79]">
                      understand the actions, participants, and contribution value
                    </span>{' '}
                    behind each Hypercert.
                  </p>
                </div>
                <div className="bg-[#F7F7F7] p-8 rounded-[24px]">
                  <p className="text-lg md:text-2xl text-[#0A2E2A]">
                    Through the Hypercert Dashboard, the international community
                    will have a central place to{' '}
                    <span className="text-[#0A8A79]">
                      see Taiwan's development and contributions in public goods.
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-[#0A2E2A] p-8 mt-8 rounded-[24px]">
                <p className="text-lg md:text-2xl text-white">
                  In the future, we will visualise the relationships and
                  connections with{' '}
                  <span className="text-lg md:text-2xl text-[#29C4A9]">ecosystem partners</span> such
                  as FAB DAO and GreenSofa.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>;
}