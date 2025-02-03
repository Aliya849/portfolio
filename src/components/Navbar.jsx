import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">Personal <span>Portfolio</span></a>
        <i
          className="bx bx-menu"
          id="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
        ></i>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li className="navbar"><Link to="/">Home</Link></li>
          <li className="navbar"><Link to="/skills">Skills</Link></li>
          <li className="navbar"><Link to="/education">Education</Link></li>
          <li className="navbar"><Link to="/projects">Projects</Link></li>
          <li className="navbar"><Link to="/contact">Contact</Link></li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
