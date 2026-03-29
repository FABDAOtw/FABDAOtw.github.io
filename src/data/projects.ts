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

