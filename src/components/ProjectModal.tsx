import React, { useEffect, useState, useRef } from 'react';
import { XIcon, GlobeIcon, TwitterIcon, FacebookIcon } from 'lucide-react';
interface Project {
  id: number;
  name: string;
  image: string;
  org: string;
  timeline: string; // e.g. "Oct. 09, 2024 → Dec. 09, 2024"
  description: string;
  tags: string[];
}
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}
export function ProjectModal({
  project,
  onClose
}: ProjectModalProps) {
  // 2) State + ref for the scrollable container
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  // lock scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = prev || 'auto';
  }, []);
  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);
  // 3) Track scroll on the MODAL, not window
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 0);
    // run once in case initial position isn't at 0
    onScroll();
    el.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  return (
    // 4) Attach the ref to the scrollable wrapper
    <div ref={scrollRef} className="fixed inset-0 z-[9000] bg-[#F5F3EE] overflow-y-auto">
      {/* Top bar button with dynamic background */}
      <button onClick={onClose} aria-label="Close modal" className={`fixed top-0 left-0 w-full z-[9999] flex justify-end p-4
                    text-gray-700 transition-colors duration-300
                    ${scrolled ? 'bg-white' : 'bg-[#F5F3EE]'}`}>
        <XIcon size={24} />
      </button>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 ">
        {/* Grid: Left card (image attached at top) + Right sidebar */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* LEFT COLUMN CARD */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden bg-white shadow-sm">
            {/* Cover image is ATTACHED to the top of the left column */}
            <div className="relative">
              <img src={project.image} alt={project.name} className="w-full h-72 lg:h-[420px] object-cover object-top outline outline-2 outline-white outline-offset-[-2px]" />
              {/* optional corner badge/logo */}
              {/* <div className="absolute top-4 left-4">
               <img
               src="https://images.unsplash.com/photo-1560693512-aadb5a36f662?auto=format&fit=crop&w=100&q=60"
               alt="Project logo"
               className="w-16 h-16 rounded-full border border-white shadow"
               />
               </div> */}
            </div>

            {/* Main content under the image, as one card */}
            <div className="p-6 sm:p-8">
              {/* Title */}
              <h1 className="text-3xl sm:text-3xl font-semibold text-[#113A36] tracking-tight">
                {project.name}
              </h1>

              {/* Timeline + Socials */}
              <div className="mt-4 flex flex-wrap items-center gap-3 text-gray-600">
                <div>
                  <span className="text-gray-500">Time of work</span>{' '}
                  <span className="font-semibold text-[#113A36]">
                    {project.timeline}
                  </span>
                </div>
                <span className="hidden sm:inline-block text-gray-300">|</span>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                    <GlobeIcon size={18} className="text-gray-700" />
                  </button>
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                    <TwitterIcon size={18} className="text-gray-700" />
                  </button>
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                    <FacebookIcon size={18} className="text-gray-700" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 space-y-4 text-[#113A36] leading-relaxed">
                <p>
                  FAB DAO、全名 Formosa Art Bank DAO、為公益 NFT
                  自治組織，集結跨域組織與個人， 開創臺灣 NFT
                  結合公益、藝術、文化的新篇章。
                </p>
                <p>感謝VIII啡啡捐贈藝術資料庫 No.1-10給FAB DAO藝術銀行。</p>
                <p>
                  第三行FAB DAO、全名 Formosa Art Bank DAO、為公益 NFT
                  自治組織，集結跨域組織與個人， 開創臺灣 NFT
                  結合公益、藝術、文化的新篇章。
                </p>
                <p>感謝VIII啡啡捐贈藝術資料庫 No.1-10給FAB DAO藝術銀行…</p>
              </div>

              {/* Read more */}
              <button className="mt-5 text-teal-700 font-medium hover:underline">
                READ MORE
              </button>

              {/* Divider */}
              <div className="mt-6 border-t border-gray-200" />

              {/* Explore / Verified */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-2 text-sm">
                <div className="flex items-center">
                  <span className="mr-2 text-gray-600">View on</span>
                  <a href="#" className="text-teal-700 font-semibold inline-flex items-center hover:underline">
                    Explore
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                <div className="flex flex-wrap items-center md:justify-end text-gray-600 gap-y-2">
                  <span className="mr-2">Verified by</span>
                  <span className="font-semibold text-gray-900">
                    0x2914...29D2rg
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="mr-2">Verified on</span>
                  <span className="font-semibold text-gray-900">
                    May 01, 2025
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((t, i) => <span key={i} className="px-3 py-1 rounded-full border border-gray-300 text-sm text-[#113A36] bg-white">
                    {t}
                  </span>)}
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="mt-8 lg:mt-0 space-y-6">
            {/* Org card (optional; remove if not needed) */}
            <div className="bg-white rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                GS
              </div>
              <div className="min-w-0">
                <div className="text-gray-900 font-medium truncate">
                  Greensofa
                </div>
                <a href="#" className="text-teal-700 text-sm hover:underline">
                  View all projects
                </a>
              </div>
            </div>

            {/* Contributors */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Contributors (18)
              </h3>
              <div className="mt-3 max-h-60 overflow-y-auto pr-1 space-y-2">
                {[...Array(6)].map((_, i) => <div key={i} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center text-white text-xs">
                      G
                    </div>
                    <span className="text-sm text-gray-800">
                      0x7723...D2ro2E
                    </span>
                    <button className="ml-auto p-1 rounded hover:bg-gray-100">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>)}
              </div>
            </div>

            {/* Owners */}
            <div className="bg-white rounded-xl p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Owners (3)
              </h3>
              <div className="mt-3 space-y-2">
                {[{
                  p: '98%'
                }, {
                  p: '0.12%'
                }, {
                  p: '0.08%'
                }].map((o, idx) => <div key={idx} className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 w-4">{idx + 1}</span>
                    <span className="text-sm text-gray-900">
                      0x7723...D2ro2E
                    </span>
                    <button className="ml-auto p-1 rounded hover:bg-gray-100">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <span className="text-sm font-medium text-gray-900">
                      {o.p}
                    </span>
                  </div>)}
              </div>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <div className="mt-12 bg-[#0A2E2A] text-white rounded-2xl p-8">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
            <div className="mb-6 lg:mb-0">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 mr-2">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-teal-300">GreenSofa</div>
                  <div className="text-lg font-semibold">Hypercerts</div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-teal-300">
                    DISCORD
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    X / Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300">
                    HACKMD
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex justify-between items-center mt-12 pt-6 border-t border-white/20">
            <div className="flex items-center">
              <span className="text-sm mr-2">Powered by</span>
              <div className="font-bold flex items-center">
                <div className="w-6 h-6 mr-1">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="currentColor" d="M3,3H21V21H3V3M5,5V19H19V5H5Z" />
                  </svg>
                </div>
                FAB DAO
              </div>
            </div>
            <div className="text-sm text-white/70">
              ©FAB DAO. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}