import { create } from "zustand";
import { Project } from '@/types/project';
import { RequestState } from "@/types/request";
import { stringify } from "querystring";

const initialState: ProjectState = {
  projects: [],
  fetchState: 'idle',
  addState: 'idle',
  error: null,
};

// state
type ProjectState = {
  projects: Project[];
  fetchState: RequestState;
  addState: RequestState;
  error: string | null;
};

// action
type ProjectAction = {
  fetchProjects: () => Promise<void>;
  addProject: (name: string) => Promise<void>;
  toggleProjectStatus: (id: string) => Promise<void>;
  updateProject: (id: string, name: string) => Promise<void>;
  deleteProject: (id: string) => Promise<void>;
  reset: () => void,

}

export const useProjectStore = create<ProjectState & ProjectAction>((set, get) => ({

  ...initialState, // ここで使う

  fetchProjects: async () => {
    set({ fetchState: 'loading', error: null });

    try {
      const res = await fetch('/api/projects');
      if (!res.ok) throw new Error('Failed to fetch projects');

      const data: Project[] = await res.json();
      set({ projects: data, fetchState: 'success' });
    } catch (err) {
      set({ error: (err as Error).message, fetchState: 'error' });
    }
  },

  // POST
  addProject: async (name: string) => {
    set({ addState: 'loading', error: null });

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });

      if (!res.ok) throw new Error('Faled to add project');

      const newProject: Project = await res.json();

      // add project
      set({
        // 再fetchせず、フロントで対応
        projects: [...get().projects, newProject],
        addState: 'success',
      });
    } catch (err) {
      set({ error: (err as Error).message, addState: 'error' });
    }
  },

  toggleProjectStatus: async (id: string) => {
    const project = get().projects.find(
      (project) => project.id === id
    );

    if (!project) return;

    const newStatus = 
      project.status === 'active' ? 'archived' : 'active';

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          status: newStatus,
        })
      });

      if (!res.ok) throw new Error('Failed to update project status');

      const updateProject: Project = await res.json();

      set({
        projects: get().projects.map(// 「get().projects」Zustandのprojects全部
          (project) => project.id === updateProject.id ? updateProject : project
        ),
      });

    } catch (err) {
      console.error(err)
    };
  },

  updateProject: async (id: string, name: string) => {
    const project = get().projects.find(
      (project) => project.id === id
    );

    if (!project) return;
 
    // toggleProjectStatus の一部をコピーしてきたけど、これでいいのか？
    const newStatus = project.name;

    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name,
        })
      });

      if (!res.ok) throw new Error('Failed to update project name');

      const updateProject: Project = await res.json();

      set({
        projects: get().projects.map(// 「get().projects」Zustandのprojects全部
          (project) => project.id === updateProject.id ? updateProject : project
        ),
      });

    } catch (err) {
      console.error(err)
    };
  },

  deleteProject: async (id: string) => {
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete project');

      set({
        projects: get().projects.filter(
          (project) => project.id !== id
        ),
      });

    } catch (err) {
      console.error(err)
    };
  },

  reset: () => {
    set(initialState);
  },
}));