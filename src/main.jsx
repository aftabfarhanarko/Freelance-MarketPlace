import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router";
import ContextProvider from "./Context/ContextProvider";
import { ThemeProvider } from "./Context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </ContextProvider>
  </StrictMode>
);
