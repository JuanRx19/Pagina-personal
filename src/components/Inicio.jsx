import React from "react";
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';
import "../stylesheets/Inicio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Inicio(){
    return(
        <div className="inicio">
            <Navbar/>
            <div className="contenido-banner">
                <div className="contenedor-imagen">
                    <img className="img-cv" src={require("../images/yo.jpg")}></img>
                </div>
                <h1>Juan Rojas</h1>
                <h2>Estudiante de Ingeniería de Sistemas</h2>
                <h2>Developer UI/UX</h2>
                <div className="redes">
                    <a href="https://github.com/JuanRx19"><FontAwesomeIcon icon={faGithub} /> </a>
                    <a href="https://www.linkedin.com/in/juan-miguel-rojas-mejia-35968a1a2/"><FontAwesomeIcon icon={faLinkedinIn} /> </a>
                    <a href="https://www.instagram.com/juanrm.19/"><FontAwesomeIcon icon={faInstagram} /> </a>
                </div>
            </div>
        </div>
    );
}

export default Inicio;