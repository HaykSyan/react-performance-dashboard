import { RenderCountBadge } from "@/shared/components/RenderCountBadge";
import { useQuery } from "@tanstack/react-query";

export function UsersTable() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      ),
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="border rounded overflow-hidden border-gray-400 relative">
      <div className="absolute -top-8 right-2">
        <RenderCountBadge />
      </div>
      <table className="min-w-full">
        <tbody>
          {data.map(
            (u: { id: string | number; name: string; email: string }) => (
              <tr key={u.id} className="not-first:border-t border-gray-400">
                <td className="p-2">{u.name}</td>
                <td className="p-2 text-gray-500">{u.email}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
