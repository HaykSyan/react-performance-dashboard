import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ReactQueryProvider } from "@/app/providers/react-query-provider.tsx";

import { AppRouter } from "./app/router";

import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <AppRouter />
    </ReactQueryProvider>
  </StrictMode>
);
