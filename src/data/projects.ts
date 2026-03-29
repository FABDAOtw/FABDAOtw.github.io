import { useState, useEffect } from 'react';

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

const DATA_BASE_URL = import.meta.env.VITE_DATA;

export function useProjectsData() {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${DATA_BASE_URL}/data/projects.json`)
      .then(res => res.json())
      .then((data: Project[]) => setProjectsData(data))
      .catch(err => console.error('Failed to fetch projects:', err))
      .finally(() => setLoading(false));
  }, []);

  return { projectsData, loading };
}
