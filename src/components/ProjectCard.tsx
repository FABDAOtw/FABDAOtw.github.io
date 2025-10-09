import React from 'react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({
  project
}: ProjectCardProps) {
  return <div className="group relative isolate overflow-hidden rounded-2xl md:rounded-3xl xl:rounded-[40px] 
                border border-gray-100 shadow-sm transition-all duration-300 cursor-pointer
                bg-white min-w-[229px] xl:max-w-[456px]">
      {/* Image: give a teal backdrop so luminosity blend has something to mix with */}
      <div className="relative h-40 md:h-28 lg:h-48 overflow-hidden bg-[#0A2E2A] scale-[1.01]">
        <img src={project.image} alt={project.name} className="
            w-full h-full object-cover object-top
            transition-all duration-500 ease-out
            group-hover:mix-blend-luminosity
            group-hover:opacity-90
            group-hover:scale-[1.01]
            group-hover:contrast-110
            group-hover:saturate-0
            group-hover:grayscale-[15%]
          " />
      </div>
      {/* Content panel: flips to teal on hover */}
      <div className="
          p-4 px-4 md:px-5 lg:px-6
          transition-colors duration-300
          group-hover:bg-[#0A2E2A]
        ">
        <div className="text-sm text-gray-600 mb-1 transition-colors group-hover:text-white/80">
          {project.org}
        </div>
        <h3 className="font-bold text-lg text-[#1A3C40] mb-2 transition-colors group-hover:text-white">
          {project.name}
        </h3>
        <div className="text-sm text-gray-600 mb-2 transition-colors group-hover:text-white/80">
          <span className="font-medium transition-colors group-hover:text-[#29C4A9]">
            Timeline:
          </span>{' '}
          {project.timeline}
        </div>
        {project.description && <p className="text-sm leading-5 text-gray-700 mb-5 line-clamp-3 min-h-[60px] transition-colors group-hover:text-white/80">
            {project.description}
          </p>}
        <div className="flex flex-wrap gap-2">
          {project.work_scope.map((work_scope, index) => <span key={index} className="
                text-xs px-2 py-1 rounded border
                bg-gray-100 text-gray-800 border-gray-200
                transition-colors
                group-hover:bg-transparent
                group-hover:text-white
                group-hover:border-white/40
              ">
              {work_scope}
            </span>)}
        </div>
      </div>
    </div>;
}