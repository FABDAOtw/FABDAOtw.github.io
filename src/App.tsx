import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="flex flex-col min-h-screen w-full bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>;
}