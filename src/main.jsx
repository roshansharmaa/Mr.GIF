import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Dataprovider from "./contextx/Data.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Dataprovider>
      <App />
    </Dataprovider>
  </BrowserRouter>
);
