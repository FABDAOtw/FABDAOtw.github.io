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
  work_scope: string[];
  contributors: Contributor[];
  owners: Owner[];
  exploreLink: string;
  minter: Minter;
}

export const projectsData: Project[] = [{
  id: '44917272433563877177165448180993403912192-42220-0x16bA53B74c234C870c61EFC04cD418B8f2865959',
  name: 'Tamagochi at Riverside',
  image: '/image/44917272433563877177165448180993403912192-42220-0x16bA53B74c234C870c61EFC04cD418B8f2865959.png',
  org: 'Huangxi River',
  timeline: '2023-03-01 → 2023-12-31',
  description: 'Project Title: Tamagochi at Riverside \nTimeline: March 2023 – December 2023 \nLocation: Huangxi River Corridor, Tianmu District, Taipei City, Taiwan\n\nSummary and Quantifiable results : \nThis project combines environmental education with Web3 tools to reconnect urban residents with the Huangxi River(Formal name: Southern Sulfur creek) in Taipei. In partnership with Formosa Art Bank DAO (FAB DAO), the Huangxi Environmental Education Programme (HEEP) engaged over 3,000 students and parents at Mingde Elementary School through a hands-on river corridor challenge and interactive NFT-based learning tools. Participants earned “Stream Guardian” badges and NFTs—such as a digital White-breasted Waterhen—by completing ecological missions, sparking curiosity and awareness of riparian biodiversity.\n\nBeyond the school, the project reached over 50,000 local residents and connected with 20+ online and offline communities through workshops, digital campaigns, and habitat restoration events.  It contributes to build public-private collatoration on watershed governace.Over 300 NFTs were issued as proof of participation (POAP)and engagement, tracking involvement and supporting long-term community stewardship.\nIn two pilot zones along the Huangxi, reduced dredging and vegetation removal allowed native species to return, and natural habitat to restore—monitored in part by students and community volunteers. This project demonstrates how combining civic action, education, and digital tools can restore ecological relationships and encourage sustainable urban watershed governance.\n\nTamagochi at Riverside NFT: https://akaswap.com/akaobj/14470\nHeart of the River Corridor POAP: https://akaswap.com/akaobj/14471',
  work_scope: ['Community', 'Ethereum Localism', 'GreenSofa', 'FAB DAO', 'Greenpill'],
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
  image: '/image/159932712452841077827786065492931059384320-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07.webp',
  org: 'Hypercerts Lab',
  timeline: '2023-02-20 → 2023-03-31',
  description: '【 FAB DAO | 超證實驗室_啟動貢獻 | HyperCerts_KickOff 】\n 協助填寫 FAB DAO 超證申請書、研究與制定發行方式，並透過社群 AMA 達成共識。\n We established the FAB DAO HyperCert application form, formulated the mechanism and published it to our community through an AMA.\n FAB DAO 專注於非營利NFT鑄造鑄造與第三部門區塊鏈入口。集結組織與個人，打造公益、藝術、文化之Web3跨域社群。\n FAB DAO commits to the improvement of public good through Web3 ecosystems.\n Banner Image: Project % by artist Che-Yu Wu',
  work_scope: ['超證實驗室_啟動及完成申請書', 'FABDAO'],
  contributors: [
    { id: '1', name: 'FrankHu.eth | 0x5fD15ef419c907717362fA82B8C364a3959f2BAc', avatar: 'FH' },
    { id: '2', name: 'chubbytank.eth | 0x740a92667Afbe58BD1cF086625951f9a7197D2eE', avatar: 'CT' },
    { id: '3', name: 'Swift Evo | 0xB2206f941A5206B55BFA33E665687523A8bcEd80', avatar: 'SE' },
    { id: '4', name: 'MossEW | 0x5d3f7C09c0132C2c5A78ec2E654b9068f5550954', avatar: 'ME' },
    { id: '5', name: 'Gimmy | 0xA90626f3Ed8E2DA950EDfd3b89B72DB719e16F1A', avatar: 'GM' },
    { id: '6', name: 'JchenforAKA | 0x04AcA7E545EeEB3278F34C77a7C23f5130bB9FD1', avatar: 'JA' },
    { id: '7', name: 'noahyeh.eth | 0x15c7281842A45465B4cbb8F89111d99e36e5bab8', avatar: 'NY' },
  ],
  owners: [
    { id: '1', name: '0x5fD15ef419c907717362fA82B8C364a3959f2BAc', percentage: '33%' },
    { id: '2', name: 'chubbytank.eth', percentage: '11%' },
    { id: '3', name: 'gimmy.eth', percentage: '11%' },
    { id: '4', name: 'swiftevo.eth', percentage: '11%' },
    { id: '5', name: 'noahyeh.eth', percentage: '11%' },
  ],
  exploreLink: 'https://explorer.optimism.io/tx/0x554a4903632fb893dace3ca9c08c2dc314d49b65f474ae35debc9704caf95111',
  minter: { name: 'FrankHu.eth', avatar: 'FH' }
}, {
  id: '18295621739871177426571799143176449657143296-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'Shoutout X FABDAO | 來一 shot',
  image: '/image/18295621739871177426571799143176449657143296-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07.webp',
  org: 'Shoutout',
  timeline: '2023-01-01 → 2023-10-31',
  description: 'Shoutout (discord version) 是 da0 與 FAB DAO 合作的感謝大聲公，也是一份去中心化身份的履歷。應用於不同社群，謄錄對社群貢獻者的感謝，與社群互動的重要時刻。\n 緣起：da0 與 FAB DAO 兩個社群的許多成員經常交流互動，於今年(2023)9月搭起了合作橋梁，嘗試共同打造Discord版紀錄機器人。\n da0/Shoutout: 昶惟, Noah, Lucky, Peixing, Weijen, Tofus, Matt\n FAB DAO 超證小組: Chubbytank, Stanley, Kay, Frank, Yian, Danny\n 彈性參與者: Denkeni, Zoey, Gim GM\n “Shoutout (Discord version)” is a thank-you loudspeaker made by da0 and FAB DAO in partnership as well as a decentralized résumé of identity. It is used in a variety of communities to document expressions of gratitude to community contributors and noteworthy moments of community engagement.\n Members of da0 and FAB DAO communicate often in various online and offline activities. Since September 2023, da0 and FAB DAO have been working together to develop the Shoutout bot in Discord version to amplify the impact.                                       --- Issuer: chubbytank.eth',
  work_scope: ['來一 shot'],
  contributors: [
    { id: '1', name: '0xabcb252Df3644f118B2bB286241a7234B63b057c', avatar: '0X' },
    { id: '2', name: 'noahyeh.eth', avatar: 'NY' },
    { id: '3', name: '0xFe70E739C44615A500EC4BfC95563fe9c40BBC5f', avatar: '0X' },
    { id: '4', name: '0xaFCcA66cA8737FE647B7E94CB1a0891a72ab3AE5', avatar: '0X' },
    { id: '5', name: '0x7CD7D564c2BfA56A745E89204C457E1205595348', avatar: '0X' },
    { id: '6', name: '0xtofus.eth', avatar: 'TF' },
    { id: '7', name: 'mattlee46.eth', avatar: '46' },
    { id: '8', name: 'chubbytank.eth', avatar: 'CT' },
    { id: '9', name: 'stanleyleo.eth', avatar: 'SL' },
    { id: '10', name: '0x1e6ED99ECF3C5Fbaae4faE8a183d925393cc38FD', avatar: '0X' },
    { id: '11', name: '0x5fD15ef419c907717362fA82B8C364a3959f2BAc', avatar: '0X' },
    { id: '12', name: 'yianlin.eth', avatar: 'YL' },
    { id: '13', name: 'smallbe.eth', avatar: 'SB' },
    { id: '14', name: 'denkeni.eth', avatar: 'DK' },
  ],
  owners: [
    { id: '1', name: 'chubbytank.eth', percentage: '7%' },
    { id: '2', name: '0xabcb252Df3644f118B2bB286241a7234B63b057c', percentage: '7%' },
    { id: '3', name: '0xtofus.eth', percentage: '7%' },
    { id: '4', name: 'theboldzoey.eth', percentage: '1%' },
    { id: '5', name: '0x5fD15ef419c907717362fA82B8C364a3959f2BAc', percentage: '7%' },
    { id: '6', name: '0xaFCcA66cA8737FE647B7E94CB1a0891a72ab3AE5', percentage: '7%' },
    { id: '7', name: 'mattlee46.eth', percentage: '7%' },
    { id: '8', name: 'stanleyleo.eth', percentage: '7%' },
    { id: '9', name: 'smallbe.eth', percentage: '7%' },
    { id: '10', name: '0xFe70E739C44615A500EC4BfC95563fe9c40BBC5f', percentage: '7%' },
  ],
  exploreLink: 'https://explorer.optimism.io/tx/0x987eca3e1ef321c9af73711bb3437a1bad9d3cf131939dead455ac6ddde625c3',
  minter: { name: 'chubbytank.eth', avatar: 'CT' }
}, {
  id: '18420165086164240904199394249496476822536192-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'Shoutout X FABDAO | 第二 shot',
  image: '/image/18420165086164240904199394249496476822536192-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07.webp',
  org: 'Shoutout',
  timeline: '2023-11-01 → 2023-12-31',
  description: 'da0 與 FAB DAO 共同打造的感謝大聲公「Shout 鼠」，於 2023/11/21 正式上線 Discord，是 da0 感謝大聲公的首次跨社群合作案例。 我們將持續為不同社群、使用場境提供不同形式的 Shoutout 感謝大聲公，謄寫每個重要時刻，也讓 Shoutout 成為每位用戶帶著走的成就背包。\n\n專案展望、心得：\n\n Yian：兩邊社群一起完成的專業合作！\n昶惟：希望大家從這個專案獲得正向的力量。\nPeixing：用 Shoutout 捕捉大家投入的時刻超讚！\nChubby：第一階段過後都是未知的領域，做出符合想像的 DID 吧！\nDanny：偉大的願景也是從最小可行性產品開始的，Keep going!\nKay：期待 SO 以多樣形式，成為每個人自己擁有的成就背包。\nLucky：Play as art, art as play.\nStanley：樂見一群人一起往前邁步。\nThe megaphone "Shout 鼠", co-created by da0 and FAB DAO, officially launched on Discord on 2023/11/21. This marks the first cross-community collaboration between da0 and FAB DAO in expressing gratitude loudly. We will continue to offer various forms of Shoutout megaphones for different communities and use cases, documenting each significant moment and allowing Shoutout to become an achievement backpack that users carry with them.\n\nIssuer: chubbytank.eth',
  work_scope: ['Shoutout', 'Playground', '第二 shot'],
  contributors: [
    { id: '1', name: '0xabcb252Df3644f118B2bB286241a7234B63b057c', avatar: '0X' },
    { id: '2', name: '0x8D286C2B4a09b877781aA500A3EBa5a4D14Fb7eB', avatar: '0X' },
    { id: '3', name: 'chubbytank.eth', avatar: 'CT' },
    { id: '4', name: '0xFe70E739C44615A500EC4BfC95563fe9c40BBC5f', avatar: '0X' },
    { id: '5', name: '0x6234bdfc6EB30D7e42eFFE9194b3502d347a10c9', avatar: '0X' },
    { id: '6', name: 'stanleyleo.eth', avatar: 'SL' },
    { id: '7', name: 'yianlin.eth', avatar: 'YL' },
    { id: '8', name: 'mashbean.eth', avatar: 'MB' },
    { id: '9', name: '0x779A8580cdEd1Be8a052dE3F2CFEe2B426e4C930', avatar: '0X' },
    { id: '10', name: '0xaFCcA66cA8737FE647B7E94CB1a0891a72ab3AE5', avatar: '0X' },
    { id: '11', name: 'terrycheng.eth', avatar: 'TC' },
    { id: '12', name: 'swiftevo.eth', avatar: 'SE' },
    { id: '13', name: '0x8D2c159f6aE11900caAd46CBFE46674629EF3A4b', avatar: '0X' },
    { id: '14', name: '0x2c5f6ac6bE2E5A25fFc667984088E7b979f52267', avatar: '0X' },
    { id: '15', name: 'arttseng.eth', avatar: 'AT' },
    { id: '16', name: 'resad.eth', avatar: 'RS' },
    { id: '17', name: 'szutung.eth', avatar: 'ST' },
    { id: '18', name: 'poppinwindtw.eth', avatar: 'PW' },
    { id: '19', name: '0x3b058bdDA56393bC5e23a915A382d9f199fe510d', avatar: '0X' },
    { id: '20', name: '0xc6eF4479D35de78D273C32BEc247FA94ff2E0aB0', avatar: '0X' },
    { id: '21', name: '0xB4320e003b382223187a521361B64f45255b716F', avatar: '0X' },
    { id: '22', name: '0x59a66B742C4d1a0F1d3814D98C933ee34C3Af9f6', avatar: '0X' },
  ],
  owners: [
    { id: '1', name: 'chubbytank.eth', percentage: '10%' },
    { id: '2', name: '0xabcb252Df3644f118B2bB286241a7234B63b057c', percentage: '20%' },
    { id: '3', name: 'poppinwindtw.eth', percentage: '<1%' },
    { id: '4', name: '0xabcb252Df3644f118B2bB286241a7234B63b057c', percentage: '<1%' },
    { id: '5', name: 'theboldzoey.eth', percentage: '<1%' },
    { id: '6', name: 'szutung.eth', percentage: '<1%' },
    { id: '7', name: '0xaFCcA66cA8737FE647B7E94CB1a0891a72ab3AE5', percentage: '9%' },
    { id: '8', name: '0x8D286C2B4a09b877781aA500A3EBa5a4D14Fb7eB', percentage: '5%' },
    { id: '9', name: '0xFe70E739C44615A500EC4BfC95563fe9c40BBC5f', percentage: '10%' },
    { id: '10', name: '0x59a66B742C4d1a0F1d3814D98C933ee34C3Af9f6', percentage: '<1%' },
    { id: '11', name: 'swiftevo.eth', percentage: '<1%' },
    { id: '12', name: 'arttseng.eth', percentage: '<1%' },
    { id: '13', name: '0x2c5f6ac6bE2E5A25fFc667984088E7b979f52267', percentage: '<1%' },
    { id: '14', name: 'stanleyleo.eth', percentage: '8%' },
  ],
  exploreLink: 'https://explorer.optimism.io/tx/0x40c7bde258f288bae7367ca8a5c44fc9e70224a11966ff2aa38cc15406807c21',
  minter: { name: 'chubbytank.eth', avatar: 'CT' }
}, {
  id: '18433095816107236565811002484578884014571520-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'FAB DAO｜ALR_Kick Off',
  image: '/image/18433095816107236565811002484578884014571520-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07.webp',
  org: 'FAB DAO',
  timeline: '2023-03-15 → 2023-07-31',
  description: '【 FAB DAO｜行動客廳_啟動貢獻｜Action Living Room_Kick Off 】\nFAB DAO 行動客廳小組的組建成員。一同啟動小組、尋找共識、進行行動客廳的前期規劃，讓行動客廳開始運作，實踐 FIP-1 並提出 FIP-2 內容。 The initiating members of the FAB DAO Action Living Room team. Kick off the group together, seek consensus, conduct preliminary planning for the Action Living Room, start its operation, implement FIP-1, and propose the content for FIP-2.\nFAB DAO（Formosa Art Bank DAO）專注於非營利 NFT 鑄造與第三部門區塊鏈入口。集結組織與個人，打造公益、藝術、文化之Web3跨域社群。 FAB DAO commits to the improvement of public good through Web3 ecosystems.\n banner image: Project % by artist Jin-Yao Lin',
  work_scope: ['FAB DAO', '行動客廳'],
  contributors: [
    { id: '1', name: '偷偷 resad.eth', avatar: 'RS' },
    { id: '2', name: '青苔 yianlin.eth', avatar: 'YL' },
    { id: '3', name: '芃蕙0xaf6a0d7534bbd0b2b197a1633aab4f59c7be9ff0', avatar: '0X' },
    { id: '4', name: 'Stanley 0x3DB6B5908cA5bC2b3a302980ab299C1139BbB699', avatar: 'SL' },
    { id: '5', name: '阿觀 0x16d189335CD0EeD3779949acb87DCD9588be71C7', avatar: '0X' },
  ],
  owners: [
    { id: '1', name: 'stanleyleo.eth', percentage: '20%' },
  ],
  exploreLink: 'https://explorer.optimism.io/tx/0x47413f45022465f03a5b1ef5e7b3516c886130615eaf461381e2b9c74358d464',
  minter: { name: 'yianlin.eth', avatar: 'YL' }
},
{
  id: '18666189237448079413283414090669645239418880-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-18666189237448079413283414090669645239418880',
  name: '捐贈群島資料庫 No.1~10給FAB DAO藝術銀行',
  image: '/image/18666189237448079413283414090669645239418880-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-18666189237448079413283414090669645239418880.png',
  org: 'Art Bank',
  timeline: '2024-10-08 → 2024-10-09',
  description: 'FAB DAO，全名 Formosa Art Bank DAO，為公益 NFT 自治組織，集結跨域組織與個人，開創臺灣 NFT 結合公益、藝術、文化的新篇章。\n\n感謝Yii慷慨捐贈群島資料庫 No.1~10給FAB DAO藝術銀行',
  work_scope: ['fabdao', 'nft', '群島資料庫', '數位荒原'],
  contributors: [
    { id: '1', name: 'yii', avatar: 'YI' },
    { id: '2', name: 'fabdao artbank', avatar: 'FA' },
  ],
  owners: [
    { id: '1', name: '0x2c5f6ac6bE2E5A25fFc667984088E7b979f52267', percentage: '100%' },
  ],
  exploreLink: 'https://explorer.optimism.io/tx/0xed0b968e26df9f416f3b9ab9ca9fb7d22ff63389bd459c923660e3c8ffa488af',
  minter: { name: 'arttseng.eth', avatar: 'AT' }
},
{
  id: '18665848955081158474819950716062213471207424-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-18666189237448079413283414090669645239418880',
  name: 'FAB DAO第二期購藏執行',
  image: '/image/18665848955081158474819950716062213471207424-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-18666189237448079413283414090669645239418880.png',
  org: 'Art Bank',
  timeline: '2024-08-06 → 2024-10-06',
  description: 'FAB DAO，全名 Formosa Art Bank DAO，為公益 NFT 自治組織，集結跨域組織與個人，開創臺灣 NFT 結合公益、藝術、文化的新篇章。\n\n使用藝術家捐贈之Tezos資金進行購藏實驗，此為第二期',
  work_scope: ['fabdao', 'artbankm藝術銀行', 'nft'],
  contributors: [
    { id: '1', name: '仕東', avatar: '仕東' },
    { id: '2', name: '寶成', avatar: '寶成' },
    { id: '3', name: 'yii', avatar: 'YI' },
    { id: '4', name: 'moss', avatar: 'MS' },
    { id: '5', name: 'frank', avatar: 'FR' },
    { id: '6', name: 'stanely', avatar: 'SL' },
    { id: '7', name: '豆泥', avatar: '豆泥' },
    { id: '8', name: 'denken', avatar: 'DK' },
    { id: '9', name: 'fl yang', avatar: 'FY' },
    { id: '10', name: 'haoenvski', avatar: 'HS' },
    { id: '11', name: 'anfernee', avatar: 'AF' },
    { id: '12', name: '偷偷', avatar: '偷偷' },
    { id: '13', name: 'arttseng', avatar: 'AT' },
    { id: '14', name: 'peili', avatar: 'PL' },
    { id: '15', name: 'jeffery', avatar: 'JF' },
  ],
  owners: [
    { id: '1', name: 'arttseng.eth', percentage: '100%' },
  ],
  exploreLink: 'https://explorer.optimism.io/tx/0xaf46016bbea78b59288ad02a9f13e1665368cad06dc67dae63ca4d693dc3cbea',
  minter: { name: 'arttseng.eth', avatar: 'AT' }
},
{
  id: '18678779685024154136431558951144620663242752-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-18666189237448079413283414090669645239418880',
  name: 'FAB DAO artbank collector sharing 藏家收藏分享',
  image: '/image/18678779685024154136431558951144620663242752-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07-18666189237448079413283414090669645239418880.png',
  org: 'Art Bank',
  timeline: '2025-05-06 → 2025-05-07',
  description: 'Spearker: Jon Cates\nInterpretation: Tai mei\n\nIntroduction of glitch art\n\nJon Cates profile:\nhttps://docs.google.com/document/d/1yxvgCbFaazStNKMEclMN9HoSCNHXiWrR5lN4pBh6GoY/edit?tab=t.0',
  work_scope: ['FAB DAO', ' jon Cates', ' NFT', 'glitch art'],
  contributors: [
    { id: '1', name: 'arttseng', avatar: 'AT' },
    { id: '2', name: ' yii', avatar: 'YI' },
    { id: '3', name: ' jon Cates', avatar: 'JC' },
    { id: '4', name: ' Tai-mei', avatar: 'TM' },
  ],
  owners: [],
  exploreLink: 'https://explorer.optimism.io/tx/0x1bdc71771e1c36e2aead690dc7103834f4812721bc454581bced820ab07ce8b7',
  minter: { name: 'arttseng.eth', avatar: 'AT' }
},
{
  id: '18679119967391075074895022325752052431454208-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'FAB DAO artbank collector sharing 藏家收藏分享',
  image: '/image/18679119967391075074895022325752052431454208-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07.png',
  org: 'Art Bank',
  timeline: '2025-02-25 → 2025-02-26',
  description: 'Spearker: 寶成\n\nhttps://x.com/zysbot\n\nhttps://warpcast.com/zysbot\n\nhttps://objkt.com/users/tz1i35AGt1HS1FKN1Mqw4DuCMYHvWAHnUT3H/owned',
  work_scope: ['FABDAO', 'NFT', ' zysbot', ' gen art'],
  contributors: [
    { id: '1', name: 'zysbot', avatar: 'ZB' },
    { id: '2', name: ' arttseng', avatar: 'AT' },
    { id: '3', name: ' Yii', avatar: 'YI' },
  ],
  owners: [
    { id: '1', name: 'zysbot.eth', percentage: '100%' },
  ],
  exploreLink: 'https://explorer.optimism.io/tx/0xf2dbf54c67df5c64090f5c91a3d6be4f666aab801778137f7e12add4ec977640',
  minter: { name: '0x992f0201ff7eE158a8BAf638549D0aD1CBcC27eF', avatar: '0X' }
},
{
  id: '18679460249757996013358485700359484199665664-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'FAB DAO artbank collector sharing 藏家收藏分享',
  image: '/image/18679460249757996013358485700359484199665664-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07.png',
  org: 'Art Bank',
  timeline: '2025-04-22 → 2025-04-23',
  description: "Spearker: Tai mei\n\nTai Mei, a Taiwanese artist, reclaims this name to embody contemporary Taiwanese creativity and rebellious spirit. Blending Photography, Glitch, Code, AI, and Blockchain Tech, she explores Taiwan's complex reality, identity, and spirit of resistance. Her work challenges stereotypes, celebrates digital disruption, and tells Taiwanese stories in the contemporary age.\n\n台妹 (Tai Mei) , 台灣藝術家，她重新定義此名，體現當代台灣的創造力與反叛精神。融合攝影、Glitch（故障藝術）、程式碼、AI 與區塊鏈，她探索台灣複雜的現實、身份認同及抵抗精神。其作品挑戰刻板印象、擁抱數位科技，並敘說當代的台灣故事。\n\nhttps://objkt.com/curations/objkt/wallet-sharing-and-wish-list-for-fab-dao_20250423-b0131dbf",
  work_scope: ['FABDAO', 'NFT', ' TaiMei', 'glitch art'],
  contributors: [
    { id: '1', name: 'TaiMei', avatar: 'TM' },
    { id: '2', name: 'arttseng', avatar: 'AT' },
    { id: '3', name: ' Yii', avatar: 'YI' },
    { id: '4', name: ' Aluan', avatar: 'AL' },
    { id: '5', name: ' ssshittung', avatar: 'ST' },
  ],
  owners: [],
  exploreLink: 'https://explorer.optimism.io/tx/0x4b586032db7a056d6c27e7bb55ed4567504fbf2c5d7c6b17d5aa9f7bcf5f9d14',
  minter: { name: '0x992f0201ff7eE158a8BAf638549D0aD1CBcC27eF', avatar: '0X' }
},
{
  id: '18679800532124916951821949074966915967877120-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'FAB DAO artbank collector sharing 藏家收藏分享',
  image: '/image/18679800532124916951821949074966915967877120-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07.png',
  org: 'Art Bank',
  timeline: '2024-12-17 → 2024-12-18',
  description: 'Spearker: arttseng\nCreative idea: Yii\n\nhttp://deca.art/arttseng / tezos https://objkt.com/@arttseng / https://matters.town/@javaing \n\nhttps://objkt.com/@arttseng',
  work_scope: ['FABDAO', 'NFT', ' arttseng', ' gen art'],
  contributors: [
    { id: '1', name: 'arttseng', avatar: 'AT' },
    { id: '2', name: ' Yii', avatar: 'YI' },
  ],
  owners: [
    { id: '1', name: 'arttseng.eth', percentage: '50%' },
    { id: '2', name: '0x2c5f6ac6bE2E5A25fFc667984088E7b979f52267', percentage: '50%' },
  ],
  exploreLink: 'https://explorer.optimism.io/tx/0x6ac2dee96722fe4a8f89095218d4c984cbbbeeab2e755bf5f0a17461814c158a',
  minter: { name: '0x992f0201ff7eE158a8BAf638549D0aD1CBcC27eF', avatar: '0X' }
},
{
  id: '18680140814491837890285412449574347736088576-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'FAB DAO artbank collector sharing 藏家收藏分享',
  image: '/image/18680140814491837890285412449574347736088576-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07.png',
  org: 'Art Bank',
  timeline: '2025-03-11 → 2025-03-12',
  description: 'Spearker: ssshihtung\n\n仕東回顧了一路在區塊鏈藝術上有意識的探索，關注新型的藝術形式，作品的完成不只藝術家，也有收藏者的參與。並且有時間性的作品特別能打中他。\n\nhttps://objkt.com/@cryptocoffee/owned',
  work_scope: ["FABDAO","NFT"," ssshihtung"," gen art"],
  contributors: [
    { id: '1', name: 'ssshihtung', avatar: 'ST' },
    { id: '2', name: ' arttseng', avatar: 'AT' },
    { id: '3', name: ' Yii', avatar: 'YI' },
  ],
  owners: [
    { id: '1', name: 'ssshihtung.eth', percentage: '100%' },
  ],
  exploreLink: 'https://explorer.optimism.io/tx/0x8316a1b6737520a440b302ccd84cf89ac28e78f66dab8269b66539f1963ac108',
  minter: { name: '0x992f0201ff7eE158a8BAf638549D0aD1CBcC27eF', avatar: '0X' }
},
{
  id: '18680481096858758828748875824181779504300032-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07',
  name: 'FAB DAO artbank collector sharing 藏家收藏分享',
  image: '/image/18680481096858758828748875824181779504300032-10-0x822F17A9A5EeCFd66dBAFf7946a8071C265D1d07.png',
  org: 'Art Bank',
  timeline: '2025-01-14 → 2025-01-15',
  description: 'Spearker: Frank Hu\n\nIndependent researcher in SSI, DAO, web3 Grants and Tech Regulations.\n\nalso an NFT collector\n1/3 what I like.\n1/3 for experiment.\n1/3 suppor Taiwan.\n\nhttps://objkt.com/users/tz1ReePsBegAeR7v8Dz7bvqDB8VuoVdzpLYz/owned',
  work_scope: ["FABDAO","NFT"," FrankHu"," gen art"],
  contributors: [
    { id: '1', name: 'FrankHu', avatar: 'FH' },
    { id: '2', name: ' arttseng', avatar: 'AT' },
    { id: '3', name: ' Yii', avatar: 'YI' },
  ],
  owners: [],
  exploreLink: 'https://explorer.optimism.io/tx/0xe58d8a902b164e386c2bb69d2a6a93b9acecb3b8558dbbcf317b1e20838702ea',
  minter: { name: '0x992f0201ff7eE158a8BAf638549D0aD1CBcC27eF', avatar: '0X' }
},
];
