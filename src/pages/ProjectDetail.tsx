import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { XIcon, GlobeIcon, TwitterIcon, FacebookIcon } from 'lucide-react';
import { Footer } from '../components/Footer';
import { projectsData, Project } from '../data/projects';
export function ProjectDetail() {
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
    const foundProject = projectsData.find(p => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);
  if (loading) {
    return <div className="flex flex-col min-h-screen w-full bg-[#F5F3EE]">
        <main className="flex-1 flex items-center justify-center">
          <div className="text-2xl text-[#1A3C40]">Loading...</div>
        </main>
        <Footer />
      </div>;
  }
  if (!project) {
    return <div className="flex flex-col min-h-screen w-full bg-[#F5F3EE]">
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
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          {/* Back button */}
          <button onClick={handleBack} className="inline-flex items-center text-teal-700 hover:underline mb-6">
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </button>
          {/* Grid: Left card (image attached at top) + Right sidebar */}
          <div className="h-auto max-w-7xl mx-auto pb-16">
            {/* Grid: Left (content) + Right (sidebar) */}
            <div className="md:grid md:grid-cols-3 md:gap-4 lg:gap-8">
              {/* LEFT COLUMN CARD */}
              <div className="md:col-span-2 rounded-3xl overflow-hidden bg-white shadow-sm">
                <div className="relative">
                  <img src={project.image} alt={project.name} className="w-full h-[180px] md:h-60 lg:h-[420px] object-cover object-top scale-[1.01] " />
                </div>
                <div className="p-6 sm:p-8">
                  <h1 className="text-3xl sm:text-3xl font-semibold text-[#113A36] tracking-tight">
                    {project.name}
                  </h1>
                  <div className="mt-4 flex flex-wrap items-center gap-3 text-gray-600">
                    <div>
                      <span className="text-gray-500">Time of work</span>{' '}
                      <span className="font-semibold text-[#113A36]">
                        {project.timeline}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4 text-[#113A36] leading-relaxed">
                    {project.description.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="my-6 h-px bg-gray-200" />

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
                    {/* View on + Explore */}
                    <span className="inline-flex items-center whitespace-nowrap text-gray-600">
                      <span className="mr-2">View on</span>
                      <a href={project.exploreLink} className="text-teal-700 font-semibold inline-flex items-center hover:underline whitespace-nowrap">
                        Explore
                        <svg className="w-4 h-4 ml-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
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
                  <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {project.minter.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="text-gray-900 font-medium truncate">
                      {project.minter.name}
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Contributors ({project.contributors.length})
                  </h3>
                  <div className="mt-3 space-y-2">
                    {project.contributors.map((c, i) => <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {c.avatar}
                        </div>

                        <div className="flex-1 min-w-0">
                          <span className="text-sm text-gray-800">
                            {c.name}
                          </span>
                        </div>
                      </div>)}
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Owners ({project.owners.length})
                  </h3>
                  <div className="mt-3 space-y-2">
                    {project.owners.map((o, idx) => <div key={idx} className="flex items-center gap-1">
                        <span className="text-sm text-gray-500 w-4">
                          {idx + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className="text-sm text-gray-900 break-all">
                            {o.name}
                          </span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {o.percentage}
                        </span>
                      </div>)}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>;
}
