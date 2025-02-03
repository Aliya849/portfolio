import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./Education";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import Header from "./Header";


function AppRoutes() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Header />} />
      </Routes>
      
    </Router>
  );
}

export default AppRoutes;
                  