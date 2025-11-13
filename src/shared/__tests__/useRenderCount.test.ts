import { renderHook } from "@testing-library/react";
import { useRenderCount } from "../hooks/useRenderCount";

test("increments render count each render", () => {
  const { result, rerender } = renderHook(() => useRenderCount());

  expect(result.current).toBe(1);

  rerender();
  expect(result.current).toBe(2);

  rerender();
  expect(result.current).toBe(3);
});
