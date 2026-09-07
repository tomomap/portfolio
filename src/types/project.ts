export type Project = {
    id: string;
    name: string;
    status: 'active' | 'archived';
};

export type SortOption =
  | 'default'
  | 'name-asc'
  | 'name-desc'
  | 'status-active'
  | 'status-archived';