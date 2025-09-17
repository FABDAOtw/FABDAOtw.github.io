import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { Pagination } from './Pagination';
export function ProjectsSection() {
  const [activePage, setActivePage] = useState(1);
  // Sample project data
  const featuredProjects = [{
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
  }];
  const otherProjects = [{
    id: 5,
    name: 'Tamagochi at Riverside',
    image: 'https://app.hypercerts.org/_next/image?url=%2Fapi%2Fhypercerts%2F42220-0x16bA53B74c234C870c61EFC04cD418B8f2865959-44917272433563877177165448180993403912192%2Fimage&w=1080&q=75',
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
  }, {
    id: 7,
    name: 'Tamagochi at Riverside',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    org: '[Name of the org]',
    timeline: '2024/10/09 → 2024/10/9',
    description: '',
    tags: ['FABDAO', 'ART']
  }, {
    id: 8,
    name: 'Tamagochi at Riverside',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2564&q=80',
    org: '[Name of the org]',
    timeline: '2024/10/09 → 2024/10/9',
    description: '',
    tags: ['FABDAO', 'ART']
  }, {
    id: 9,
    name: 'Tamagochi at Riverside',
    image: 'https://images.unsplash.com/photo-1629392554711-1b3a44375322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    org: '[Name of the org]',
    timeline: '2024/10/09 → 2024/10/9',
    description: '',
    tags: ['FABDAO', 'ART']
  }, {
    id: 10,
    name: 'Tamagochi at Riverside',
    image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80',
    org: '[Name of the org]',
    timeline: '2024/10/09 → 2024/10/9',
    description: '',
    tags: ['FABDAO', 'ART']
  }];
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
      </div>
    </section>;
}