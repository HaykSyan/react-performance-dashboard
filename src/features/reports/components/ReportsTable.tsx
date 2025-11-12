import { memo } from "react";
import { useQuery } from "@tanstack/react-query";
import { RenderCountBadge } from "@/shared/components/RenderCountBadge";

type Props = { search: string; sortAsc: boolean };

export const ReportsTable = memo(function ReportsTable({
  search,
  sortAsc,
}: Props) {
  const { data, isLoading } = useQuery({
    queryKey: ["reports"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;

  let filtered = data.filter((r: typeof data) =>
    r.title.toLowerCase().includes(search.toLowerCase())
  );

  filtered = filtered.sort((a: typeof data, b: typeof data) =>
    sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  );

  return (
    <div className="border rounded overflow-hidden border-gray-400 relative">
      <div className="absolute top-2 right-2">
        <RenderCountBadge />
      </div>

      <table className="min-w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Content</th>
          </tr>
        </thead>

        <tbody>
          {filtered?.map(
            (report: { id: number; title: string; body: string }) => (
              <tr
                key={report.id}
                className="border-t border-gray-400 hover:bg-gray-50"
              >
                <td className="p-2 font-medium">{report.title}</td>
                <td className="p-2 text-gray-600">{report.body}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
});
