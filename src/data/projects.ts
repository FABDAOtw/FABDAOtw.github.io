export interface Project {
  id: string;
  name: string;
  image: string;
  org: string;
  timeline: string;
  description: string;
  tags: string[];
}

export const projectsData: Project[] = [{
  id: '44917272433563877177165448180993403912192-42220-0x16bA53B74c234C870c61EFC04cD418B8f2865959',
  name: 'Tamagochi at Riverside',
  image: 'https://app.hypercerts.org/_next/image?url=%2Fapi%2Fhypercerts%2F42220-0x16bA53B74c234C870c61EFC04cD418B8f2865959-44917272433563877177165448180993403912192%2Fimage&w=1080&q=75',
  org: '[Name of the org]',
  timeline: '2023-03-01 → 2023-12-31',
  description: 'Beyond the school, the project reached over 50,000 local residents and connected with 20+ online and offline communities through workshops, digital campaigns, and habitat restoration events.',
  tags: ['FABDAO', 'ART']
}, {
  id: '159932712452841077827786065492931059384320-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'FAB DAO | HC_KickOff',
  image: 'https://app.hypercerts.org/_next/image?url=%2Fapi%2Fhypercerts%2F10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-159932712452841077827786065492931059384320%2Fimage&w=1080&q=75',
  org: 'Hypercerts Lab',
  timeline: '2023-03-01 → 2023-12-31',
  description: 'We established the FAB DAO HyperCert application form, formulated the mechanism and published it to our community through an AMA. FAB DAO commits to the improvement of public good through Web3 ecosystems. Banner Image: Project % by artist Che-Yu Wu.',
  tags: ['FABDAO', 'ART']
}, {
  id: '18420165086164240904199394249496476822536192-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'Shoutout X FABDAO | 來一 shot',
  image: 'https://app.hypercerts.org/_next/image?url=%2Fapi%2Fhypercerts%2F10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-18420165086164240904199394249496476822536192%2Fimage&w=1080&q=75',
  org: '[Name of the org]',
  timeline: '2023-11-01 → 2023-12-31',
  description: 'The megaphone "Shout 鼠", co-created by da0 and FAB DAO, officially launched on Discord on 2023/11/21. This marks the first cross-community collaboration between da0 and FAB DAO in expressing gratitude loudly. We will continue to offer various forms of Shoutout megaphones for different communities and use cases, documenting each significant moment and allowing Shoutout to become an achievement backpack that users carry with them.',
  tags: ['FABDAO', 'ART']
}];
