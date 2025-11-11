import { Card } from "@/shared/components/ui/Card";
import {
  AnalyzerIcon,
  DashboardIcon,
  GrowIcon,
  ReportsIcon,
  UserIcon,
} from "@/shared/components/ui/icons/Icons";
import { RenderCountBadge } from "@/shared/components/RenderCountBadge";

export default function Sidebar() {
  return (
    <aside>
      <RenderCountBadge />
      <Card className="py-4 px-2.5 space-y-4 flex flex-col gap-1 rounded-full! w-fit">
        <a href="/">
          <DashboardIcon />
        </a>
        <a href="/performance">
          <GrowIcon />
        </a>
        <a href="/users">
          <UserIcon />
        </a>
        <a href="/reports">
          <ReportsIcon />
        </a>
        <a href="/analyzer">
          <AnalyzerIcon />
        </a>
      </Card>
    </aside>
  );
}
