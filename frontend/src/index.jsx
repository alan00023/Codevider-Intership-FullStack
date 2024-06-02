import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./routes";
import "./index.css";

// Find the root element in the DOM
const container = document.getElementById("root");

// Create a root
const root = createRoot(container);

// Initial render
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
