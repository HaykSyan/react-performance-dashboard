import { RenderCountBadge } from "@/shared/components/RenderCountBadge";

export function StatsGrid() {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
      {["Users", "Reports", "API Latency", "App Version"].map((label) => (
        <div
          key={label.replace(" ", "_")}
          className="p-4 border border-gray-400 rounded flex justify-between"
        >
          <span>{label}</span>
          <RenderCountBadge />
        </div>
      ))}
    </div>
  );
}
