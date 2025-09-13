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
  featured?: boolean;
}
export function ProjectCard({
  project,
  featured = false
}: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // Apply different styles based on featured status
  const cardClasses = featured ? 'bg-white rounded-2xl md:rounded-3xl xl:rounded-[40px] overflow-hidden shadow-sm border border-gray-100 min-w-[271px] xl:min-w-[654px] max-w-[1000px]' : 'bg-white rounded-2xl md:rounded-3xl xl:rounded-[40px] overflow-hidden shadow-sm border border-gray-100 min-w-[229px] md:min-w-[261px] xl:min-w-[384px] max-w-[410px] xl:max-w-[456px]';
  return <>
      <article className={cardClasses}>
        <div className="relative h-48 overflow-hidden">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover object-top" />
        </div>
        <div className="p-4 px-4 md:px-5 lg:px-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200" onClick={openModal}>
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