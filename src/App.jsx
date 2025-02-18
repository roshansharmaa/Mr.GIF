import React, { useEffect } from "react";
import HeaderX from "./component/HeaderX";
import Categories from "./component/Categories";
import GifView from "./pages/GifView";
import { Box, Container } from "@mui/material";
import Dataprovider, { Gifstate, Maindata } from "./contextx/Data";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filterpage from "./component/Filterpage";
import GitHubIcon from '@mui/icons-material/GitHub';
import Categoryview from "./component/Categoryview";
function App() {
  const { filter, setfilter } = Gifstate();

  let nav = filter ? "/home" : "/serch";
  return (
    <>
      <HeaderX />
        <Box padding={.2}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path={nav} element={filter ? <Home /> : <Filterpage />} />
          <Route path="/category" element={<Filterpage />} />
          <Route path="/category/view" element={<Categoryview />} />
          <Route path="/view" element={<GifView />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
      <a href="https://github.com/roshansharmaa/Mr.GIF" target="black" >

      <GitHubIcon sx={{position:'fixed' ,bottom:'3%' ,color:'white', right:'3%' , zIndex:'10', textShadow:' 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff' ,fontSize:'2rem'}}/>
      </a>
        </Box>
    </>
  );
}

export default App;
