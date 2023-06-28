import React, { useState, useEffect } from "react";
import "../stylesheets/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 980) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="contenedor-header">
      <header className="cabecera">
        <div className="logo">
          <a href="/" className="nombre">
            Juan
          </a>
        </div>
        <nav className={`navbar ${isMobile ? "mobile" : ""}`}>
          <ul className={`lista-ul ${isMenuOpen ? "open" : ""}`}>
            <li className="lista-li">
              <a href="#inicio" className="opcion" onClick={toggleNav}>
                INICIO
              </a>
            </li>
            <li>
              <a href="#sobre-mi" className="opcion" onClick={toggleNav}>
                SOBRE MI
              </a>
            </li>
            <li>
              <a href="#skills" className="opcion" onClick={toggleNav}>
                SKILLS
              </a>
            </li>
            <li>
              <a href="#curriculum" className="opcion" onClick={toggleNav}>
                CURRICULUM
              </a>
            </li>
            <li>
              <a href="#portafolio" className="opcion" onClick={toggleNav}>
                PORTAFOLIO
              </a>
            </li>
            <li>
              <a href="#contacto" className="opcion" onClick={toggleNav}>
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
        <div className="nav-responsive" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
