import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { XIcon, GlobeIcon, TwitterIcon, FacebookIcon } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
// Sample project data - in a real app, this would come from an API or database
const projectsData = [{
  id: 1,
  name: 'Tamagochi at Riverside',
  image: 'https://app.hypercerts.org/_next/image?url=%2Fapi%2Fhypercerts%2F42220-0x16bA53B74c234C870c61EFC04cD418B8f2865959-44917272433563877177165448180993403912192%2Fimage&w=1080&q=75',
  org: '[Name of the org]',
  timeline: '2024/10/09 → 2024/10/9',
  description: 'FAB DAO、多名 Formosa Art Bank DAO、為公益 NFT 藝品展覽、集結跨領域藝術家、嫁接臺灣 NFT 藝品公益、藝術、文化的新意義..',
  tags: ['FABDAO', 'ART']
}, {
  id: 2,
  name: 'FAB DAO | HC_KickOff',
  image: 'https://app.hypercerts.org/_next/image?url=%2Fapi%2Fhypercerts%2F10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-159932712452841077827786065492931059384320%2Fimage&w=1080&q=75',
  org: '超證實驗室',
  timeline: 'Feb 20, 2023 — Mar 31, 2023',
  description: '協助填寫 FAB DAO 超證申請書、研究與制定發行方式，並透過社群 AMA 達成共識。We established the FAB DAO HyperCert application form, formulated the mechanism and published it to our community through an AMA. FAB DAO 專注於非營利NFT鑄造鑄造與第三部門區塊鏈入口。集結組織與個人，打造公益、藝術、文化之Web3跨域社群。FAB DAO commits to the improvement of public good through Web3 ecosystems. Banner Image: Project % by artist Che-Yu Wu',
  tags: ['FABDAO', 'ART']
}, {
  id: 5,
  name: 'Tamagochi at Riverside',
  image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80',
  org: '[Name of the org]',
  timeline: '2024/10/09 → 2024/10/9',
  description: '',
  tags: ['FABDAO', 'ART']
}, {
  id: 6,
  name: 'Tamagochi at Riverside',
  image: 'https://images.unsplash.com/photo-1629392554711-1b3a44375322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
  org: '[Name of the org]',
  timeline: '2024/10/09 → 2024/10/9',
  description: '',
  tags: ['FABDAO', 'ART']
}];
export function ProjectDetail() {
  const {
    id
  } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate fetching project data
    const projectId = parseInt(id || '0', 10);
    const foundProject = projectsData.find(p => p.id === projectId);
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
          <Link to="/" className="px-4 py-2 bg-[#1A3C40] text-white rounded-md hover:bg-[#113A36]">
            Back to Projects
          </Link>
        </main>
        <Footer />
      </div>;
  }
  return <div className="flex flex-col min-h-screen w-full bg-[#F5F3EE]">
      <Header />
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          {/* Back button */}
          <Link to="/" className="inline-flex items-center text-teal-700 hover:underline mb-6">
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
          {/* Grid: Left card (image attached at top) + Right sidebar */}
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* LEFT COLUMN CARD */}
            <div className="lg:col-span-2 rounded-3xl overflow-hidden bg-white shadow-sm">
              {/* Cover image is ATTACHED to the top of the left column */}
              <div className="relative">
                <img src={project.image} alt={project.name} className="w-full h-72 lg:h-[420px] object-cover object-top outline outline-2 outline-white outline-offset-[-2px]" />
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
                  <span className="hidden sm:inline-block text-gray-300">
                    |
                  </span>
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
                  {project.description ? <p>{project.description}</p> : <>
                      <p>
                        FAB DAO、全名 Formosa Art Bank DAO、為公益 NFT
                        自治組織，集結跨域組織與個人， 開創臺灣 NFT
                        結合公益、藝術、文化的新篇章。
                      </p>
                      <p>
                        感謝VIII啡啡捐贈藝術資料庫 No.1-10給FAB DAO藝術銀行。
                      </p>
                      <p>
                        第三行FAB DAO、全名 Formosa Art Bank DAO、為公益 NFT
                        自治組織，集結跨域組織與個人， 開創臺灣 NFT
                        結合公益、藝術、文化的新篇章。
                      </p>
                      <p>
                        感謝VIII啡啡捐贈藝術資料庫 No.1-10給FAB DAO藝術銀行…
                      </p>
                    </>}
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
                  {project.tags.map((t: string, i: number) => <span key={i} className="px-3 py-1 rounded-full border border-gray-300 text-sm text-[#113A36] bg-white">
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
                    {project.org}
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
                      <span className="text-sm text-gray-500 w-4">
                        {idx + 1}
                      </span>
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
        </div>
      </main>
      <Footer />
    </div>;
}