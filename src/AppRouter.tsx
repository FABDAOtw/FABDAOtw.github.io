import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './App';
import { About } from './pages/About';
import { ProjectDetail } from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';

export function AppRouter() {
  return <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>;
}