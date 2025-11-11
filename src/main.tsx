import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import { ReactQueryProvider } from "@/app/providers/react-query-provider.tsx";

import "@/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
  </StrictMode>
);
