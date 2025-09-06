import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.jsx";
import Logs from "./pages/Logs.jsx";
import Search from "./pages/Search.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/logs", element: <Logs /> },
  { path: "/search", element: <Search /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
