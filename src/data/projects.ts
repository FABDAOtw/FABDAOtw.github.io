export interface Contributor {
  id: string;
  name: string;
  avatar: string;
}

export interface Owner {
  id: string;
  name: string;
  percentage: string;
}

export interface Project {
  id: string;
  name: string;
  image: string;
  org: string;
  timeline: string;
  description: string;
  tags: string[];
  contributors: Contributor[];
  owners: Owner[];
  exploreLink: string;
}

export const projectsData: Project[] = [{
  id: '44917272433563877177165448180993403912192-42220-0x16bA53B74c234C870c61EFC04cD418B8f2865959',
  name: 'Tamagochi at Riverside',
  image: 'https://app.hypercerts.org/_next/image?url=%2Fapi%2Fhypercerts%2F42220-0x16bA53B74c234C870c61EFC04cD418B8f2865959-44917272433563877177165448180993403912192%2Fimage&w=1080&q=75',
  org: '[Name of the org]',
  timeline: '2023-03-01 → 2023-12-31',
  description: 'Beyond the school, the project reached over 50,000 local residents and connected with 20+ online and offline communities through workshops, digital campaigns, and habitat restoration events.',
  tags: ['FABDAO', 'ART'],
  contributors: [
    { id: '1', name: '0x7723...D2ro2E', avatar: 'GS' },
    { id: '2', name: '0x1234...567890', avatar: 'AB' },
    { id: '3', name: '0x5678...901234', avatar: 'CD' },
    { id: '4', name: '0x9012...345678', avatar: 'EF' },
    { id: '5', name: '0x3456...789012', avatar: 'GH' },
    { id: '6', name: '0x7890...123456', avatar: 'IJ' },
  ],
  owners: [
    { id: '1', name: '0x7723...D2ro2E', percentage: '98%' },
    { id: '2', name: '0x1234...567890', percentage: '1.5%' },
    { id: '3', name: '0x5678...901234', percentage: '0.5%' },
  ],
  exploreLink: 'https://hypercerts.org/'
}, {
  id: '159932712452841077827786065492931059384320-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'FAB DAO | HC_KickOff',
  image: 'https://app.hypercerts.org/_next/image?url=%2Fapi%2Fhypercerts%2F10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-159932712452841077827786065492931059384320%2Fimage&w=1080&q=75',
  org: 'Hypercerts Lab',
  timeline: '2023-03-01 → 2023-12-31',
  description: 'We established the FAB DAO HyperCert application form, formulated the mechanism and published it to our community through an AMA. FAB DAO commits to the improvement of public good through Web3 ecosystems. Banner Image: Project % by artist Che-Yu Wu.',
  tags: ['FABDAO', 'ART'],
  contributors: [
    { id: '1', name: '0x7723...D2ro2E', avatar: 'GS' },
  ],
  owners: [
    { id: '1', name: '0x7723...D2ro2E', percentage: '100%' },
  ],
  exploreLink: 'https://hypercerts.org/'
}, {
  id: '18420165086164240904199394249496476822536192-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'Shoutout X FABDAO | 來一 shot',
  image: 'https://app.hypercerts.org/_next/image?url=%2Fapi%2Fhypercerts%2F10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-18420165086164240904199394249496476822536192%2Fimage&w=1080&q=75',
  org: '[Name of the org]',
  timeline: '2023-11-01 → 2023-12-31',
  description: 'The megaphone "Shout 鼠", co-created by da0 and FAB DAO, officially launched on Discord on 2023/11/21. This marks the first cross-community collaboration between da0 and FAB DAO in expressing gratitude loudly. We will continue to offer various forms of Shoutout megaphones for different communities and use cases, documenting each significant moment and allowing Shoutout to become an achievement backpack that users carry with them.',
  tags: ['FABDAO', 'ART'],
  contributors: [],
  owners: [],
  exploreLink: 'https://hypercerts.org/'
}];
