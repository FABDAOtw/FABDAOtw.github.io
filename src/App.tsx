import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen w-full bg-[#093532]">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProjectsSection />
      </main>
      <Footer />
    </div>;
}