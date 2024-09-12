import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../src/assets/LOGO Schreiber PNG.png";
import { SlArrowRight } from "react-icons/sl";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);


  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProjects = () => {
    setIsProjectsOpen(!isProjectsOpen);
  };


  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img
        src={logo}
        alt="Estudio de arquitectura Schreiber"
        className="logo"
      />
      <div className="navbar-center">
        <button className={`menu-toggle ${isOpen ? "open" : ""}`} id="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`linksAlign ${isOpen ? "open" : ""}`}>
        <div className="link" onClick={toggleProjects}>
            Proyectos <SlArrowRight className={`arrow ${isProjectsOpen ? "open" : ""}`} />
            {isProjectsOpen && (
              <div className="sub-menu">
                <Link className="sub-link" to="/project1" onClick={() => setIsOpen(false)}>Proyecto 1</Link>
                <Link className="sub-link" to="/project2" onClick={() => setIsOpen(false)}>Proyecto 2</Link>
                <Link className="sub-link" to="/project3" onClick={() => setIsOpen(false)}>Proyecto 3</Link>
              </div>
            )}
          </div>
          <Link className="link" to="/services" onClick={() => setIsOpen(false)}>Estudio</Link>
          <Link className="link" to="/contact" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;