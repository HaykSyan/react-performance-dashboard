import { PageHeader } from "@/shared/components/ui/PageHeader";

import { StatsGrid } from "../components/StatsGrid";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard" />

      <StatsGrid />
    </div>
  );
}
