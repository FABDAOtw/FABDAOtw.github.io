import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project } from './projects';

const DATA_BASE_URL = import.meta.env.VITE_DATA;

interface DataContextType {
  projectsData: Project[];
  linkProjectsData: Project[];
  loading: boolean;
}

const DataContext = createContext<DataContextType>({
  projectsData: [],
  linkProjectsData: [],
  loading: true,
});

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [linkProjectsData, setLinkProjectsData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch(`${DATA_BASE_URL}/data/projects.json`).then(res => res.json()),
      fetch(`${DATA_BASE_URL}/data/linkprojects.json`).then(res => res.json()),
    ])
      .then(([projects, linkProjects]) => {
        setProjectsData(projects);
        setLinkProjectsData(linkProjects);
      })
      .catch(err => console.error('Failed to fetch data:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ projectsData, linkProjectsData, loading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useProjectsData() {
  const { projectsData, loading } = useContext(DataContext);
  return { projectsData, loading };
}

export function useLinkProjectsData() {
  const { linkProjectsData, loading } = useContext(DataContext);
  return { linkProjectsData, loading };
}
