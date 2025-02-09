import React from "react";
import HeaderX from "./component/HeaderX";
import Categories from "./component/Categories";
import GifView from "./pages/GifView";
import { Container } from "@mui/material";
import Dataprovider from "./contextx/Data";
import Home from "./pages/Home";
import Serch from "./pages/Serch";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <HeaderX/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="serch" element={<Serch />} />
        <Route path="view" element={<GifView />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
