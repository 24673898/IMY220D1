import React from "react";
import { createRoot } from "react-dom/client";
import SplashPage from "./pages/SplashPage";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<SplashPage />);