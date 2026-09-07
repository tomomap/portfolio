'use client';

import { useEffect, useState } from "react";
import { useProjectStore } from "@/stores/projectStore";
// import { Project } from '@/types/project';

export default function ProjectsPage() {
  const { projects, error, fetchProjects, addProject } = useProjectStore();

  const [name, setName] = useState('');

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    await addProject(name);
    setName('');
  }

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'error') return <p className="rounded-md bg-red-50 p-3 text-sm text-red-700">Error: {error}</p>;
  if (status === 'success' && projects.length === 0) return <p>No projects yet. Create your first one!</p>;


  return (
    <div>
      <h1>Projects</h1>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Project Name"
          // disabled={status === 'loading'}
        />
        <button
          type="submit"
          // disabled={status === 'loading' || !name }
        >
          {/* {status === 'loading' ? 'Adding...' : "You can add."} */}
        </button>
      </form>



      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name} / {project.status}
          </li>
        ))}
      </ul>
      
    </div>
  );
}