import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { About } from './pages/About';
import { ProjectDetail } from './pages/ProjectDetail';
import { LinkProjectDetail } from './pages/LinkProjectDetail';
import ScrollToTop from './components/ScrollToTop';

export function AppRouter() {
  return <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/linkproject/:id" element={<LinkProjectDetail />} />
      </Routes>
    </HashRouter>;
}
