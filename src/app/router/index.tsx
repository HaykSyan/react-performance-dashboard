import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
    element: (
      <Suspense fallback={<>Loading...</>}>
        <Dashboard />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/performance",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <Performance />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/users",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <Users />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/reports",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <Reports />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/analyzer",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <Analyzer />
      </Suspense>
    ),
    errorElement: <ErrorBoundary />,
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
