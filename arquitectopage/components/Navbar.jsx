import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../src/index.css";
import logo from "../src/assets/LOGO Schreiber PNG.jpg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img
        src={logo}
        alt="Estudio de arquitectura Schreiber"
        className="logo"
      />
      <div className="navbar-center">
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`linksAlign ${isOpen ? "open" : ""}`}>
          <Link className="link" to="/about" onClick={() => setIsOpen(false)}>Proyectos</Link>
          <Link className="link" to="/services" onClick={() => setIsOpen(false)}>Estudio</Link>
          <Link className="link" to="/contact" onClick={() => setIsOpen(false)}>Contacto</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;