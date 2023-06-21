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
                    <Link to="/" className="nombre">Juan</Link>
                </div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link to="/" className="opcion">INICIO</Link>
                        </li>
                        <li>
                            <Link to="/SobreMi" className="opcion">SOBRE MI</Link>
                        </li>
                        <li>
                            <Link to="/Skills" className="opcion">SKILLS</Link>
                        </li>
                        <li>
                            <Link to="/Curriculum" className="opcion">CURRICULUM</Link>
                        </li>
                        <li>
                            <Link to="/Portafolio" className="opcion">PORTAFOLIO</Link>
                        </li>
                        <li>
                            <Link to="/Contacto" className="opcion">CONTACTO</Link>
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