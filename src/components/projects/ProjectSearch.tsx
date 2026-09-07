// 'use client'; この記述は不要。呼び出し元が'use client'であり、Next.jsでこのファイルはClient Componentとして扱う境界ではない

type Props = {
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

export function ProjectSearch({
  searchQuery,
  onSearchChange
}: Props) {
  return (
    <>
    <div className="mt-5 sm:mt-3">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-80 px-3 py-2 rounded-lg border border-slate-500 focus:border-rose-500 focus:ring-2 focus:ring-indigo-200 focus:outline-none"

        placeholder='Search projects ...'
      />
     </div>
     </>
  );
}