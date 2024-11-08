import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster position="top-right" reverseOrder={false} />
    <App />
  </StrictMode>
);
