import React, { useEffect } from 'react';
import { XIcon } from 'lucide-react';
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
  return <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="relative">
          <div className="h-64 md:h-80 overflow-hidden">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          </div>
          <button onClick={onClose} className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100" aria-label="Close modal">
            <XIcon size={20} className="text-gray-700" />
          </button>
          <div className="absolute top-4 left-4 bg-teal-500 h-12 w-12 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-7 w-7 text-white">
              <path fill="currentColor" d="M21,10.5V6.75C21,5.79 20.21,5 19.25,5H4.75C3.79,5 3,5.79 3,6.75V10.5C3,11.46 3.79,12.25 4.75,12.25H19.25C20.21,12.25 21,11.46 21,10.5M5.75,10.5H4.75V6.75H5.75M9.25,10.5H7.25V6.75H9.25M12.75,10.5H10.75V6.75H12.75M16.25,10.5H14.25V6.75H16.25M19.25,10.5H17.25V6.75H19.25M21,17.25V13.5C21,12.54 20.21,11.75 19.25,11.75H4.75C3.79,11.75 3,12.54 3,13.5V17.25C3,18.21 3.79,19 4.75,19H19.25C20.21,19 21,18.21 21,17.25M5.75,17.25H4.75V13.5H5.75M9.25,17.25H7.25V13.5H9.25M12.75,17.25H10.75V13.5H12.75M16.25,17.25H14.25V13.5H16.25M19.25,17.25H17.25V13.5H19.25" />
            </svg>
          </div>
        </div>
        <div className="p-6 md:p-8">
          <div className="mb-6">
            <div className="text-md text-gray-600 mb-1">{project.org}</div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A3C40] mb-2">
              {project.name}
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => <span key={index} className="text-xs px-3 py-1 bg-gray-100 rounded-full border border-gray-200">
                  {tag}
                </span>)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="col-span-2">
              <h3 className="font-medium text-lg text-[#1A3C40] mb-3">
                About this project
              </h3>
              <p className="text-gray-700">
                {project.description || 'FAB DAO、多名 Formosa Art Bank DAO、為公益 NFT 藝品展覽、集結跨領域藝術家、嫁接臺灣 NFT 藝品公益、藝術、文化的新意義。 FAB DAO、多名 Formosa Art Bank DAO、為公益 NFT 藝品展覽、集結跨領域藝術家、嫁接臺灣 NFT 藝品公益、藝術、文化的新意義。'}
              </p>
            </div>
            <div>
              <div className="bg-[#F5F5F5] p-4 rounded-lg">
                <h3 className="font-medium text-lg text-[#1A3C40] mb-3">
                  Details
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm text-gray-500">Timeline</div>
                    <div className="font-medium">{project.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Location</div>
                    <div className="font-medium">Taipei, Taiwan</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Impact</div>
                    <div className="font-medium">Cultural Development</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="font-medium text-lg text-[#1A3C40] mb-3">
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[1, 2, 3, 4].map(item => <div key={item} className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                  <img src={project.image} alt={`Gallery image ${item}`} className="w-full h-full object-cover" />
                </div>)}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg text-[#1A3C40] mb-3">
              Hypercerts
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-teal-500 h-8 w-8 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
                      <path fill="currentColor" d="M21,10.5V6.75C21,5.79 20.21,5 19.25,5H4.75C3.79,5 3,5.79 3,6.75V10.5C3,11.46 3.79,12.25 4.75,12.25H19.25C20.21,12.25 21,11.46 21,10.5M5.75,10.5H4.75V6.75H5.75M9.25,10.5H7.25V6.75H9.25M12.75,10.5H10.75V6.75H12.75M16.25,10.5H14.25V6.75H16.25M19.25,10.5H17.25V6.75H19.25M21,17.25V13.5C21,12.54 20.21,11.75 19.25,11.75H4.75C3.79,11.75 3,12.54 3,13.5V17.25C3,18.21 3.79,19 4.75,19H19.25C20.21,19 21,18.21 21,17.25M5.75,17.25H4.75V13.5H5.75M9.25,17.25H7.25V13.5H9.25M12.75,17.25H10.75V13.5H12.75M16.25,17.25H14.25V13.5H16.25M19.25,17.25H17.25V13.5H19.25" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Hypercert #001</div>
                    <div className="text-xs text-gray-500">
                      Issued on 2023/10/15
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  This hypercert represents contributions to cultural
                  development in Taiwan through art exhibitions.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-teal-500 h-8 w-8 rounded-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
                      <path fill="currentColor" d="M21,10.5V6.75C21,5.79 20.21,5 19.25,5H4.75C3.79,5 3,5.79 3,6.75V10.5C3,11.46 3.79,12.25 4.75,12.25H19.25C20.21,12.25 21,11.46 21,10.5M5.75,10.5H4.75V6.75H5.75M9.25,10.5H7.25V6.75H9.25M12.75,10.5H10.75V6.75H12.75M16.25,10.5H14.25V6.75H16.25M19.25,10.5H17.25V6.75H19.25M21,17.25V13.5C21,12.54 20.21,11.75 19.25,11.75H4.75C3.79,11.75 3,12.54 3,13.5V17.25C3,18.21 3.79,19 4.75,19H19.25C20.21,19 21,18.21 21,17.25M5.75,17.25H4.75V13.5H5.75M9.25,17.25H7.25V13.5H9.25M12.75,17.25H10.75V13.5H12.75M16.25,17.25H14.25V13.5H16.25M19.25,17.25H17.25V13.5H19.25" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Hypercert #002</div>
                    <div className="text-xs text-gray-500">
                      Issued on 2023/11/20
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  This hypercert recognizes the project's contribution to public
                  awareness and education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}