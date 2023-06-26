import React from "react";
import "../stylesheets/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    
    return(
        <div className="contenedor-header">
            <header className="cabecera"> 
                <div className="logo">
                    <a href="/" className="nombre">Juan</a>
                </div>
                <nav className="navbar">
                    <ul className="lista-ul">
                        <li className="lista-li">
                            <a href="#inicio" className="opcion">INICIO</a>
                        </li>
                        <li>
                            <a href="#sobre-mi" className="opcion">SOBRE MI</a>
                        </li>
                        <li>
                            <a href="#skills" className="opcion">SKILLS</a>
                        </li>
                        <li>
                            <a href="#curriculum" className="opcion">CURRICULUM</a>
                        </li>
                        <li>
                            <a href="#portafolio" className="opcion">PORTAFOLIO</a>
                        </li>
                        <li>
                            <a href="#contacto" className="opcion">CONTACTO</a>
                        </li>
                    </ul>
                </nav>
                <div className="nav-responsive">
                        <FontAwesomeIcon icon={faBars} />
                </div>
            </header>
        </div>
    );
}

export default Navbar;