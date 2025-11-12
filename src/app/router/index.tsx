import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "@/App";
import { ErrorBoundary } from "@/shared/components/ErrorBoundary";

const Dashboard = lazy(() => import("@/features/dashboard/pages/Dashboard"));
const Performance = lazy(
  () => import("@/features/performance/pages/Performance")
);
const Users = lazy(() => import("@/features/users/pages/Users"));
const Reports = lazy(() => import("@/features/reports/pages/Reports"));
const Analyzer = lazy(() => import("@/features/analyzer/pages/Analyzer"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/performance",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Performance />
          </Suspense>
        ),
      },
      {
        path: "/users",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: "/reports",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Reports />
          </Suspense>
        ),
      },
      {
        path: "/analyzer",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Analyzer />
          </Suspense>
        ),
      },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
