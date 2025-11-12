import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    // environment: "jsdom",
    // setupFiles: ["src/tests/setup.ts"],
    projects: [
      {
        test: {
          include: [
            "**/__tests__/unit/**/*.test.ts",
            "**/__tests__/**/*.unit.test.ts",
          ],
          name: "unit",
          environment: "node",
        },
      },
    ],
  },
});
