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

export interface Minter {
  name: string;
  avatar: string;
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
  minter: Minter;
}

export const projectsData: Project[] = [{
  id: '44917272433563877177165448180993403912192-42220-0x16bA53B74c234C870c61EFC04cD418B8f2865959',
  name: 'Tamagochi at Riverside',
  image: 'https://app.hypercerts.org/_next/image?url=%2Fapi%2Fhypercerts%2F42220-0x16bA53B74c234C870c61EFC04cD418B8f2865959-44917272433563877177165448180993403912192%2Fimage&w=1080&q=75',
  org: 'greensofa.eth',
  timeline: '2023-03-01 → 2023-12-31',
  description: 'Project Title: Tamagochi at Riverside \nTimeline: March 2023 – December 2023 \nLocation: Huangxi River Corridor, Tianmu District, Taipei City, Taiwan\n\nSummary and Quantifiable results : \nThis project combines environmental education with Web3 tools to reconnect urban residents with the Huangxi River(Formal name: Southern Sulfur creek) in Taipei. In partnership with Formosa Art Bank DAO (FAB DAO), the Huangxi Environmental Education Programme (HEEP) engaged over 3,000 students and parents at Mingde Elementary School through a hands-on river corridor challenge and interactive NFT-based learning tools. Participants earned “Stream Guardian” badges and NFTs—such as a digital White-breasted Waterhen—by completing ecological missions, sparking curiosity and awareness of riparian biodiversity.\n\nBeyond the school, the project reached over 50,000 local residents and connected with 20+ online and offline communities through workshops, digital campaigns, and habitat restoration events.  It contributes to build public-private collatoration on watershed governace.Over 300 NFTs were issued as proof of participation (POAP)and engagement, tracking involvement and supporting long-term community stewardship.\nIn two pilot zones along the Huangxi, reduced dredging and vegetation removal allowed native species to return, and natural habitat to restore—monitored in part by students and community volunteers. This project demonstrates how combining civic action, education, and digital tools can restore ecological relationships and encourage sustainable urban watershed governance.\n\nTamagochi at Riverside NFT: https://akaswap.com/akaobj/14470\nHeart of the River Corridor POAP: https://akaswap.com/akaobj/14471',
  tags: ['FABDAO', 'ART'],
  contributors: [
    { id: '1', name: 'gimmychang.eth', avatar: 'GC' },
    { id: '2', name: 'frankhu.eth', avatar: 'FH' },
    { id: '3', name: 'Yian', avatar: 'YI' },
    { id: '4', name: 'Chi-Nung', avatar: 'CN' },
    { id: '5', name: 'Yu-Zen', avatar: 'YZ' },
    { id: '6', name: 'xtzfusion', avatar: 'XF' },
    { id: '7', name: 'Stanley', avatar: 'SL' },
    { id: '8', name: 'FAB DAO - GreenSofa team & FAB DAO - Hypercert lab team', avatar: 'FD' },
  ],
  owners: [
    { id: '1', name: 'greensofa.eth', percentage: '99%' },
    { id: '2', name: '0x0C62bDB70f167b720766E18e61FD9c50b7d19442', percentage: '1%' },
  ],
  exploreLink: 'https://celoscan.io/tx/0xfcb8f6e0b50ebce693ed923ffbd6d610712a50bfd58484c6cc7ba49b1a837834',
  minter: { name: 'greensofa.eth', avatar: 'GS' }
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
  exploreLink: 'https://hypercerts.org/',
  minter: { name: 'Minter Name', avatar: 'MN' }
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
  exploreLink: 'https://hypercerts.org/',
  minter: { name: 'Minter Name', avatar: 'MN' }
}];
