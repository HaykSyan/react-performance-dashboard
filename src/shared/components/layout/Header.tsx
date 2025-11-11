import { memo } from "react";
import { RenderCountBadge } from "@/shared/components/RenderCountBadge";

export default memo(function Header() {
  return (
    <header className="font-medium text-gray-600">
      React Performance Dashboard <RenderCountBadge />
    </header>
  );
});
