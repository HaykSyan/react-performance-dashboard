import { lazy, Suspense } from "react";

import { PageHeader } from "@/shared/components/ui/PageHeader";

const RenderStatsChart = lazy(() => import("../components/RenderStatsChart"));
const HeavyLatencyLoadChart = lazy(
  () => import("../components/HeavyLatencyLoadChart")
);

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Performance" />

      <div className="grid md:grid-cols-2 grid-col-1 gap-2 items-start">
        <Suspense fallback={<>Loading...</>}>
          <HeavyLatencyLoadChart />
        </Suspense>

        <div>
          <p className="text-sm pl-8">Stats Chart</p>
          <Suspense fallback={<>Loading...</>}>
            <RenderStatsChart />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
