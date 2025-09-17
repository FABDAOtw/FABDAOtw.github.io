import React, { useEffect, useState, useRef } from 'react';
import { XIcon, GlobeIcon, TwitterIcon, FacebookIcon } from 'lucide-react';
interface Project {
  id: number;
  name: string;
  image: string;
  org: string;
  timeline: string;
  description: string;
  tags: string[];
}
interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

/**
 * Robust fullscreen modal layout:
 * - Hides global nav while open (via `html.gs-modal-open`)
 * - Close bar stays visible (sticky within the scroll container)
 * - Main body (3‑column grid) is the scroll surface
 */
export function ProjectModal({
  project,
  onClose
}: ProjectModalProps) {
  const [scrolled, setScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Lock background and hide site header while modal open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.classList.add('gs-modal-open');
    return () => {
      document.body.style.overflow = prevOverflow || '';
      document.documentElement.classList.remove('gs-modal-open');
    };
  }, []);

  // ESC to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Track scroll on the MODAL content (not window)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 0);
    onScroll();
    el.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);
  return <>
      {/* Hide any <header> or [data-site-header] while modal open */}
      <style>{`
        html.gs-modal-open header,
        html.gs-modal-open [data-site-header] { display: none !important; }
      `}</style>

      {/* Fullscreen fixed shell; inner div is the scroll container */}
      <div className="fixed inset-0 z-[10000] bg-[#F5F3EE] flex flex-col">
        {/* Scrollable content area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          {/* Close bar that remains visible within this scroll container */}
          <div className={`sticky top-0 z-[1] flex items-center justify-end px-4 h-14 sm:h-16 rounded-3xl backdrop-blur-sm
                        ${scrolled ? "bg-white/95" : "bg-[#F5F3EE]/90"} `}>
            <button onClick={onClose} aria-label="Close modal" className={`inline-flex items-center justify-center p-2 rounded-full
                          transition-colors duration-300
                          ${scrolled ? "bg-gray-100 hover:bg-gray-200" : "bg-[#F5F3EE] hover:bg-gray-100"}
                          text-gray-700`}>
              <XIcon size={24} />
            </button>
          </div>

          {/* Page body under the sticky bar */}
          <div className="h-auto max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {/* Grid: Left (content) + Right (sidebar) */}
            <div className="md:grid md:grid-cols-3 md:gap-4 lg:gap-8">
              {/* LEFT COLUMN CARD */}
              <div className="md:col-span-2 rounded-3xl overflow-hidden bg-white shadow-sm">
                <div className="relative">
                  <img src={project.image} alt={project.name} className="w-full h-[180px] md:h-60 lg:h-[420px] object-cover object-top scale-[1.01] " />
                </div>
                <div className="p-6 sm:p-8">
                  <h1 className="text-3xl sm:text-3xl font-semibold text-[#113A36] tracking-tight">{project.name}</h1>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-gray-600">
                    <div>
                      <span className="text-gray-500">Time of work</span>{' '}
                      <span className="font-semibold text-[#113A36]">{project.timeline}</span>
                    </div>
                    <span className="hidden sm:inline-block text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"><GlobeIcon size={18} className="text-gray-700" /></button>
                      <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"><TwitterIcon size={18} className="text-gray-700" /></button>
                      <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"><FacebookIcon size={18} className="text-gray-700" /></button>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-[#113A36] leading-relaxed">
                    <p>FAB DAO、全名 Formosa Art Bank DAO、為公益 NFT 自治組織，集結跨域組織與個人， 開創臺灣 NFT 結合公益、藝術、文化的新篇章。</p>
                    <p>感謝VIII啡啡捐贈藝術資料庫 No.1-10給FAB DAO藝術銀行。</p>
                    <p>第三行FAB DAO、全名 Formosa Art Bank DAO、為公益 NFT 自治組織，集結跨域組織與個人， 開創臺灣 NFT 結合公益、藝術、文化的新篇章。</p>
                    <p>感謝VIII啡啡捐贈藝術資料庫 No.1-10給FAB DAO藝術銀行…</p>
                  </div>

                  <div className="my-6 h-px bg-gray-200" />

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                    {/* View on + Explore */}
                    <span className="inline-flex items-center whitespace-nowrap text-gray-600">
                      <span className="mr-2">View on</span>
                      <a href="#" className="text-teal-700 font-semibold inline-flex items-center hover:underline whitespace-nowrap">
                        Explore
                        <svg className="w-4 h-4 ml-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </span>

                    {/* separator */}
                    <span className="text-gray-300 flex-none">•</span>

                    {/* Verified by */}
                    <span className="inline-flex items-center whitespace-nowrap text-gray-600">
                      <span className="mr-1">Verified by</span>
                      <span className="font-semibold text-gray-900">0x2914...29D2rg</span>
                    </span>

                    {/* separator */}
                    <span className="text-gray-300 flex-none">•</span>

                    {/* Verified on */}
                    <span className="inline-flex items-center whitespace-nowrap text-gray-600">
                      <span className="mr-1">Verified on</span>
                      <span className="font-semibold text-gray-900">May 01, 2025</span>
                    </span>
                  </div>


                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, index) => <span key={index} className="
                          text-xs px-2 py-1 rounded border
                          bg-gray-100 text-gray-800 border-gray-200
                          transition-colors
                          group-hover:bg-transparent
                          group-hover:text-white
                          group-hover:border-white/40
                        ">
                        {tag}
                      </span>)}
                  </div>
                </div>
              </div>

              {/* RIGHT SIDEBAR */}
              <aside className="mt-8 md:mt-0 space-y-4">
                <div className="bg-white rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold">GS</div>
                  <div className="min-w-0">
                    <div className="text-gray-900 font-medium truncate">Greensofa</div>
                    <a href="#" className="text-teal-700 text-sm hover:underline">View all projects</a>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900">Contributors (18)</h3>
                  <div className="mt-3 max-h-60 overflow-y-auto pr-1 space-y-2">
                    {[...Array(6)].map((_, i) => <div key={i} className="flex items-center gap-3">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8594 16.125C17.2656 14.6797 18.125 12.6875 18.125 10.5C18.125 6.04688 14.4531 2.375 10 2.375C5.50781 2.375 1.875 6.04688 1.875 10.5C1.875 12.6875 2.69531 14.6797 4.10156 16.125C4.84375 14.2891 6.64062 13 8.75 13H11.25C13.3203 13 15.1172 14.2891 15.8594 16.125ZM14.2969 17.4141C14.0234 15.9688 12.7344 14.875 11.25 14.875H8.75C7.22656 14.875 5.9375 15.9688 5.66406 17.4141C6.91406 18.1953 8.39844 18.625 10 18.625C11.5625 18.625 13.0469 18.1953 14.2969 17.4141ZM10 20.5C6.40625 20.5 3.125 18.625 1.32812 15.5C-0.46875 12.4141 -0.46875 8.625 1.32812 5.5C3.125 2.41406 6.40625 0.5 10 0.5C13.5547 0.5 16.8359 2.41406 18.6328 5.5C20.4297 8.625 20.4297 12.4141 18.6328 15.5C16.8359 18.625 13.5547 20.5 10 20.5ZM10 9.875C10.5469 9.875 11.0547 9.60156 11.3281 9.09375C11.6016 8.625 11.6016 8.03906 11.3281 7.53125C11.0547 7.0625 10.5469 6.75 10 6.75C9.41406 6.75 8.90625 7.0625 8.63281 7.53125C8.35938 8.03906 8.35938 8.625 8.63281 9.09375C8.90625 9.60156 9.41406 9.875 10 9.875ZM6.5625 8.3125C6.5625 7.10156 7.1875 5.96875 8.28125 5.34375C9.33594 4.75781 10.625 4.75781 11.7188 5.34375C12.7734 5.96875 13.4375 7.10156 13.4375 8.3125C13.4375 9.5625 12.7734 10.6953 11.7188 11.3203C10.625 11.9062 9.33594 11.9062 8.28125 11.3203C7.1875 10.6953 6.5625 9.5625 6.5625 8.3125Z" fill="#2A6355" />
                        </svg>

                        <span className="text-sm text-gray-800">0x7723...D2ro2E</span>
                        <button className="ml-auto p-1 rounded hover:bg-gray-100">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>)}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900">Owners (3)</h3>
                  <div className="mt-3 space-y-2">
                    {[{
                    p: '98%'
                  }, {
                    p: '0.12%'
                  }, {
                    p: '0.08%'
                  }].map((o, idx) => <div key={idx} className="flex items-center gap-1">
                        <span className="text-sm text-gray-500 w-4">{idx + 1}</span>
                        <span className="text-sm text-gray-900">0x7723...D2ro2E</span>
                        <button className="ml-auto p-1 rounded hover:bg-gray-100">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </button>
                        <span className="text-sm font-medium text-gray-900">{o.p}</span>
                      </div>)}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>;
}