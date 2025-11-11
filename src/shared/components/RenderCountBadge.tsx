import { useRenderCount } from "@/shared/hooks/useRenderCount";

export function RenderCountBadge() {
  const count = useRenderCount();
  return (
    <span className="text-xs bg-gray-800 text-white px-1.5 py-0.5 rounded">
      renders: {count}
    </span>
  );
}
