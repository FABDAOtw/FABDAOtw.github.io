import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
export function About() {
  return <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-[#1A3C40] mb-8">
              About Hypercerts
            </h1>
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[#1A3C40] mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4">
                Hypercerts is a platform dedicated to recognizing, validating,
                and rewarding impactful work in public goods through a
                standardized framework. We believe in the power of transparent
                impact accounting to drive positive change in society.
              </p>
              <p className="text-gray-700">
                Our mission is to create a more efficient and effective
                ecosystem for funding public goods by providing the tools and
                infrastructure needed to properly account for and value impact.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[#1A3C40] mb-4">
                What are Hypercerts?
              </h2>
              <p className="text-gray-700 mb-4">
                Hypercerts are digital certificates that represent claims about
                positive impact. They allow contributors to public goods to
                define, capture and communicate the scope and value of their
                work.
              </p>
              <p className="text-gray-700">
                Each hypercert contains detailed information about:
              </p>
              <ul className="list-disc pl-6 mt-2 mb-4 text-gray-700 space-y-2">
                <li>Who created the impact</li>
                <li>What work was done</li>
                <li>Who benefited from the work</li>
                <li>When and where the impact occurred</li>
                <li>How the impact was measured</li>
              </ul>
              <p className="text-gray-700">
                By standardizing this information, hypercerts make it easier for
                funders to discover, evaluate, and support impactful projects.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-[#1A3C40] mb-4">
                Our Team
              </h2>
              <p className="text-gray-700 mb-4">
                We are a diverse team of researchers, developers, designers, and
                impact specialists committed to improving how public goods are
                funded and recognized.
              </p>
              <p className="text-gray-700">
                Our work is supported by FAB DAO and other organizations that
                share our vision for a more transparent and effective impact
                economy.
              </p>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-[#1A3C40] mb-4">
                Get Involved
              </h2>
              <p className="text-gray-700 mb-4">
                We welcome collaborations with impact creators, funders,
                researchers, and anyone interested in advancing the field of
                impact accounting.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
                <h3 className="font-semibold text-lg text-[#1A3C40] mb-3">
                  Connect with us
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors">
                    Join Discord
                  </a>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                    Follow on X/Twitter
                  </a>
                  <a href="#" className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                    Read Documentation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}