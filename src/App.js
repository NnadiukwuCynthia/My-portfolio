import React from "react";
import Menu from "./Components/Menu";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/about";
import Contact from "./Pages/contact";
import Experience from "./Pages/experience";
import Projects from "./Pages/projects";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Box>
        <Menu></Menu>
        <Box>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/" exact element={<About />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}

export default App;
