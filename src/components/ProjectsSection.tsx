import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { Pagination } from './Pagination';
import { projectsData } from '../data/projects';
import { linkProjectsData } from '../data/linkprojects';

export function ProjectsSection() {
  const [activePage, setActivePage] = useState(1);
  const featuredProjects = projectsData.slice(0, 2);
  const otherProjects = projectsData.slice(2);

  return <section className="relative z-30 bg-[#F5F3EE] rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-6 md:px-[40px] py-[80px] md:py-[120px]">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-medium text-[#1A3C40]">
            Projects
          </h2>
          <div className="hidden space-x-2">
            <button className="bg-[#1A3C40] text-white px-3 py-1 rounded text-sm">
              ALL
            </button>
            <button className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">
              Tag 1
            </button>
            <button className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">
              Tag 2
            </button>
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-teal-600 mb-4">
            Featured
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-8 lg:mx-0">
            {featuredProjects.map(project => <Link key={project.id} to={`/project/${project.id}`} className="block">
                <FeaturedProjectCard project={project} />
              </Link>)}
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-teal-600 mb-4">
            Other projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-4 xl:gap-8">
            {otherProjects.map(project => <Link key={project.id} to={`/project/${project.id}`} className="block">
                <ProjectCard project={project} />
              </Link>)}
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-teal-600 mb-4">
            Link projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-4 xl:gap-8">
            {linkProjectsData.map(project => <Link key={project.id} to={`/linkproject/${project.id}`} className="block">
                <ProjectCard project={project as any} />
              </Link>)}
          </div>
        </div>
      </div>
    </section>;
}
