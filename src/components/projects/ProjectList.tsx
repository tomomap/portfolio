'use client';
import { Project } from "@/types/project";
import { useProjectStore } from "@/stores/projectStore";
import { useState } from "react";

type Props = {
  projects: Project[];
}
export function ProjectList({ projects }: Props) {
  const toggleProjectStatus = useProjectStore(
    (state) => state.toggleProjectStatus
  );
  const updateProject = useProjectStore(
    (state) => state.updateProject
  );
  const deleteProject = useProjectStore(
    (state) => state.deleteProject
  );

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState('');

  const isEdiging = editingId !== null;

  return (
    <div className="overflow-x-auto sm:overflow-x-hidden">
      <table className="result-table mt-5">
        <thead>
          <tr>
            <th></th>
            <th>Status</th>
            <th>Change</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <th>{editingId === project.id
                ? (
                  <>
                    <input className="border border-slate-500 focus:border-rose-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none rounded px-4 py-2"
                      value={editingName}
                      onChange={(e) => setEditingName(e.target.value)}
                    />
                    <button className="ml-2 text-white rounded px-4 py-2 cursor-pointer bg-cyan-700 hover:bg-cyan-600"
                      onClick={async () => {
                        await updateProject(project.id, editingName);
                        setEditingId(null);
                      }}
                    >Save</button>
                    <button className="ml-2 text-white rounded px-4 py-2 cursor-pointer bg-slate-500 hover:bg-slate-400"
                      onClick={() => setEditingId(null)} // 次にEditを押した時setEditingNameが上書きされるのでsetEditingIdのみ
                    >Cancel</button>
                  </>)
                : (project.name) // ()カッコは必須ではないが、見やすくするため
              }
              </th>
              <td>
                <div className="w-28 badge m-auto">
                  <div className={project.status === "active" ? "badge_on" : "badge_off"}></div>
                  <div className="ml-4">{project.status === "active" ? "active" : "archived"}</div>
                </div>
              </td>
              <td>
                <button className={`w-24  text-white rounded px-4 py-2 ${project.status === "active" ? "bg-gray-400 hover:bg-gray-300" : "bg-blue-400 hover:bg-blue-300"
                  } cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                  onClick={() => toggleProjectStatus(project.id)}
                  disabled={isEdiging}
                >
                  change
                </button>
              </td>
              <td>
                <button
                  className="w-24  text-white rounded px-4 py-2 bg-green-700 hover:bg-green-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => {
                    setEditingId(project.id);
                    setEditingName(project.name);
                  }}
                  disabled={isEdiging}
                >
                  edit
                </button>
              </td>
              <td>
                <button
                  className="w-24  text-white rounded px-4 py-2 bg-indigo-900 hover:bg-indigo-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => deleteProject(project.id)}
                  disabled={isEdiging}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}