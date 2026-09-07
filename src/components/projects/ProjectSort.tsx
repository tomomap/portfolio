import type { SortOption } from "@/types/project";

type projectSortProps = {
  sortOption: SortOption;
  onSortChange: (sortOption: SortOption) => void;
};

export function ProjectSort({
  sortOption,
  onSortChange,
}: projectSortProps) {
  return (
    <select
      value={sortOption}
      onChange={(e) => onSortChange(e.target.value as SortOption)}
      className="mt-3 px-3 py-3 rounded-lg border border-slate-500 focus:border-rose-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"
      >
        <option value="default">Default order</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="status-active">Status (Active first)</option>
        <option value="status-archived">Status (Archived first)</option>
      </select>
  );
}