import { vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLatencyFetch } from "../hooks/useLatencyFetch";

describe("useLatencyFetch", () => {
  beforeEach(() => {
    // Mock performance.now() to be predictable
    let current = 1000;
    vi.spyOn(performance, "now").mockImplementation(() => (current += 50));

    // Mock fetch
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ message: "ok" }),
      })
    ) as any;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  const wrapper = ({ children }: { children: React.ReactNode }) => {
    const client = new QueryClient();
    return (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
  };

  it("fetches data and measures latency", async () => {
    const { result } = renderHook(
      () => useLatencyFetch("https://jsonplaceholder.typicode.com/posts"),
      {
        wrapper,
      }
    );

    // Initial state
    expect(result.current.isLoading).toBe(true);
    expect(result.current.latency).toBeNull();

    // Wait for the query to resolve
    await waitFor(() => expect(result.current.isLoading).toBe(false));

    // Assertions after fetch
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts"
    );
    expect(result.current.data).toEqual({ message: "ok" });
    expect(result.current.latency).toBeGreaterThan(0);
  });
});
