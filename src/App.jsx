import React from "react";
import Menu from "./pages/menu";
import Home from "./pages/home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Projects from "./pages/projects";
import ProjectDetail from "./pages/projet_detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/menu"} element={<Menu />} />
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/projects"} element={<Projects />} />
        <Route path={"/project/:idselect"} element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
