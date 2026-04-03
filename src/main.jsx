import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Global from "./styles/Global/Global.jsx";
import { BrowserRouter, RouterProvider } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Global>
      <BrowserRouter basename="/learncode">
        <App />
      </BrowserRouter>
    </Global>
  </StrictMode>,
);
