import { useState, useEffect } from "react";
import { useLatencyFetchOptimal } from "@/shared/hooks/useLatencyFetch";
import { LatencyChart } from "../components/LatencyChart";
import { SlowList } from "../components/SlowList";

export default function HeavyLatencyLoadChart() {
  const [samples, setSamples] = useState<number[]>([]);
  const { data, latency, isLoading } = useLatencyFetchOptimal(
    "https://jsonplaceholder.typicode.com/posts"
  );

  useEffect(() => {
    if (latency !== null) setSamples((prev) => [...prev.slice(-19), latency]);
  }, [latency]);

  return (
    <div>
      {latency !== null && (
        <p className="text-sm">
          Latest Fetch Latency: <b>{latency.toFixed(2)}ms</b>
        </p>
      )}

      <LatencyChart samples={samples} />

      {!isLoading && data && (
        <SlowList items={data.map((p: { id: number }) => p.id)} />
      )}
    </div>
  );
}
