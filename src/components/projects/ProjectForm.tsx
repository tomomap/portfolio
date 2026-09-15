'use client';
import { useState } from "react";
import { useProjectStore } from "@/stores/projectStore";

export function ProjectForm () {
  const [name, setName] = useState('');
  const { projects, addState, error, fetchProjects, addProject } = useProjectStore();

  let isSubmitting = addState === 'loading';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    await addProject(name);
    setName('');
  }
  
  return (
    <form onSubmit={handleSubmit} className="sm:flex">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Add project name ..."
        className="w-80 px-3 py-2 rounded-lg border border-slate-500 focus:border-rose-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
      />
      <button
        type="submit"
        disabled={ isSubmitting }
        className="ml-0 mt-2 py-1 px-5 cursor-pointer bg-[#4169E1] hover:bg-[#3558C7] rounded-2xl text-white font-black sm:ml-4 sm:mt-0"
        // className="ml-0 mt-2 py-1 px-5 cursor-pointer bg-rose-800 hover:bg-rose-700 rounded-2xl text-white font-black sm:ml-4 sm:mt-0"
      >
        { isSubmitting  ? 'Adding...' : 'Add' }
      </button>
    </form>
  )
}