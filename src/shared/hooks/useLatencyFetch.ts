import { useState, useEffect } from "react";

export function useLatencyFetch(url: string) {
  const [data, setData] = useState<any>(null);
  const [latency, setLatency] = useState<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        const end = performance.now();
        setLatency(end - start);
        setData(json);
      });
  }, [url]);

  return { data, latency };
}

import { useQuery } from "@tanstack/react-query";

export function useLatencyFetchOptimal(url: string) {
  const [latency, setLatency] = useState<number | null>(null);

  const { data, isLoading } = useQuery({
    queryKey: ["latencyRequest"],
    queryFn: () => {
      const start = performance.now();
      return fetch(url)
        .then((r) => r.json())
        .then((json) => {
          const end = performance.now();
          setLatency(end - start);
          return json;
        });
    },
  });

  return { data, latency, isLoading };
}
