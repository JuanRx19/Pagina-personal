import React from "react";
import "../stylesheets/Navbar.css"
import { Link } from 'react-router-dom';
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
                            <a href="/" className="opcion">INICIO</a>
                        </li>
                        <li>
                            <a href="/" className="opcion">SOBRE MI</a>
                        </li>
                        <li>
                            <a href="/" className="opcion">SKILLS</a>
                        </li>
                        <li>
                            <a href="/" className="opcion">CURRICULUM</a>
                        </li>
                        <li>
                            <a href="/" className="opcion">PORTAFOLIO</a>
                        </li>
                        <li>
                            <a href="/" className="opcion">CONTACTO</a>
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