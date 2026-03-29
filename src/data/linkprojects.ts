import { useState, useEffect } from 'react';
import { Project } from './projects';

const DATA_BASE_URL = import.meta.env.VITE_DATA;

export function useLinkProjectsData() {
  const [linkProjectsData, setLinkProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${DATA_BASE_URL}/data/linkprojects.json`)
      .then(res => res.json())
      .then((data: Project[]) => setLinkProjectsData(data))
      .catch(err => console.error('Failed to fetch link projects:', err))
      .finally(() => setLoading(false));
  }, []);

  return { linkProjectsData, loading };
}
