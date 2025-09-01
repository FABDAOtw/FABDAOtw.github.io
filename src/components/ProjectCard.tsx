import React, { useState } from 'react';
import { ProjectModal } from './ProjectModal';
interface Project {
  id: number;
  name: string;
  image: string;
  org: string;
  timeline: string;
  description: string;
  tags: string[];
}
interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({
  project
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return <>
      <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4 bg-teal-500 h-10 w-10 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-6 w-6 text-white">
              <path fill="currentColor" d="M21,10.5V6.75C21,5.79 20.21,5 19.25,5H4.75C3.79,5 3,5.79 3,6.75V10.5C3,11.46 3.79,12.25 4.75,12.25H19.25C20.21,12.25 21,11.46 21,10.5M5.75,10.5H4.75V6.75H5.75M9.25,10.5H7.25V6.75H9.25M12.75,10.5H10.75V6.75H12.75M16.25,10.5H14.25V6.75H16.25M19.25,10.5H17.25V6.75H19.25M21,17.25V13.5C21,12.54 20.21,11.75 19.25,11.75H4.75C3.79,11.75 3,12.54 3,13.5V17.25C3,18.21 3.79,19 4.75,19H19.25C20.21,19 21,18.21 21,17.25M5.75,17.25H4.75V13.5H5.75M9.25,17.25H7.25V13.5H9.25M12.75,17.25H10.75V13.5H12.75M16.25,17.25H14.25V13.5H16.25M19.25,17.25H17.25V13.5H19.25" />
            </svg>
          </div>
        </div>
        <div className="p-4 cursor-pointer hover:bg-gray-50 transition-colors duration-200" onClick={openModal}>
          <div className="text-sm text-gray-600 mb-1">{project.org}</div>
          <h3 className="font-bold text-lg text-[#1A3C40] mb-2">
            {project.name}
          </h3>
          <div className="text-sm text-gray-600 mb-2">
            <span className="font-medium">Timeline:</span> {project.timeline}
          </div>
          {project.description && <p className="text-sm text-gray-700 mb-3">{project.description}</p>}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded border border-gray-200">
                {tag}
              </span>)}
          </div>
        </div>
      </article>
      {isModalOpen && <ProjectModal project={project} onClose={closeModal} />}
    </>;
}