import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { XIcon, GlobeIcon, TwitterIcon, FacebookIcon, ExternalLinkIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { linkProjectsData } from '../data/linkprojects';
import { Project } from '../data/projects';

export function LinkProjectDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    id
  } = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  const handleBack = () => {
    if (location.key !== 'default') {
      navigate(-1);
    } else {
      navigate('/');
    }
  };
  useEffect(() => {
    const foundProject = linkProjectsData.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);
  if (loading) {
    return <div className="flex flex-col min-h-screen w-full bg-[#F5F3EE]">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-2xl text-[#1A3C40]">Loading...</div>
        </main>
        <Footer />
      </div>;
  }
  if (!project) {
    return <div className="flex flex-col min-h-screen w-full bg-[#F5F3EE]">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center">
          <div className="text-2xl text-[#1A3C40] mb-4">Project not found</div>
          <button onClick={handleBack} className="px-4 py-2 bg-[#1A3C40] text-white rounded-md hover:bg-[#113A36]">
            Back to Projects
          </button>
        </main>
        <Footer />
      </div>;
  }
  return <div className="flex flex-col min-h-screen w-full bg-[#F5F3EE]">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <button onClick={handleBack} className="inline-flex items-center text-teal-700 hover:underline mb-6">
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>
          <div className="h-auto max-w-7xl mx-auto pb-16">
            <div className="md:grid md:grid-cols-3 md:gap-4 lg:gap-8">
              <div className="md:col-span-2 rounded-3xl overflow-hidden bg-white shadow-sm">
                <div className="relative">
                  <img src={project.image} alt={project.name} className="w-full h-[180px] md:h-60 lg:h-[420px] object-cover object-top scale-[1.01] " />
                </div>
                <div className="p-6 sm:p-8">
                  <h1 className="text-3xl sm:text-3xl font-semibold text-[#113A36] tracking-tight">
                    {project.name}
                  </h1>
                  <div className="mt-6 space-y-4 text-[#113A36] leading-relaxed">
                    {project.description.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.work_scope.map((tag, index) => <span key={index} className="text-xs px-2 py-1 rounded border bg-gray-100 text-gray-800 border-gray-200">
                        {tag}
                      </span>)}
                  </div>
                </div>
              </div>
              <aside className="mt-8 md:mt-0 space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Link to Project
                  </h3>
                  <a href={project.exploreLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between text-teal-700 hover:text-teal-800 transition-colors">
                    <span className="text-sm font-medium">View Project</span>
                    <ExternalLinkIcon size={18} className="flex-shrink-0" />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}