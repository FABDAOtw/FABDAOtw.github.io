import React, { useEffect } from 'react';
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
export function ProjectModal({
  project,
  onClose
}: ProjectModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  return <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Close button */}
      <div className="absolute top-4 right-4 z-10">
        <button onClick={onClose} className="text-gray-700 hover:text-gray-900" aria-label="Close modal">
          <XIcon size={24} />
        </button>
      </div>
      {/* Divider line below close button */}
      <div className="border-b border-gray-200 w-full mt-16"></div>
      <div className="flex flex-col lg:flex-row flex-1 overflow-auto">
        {/* Left side - Project image */}
        <div className="w-full lg:w-[45%] relative">
          <div className="relative h-full">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4">
              <img src="https://images.unsplash.com/photo-1560693512-aadb5a36f662?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2lyY2xlJTIwbG9nb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=100&q=60" alt="Project logo" className="w-16 h-16 rounded-full" />
            </div>
          </div>
        </div>
        {/* Right side - Project details */}
        <div className="w-full lg:w-[55%] p-8 overflow-y-auto">
          <div className="max-w-3xl">
            {/* Organization */}
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-lg">GS</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900">Greensofa</h3>
                <a href="#" className="text-teal-600 text-sm">
                  View all projects
                </a>
              </div>
            </div>
            {/* Project title */}
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              {project.name}
            </h2>
            {/* Timeline */}
            <div className="text-gray-600 mb-4">
              Time of work: {project.timeline.replace('→', '→')}
            </div>
            {/* Social links */}
            <div className="flex space-x-4 mb-6">
              <button className="p-2 rounded-full border border-gray-300">
                <GlobeIcon size={20} className="text-gray-700" />
              </button>
              <button className="p-2 rounded-full border border-gray-300">
                <TwitterIcon size={20} className="text-gray-700" />
              </button>
              <button className="p-2 rounded-full border border-gray-300">
                <FacebookIcon size={20} className="text-gray-700" />
              </button>
            </div>
            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                FAB DAO、全名 Formosa Art Bank DAO、為公益 NFT
                自治組織，集結跨域組織與個人，開創臺灣 NFT
                結合公益、藝術、文化的新篇章。
              </p>
              <p className="text-gray-700 mb-4">
                感謝VIII啡啡捐贈藝術資料庫 No.1-10給FAB DAO藝術銀行。
              </p>
              <p className="text-gray-700 mb-4">
                第三行FAB DAO、全名 Formosa Art Bank DAO、為公益 NFT
                自治組織，集結跨域組織與個人，開創臺灣 NFT
                結合公益、藝術、文化的新篇章。
              </p>
              <p className="text-gray-700">
                感謝VIII啡啡捐贈藝術資料庫 No.1-10給FAB DAO藝術銀行...
              </p>
            </div>
            {/* Read more button */}
            <button className="text-teal-600 font-medium mb-6">
              READ MORE
            </button>
            {/* Divider */}
            <div className="border-b border-gray-200 w-full mb-6"></div>
            {/* View on Explore */}
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <span>View on</span>
              <a href="#" className="text-teal-600 font-medium mx-1 flex items-center">
                Explore
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <span className="mx-2">Verified by</span>
              <span className="text-gray-800 font-medium">0x2914...29D2rg</span>
              <span className="mx-2">Verified on</span>
              <span className="text-gray-800 font-medium">May 01, 2025</span>
            </div>
            {/* Tags */}
            <div className="flex space-x-2 mb-8">
              {project.tags.map((tag, index) => <span key={index} className="px-4 py-1 rounded-full border border-gray-300 text-sm">
                  {tag}
                </span>)}
            </div>
            {/* Contributors section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Contributors (18)</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {[...Array(6)].map((_, i) => <div key={i} className="flex items-center">
                    <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center mr-2">
                      <span className="text-white text-xs">G</span>
                    </div>
                    <span className="text-gray-800">0x7723...D2ro2E</span>
                    <button className="ml-2">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>)}
              </div>
            </div>
            {/* Owners section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Owners (3)</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">1</span>
                    <span className="text-gray-800">0x7723...D2ro2E</span>
                    <button className="ml-2">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-gray-800 font-medium">98%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">2</span>
                    <span className="text-gray-800">0x7723...D2ro2E</span>
                    <button className="ml-2">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-gray-800 font-medium">0.12%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">3</span>
                    <span className="text-gray-800">0x7723...D2ro2E</span>
                    <button className="ml-2">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-gray-800 font-medium">0.08%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-[#0A2E2A] text-white p-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 mr-2">
                <svg viewBox="0 0 24 24" className="w-full h-full text-teal-400">
                  <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6.5A5.5,5.5 0 0,1 17.5,12A5.5,5.5 0 0,1 12,17.5A5.5,5.5 0 0,1 6.5,12A5.5,5.5 0 0,1 12,6.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </div>
              <div>
                <div className="text-sm text-teal-400">GreenSofa</div>
                <div className="text-lg font-semibold">Hypercerts</div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-400">
                  DISCORD
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  HACKMD
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex justify-between items-center mt-12 pt-6 border-t border-gray-700">
          <div className="flex items-center">
            <span className="text-sm mr-2">Powered by</span>
            <div className="font-bold flex items-center">
              <div className="w-6 h-6 mr-1">
                <svg viewBox="0 0 24 24" className="w-full h-full text-white">
                  <path fill="currentColor" d="M3,3H21V21H3V3M5,5V19H19V5H5Z" />
                </svg>
              </div>
              FAB DAO
            </div>
          </div>
          <div className="text-sm text-gray-400">
            ©FAB DAO. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>;
}