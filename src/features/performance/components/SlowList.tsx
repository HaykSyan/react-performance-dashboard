import { memo, useMemo } from "react";
import { RenderCountBadge } from "@/shared/components/RenderCountBadge";

function SlowListComponent({ items }: { items: number[] }) {
  const heavy = useMemo(() => {
    let total = 0;
    for (let i = 0; i < 100000000; i++) total += i;
    return total + items.length;
  }, [items]);

  return (
    <div className="border p-3 mb-3 relative">
      <span className="absolute top-1 right-1 text-xs text-white px-1 rounded">
        <RenderCountBadge />
      </span>

      <p className="text-sm text-gray-700">Heavy computation result: {heavy}</p>
    </div>
  );
}

export const SlowList = memo(SlowListComponent);
