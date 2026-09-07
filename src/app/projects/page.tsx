'use client';

import { useEffect, useState } from "react";
import { useProjectStore } from "@/stores/projectStore";
import { ProjectList } from "@/components/projects/ProjectList";
import { ProjectEmpty } from "@/components/projects/ProjectEmpty";
import { ProjectError } from "@/components/projects/ProjectError";
import { ProjectForm } from "@/components/projects/ProjectForm";
import { ProjectSearch } from "@/components/projects/ProjectSearch";
import { ProjectSort } from "@/components/projects/ProjectSort";
import type { SortOption } from "@/types/project"; // 型だけをimportするので、import type
import React from 'react';


export default function ProjectsPage() {
  const { projects, fetchState, error, fetchProjects, addProject } = useProjectStore();
  const [searchQuery, setSearchQuery] = useState(''); //表示方法を決めるstate
  const [sortOption, setSortOption] = useState<SortOption>('default'); //表示方法を決めるstate

  const filteredProjects = projects.filter((project) => 
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedProjects = [...filteredProjects]; // 表示させるためのリストをコピー

  // statusを管理。増やすならここ。
  const statusOrder = {
    active: 0,
    archived: 1
  }

  // sortOption === 'default' はそのまま
  if (sortOption === 'name-asc') {
    sortedProjects.sort((a, b) => 
      a.name.localeCompare(b.name)
    );    
  } else if (sortOption === 'name-desc') {
    sortedProjects.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
  } else if (sortOption === 'status-active') {
    sortedProjects.sort((a, b) => 
      statusOrder[a.status] - statusOrder[b.status] // 0-1
    );    
  } else if (sortOption === 'status-archived') {
    sortedProjects.sort((a, b) => 
      statusOrder[b.status] - statusOrder[a.status] // 1-0
    );
  }

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  let pageContent: React.ReactNode = '';

  if (fetchState === 'loading') {
    pageContent = <p>Loading...</p>;
  } else if (fetchState === 'error') {
    pageContent = <ProjectError message={ error ?? 'Error occurred' }/>;
  } else if (projects.length === 0) {
    pageContent = <ProjectEmpty />
  } else if (filteredProjects.length === 0) {
    pageContent = null;
  } else {
    pageContent = <ProjectList projects={sortedProjects} />
  }

  return (
    <div className="p-6 w-screen sm:w-200 mt-0 mb-0 mr-auto ml-auto">
      <h1>Workstack：<br className="md:hidden"/>Projects管理ツール</h1>

      <ProjectForm />
      <div className="sm:flex items-center gap-4">
        <ProjectSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <ProjectSort
          sortOption={sortOption}
          onSortChange={setSortOption}
        />

        { searchQuery && filteredProjects.length === 0 && (
          <p className="pt-2 text-amber-900">No projects match "{searchQuery}"...</p>
        )}
      </div>
      { pageContent }
      <div className="mt-8 text-right">
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#1c45ce] transition-opacity hover:opacity-60"
              >
              <span aria-hidden="true">← </span>
                Top page
              </a>
            </div>
    </div>
  );
}