import React from "react";
import "../stylesheets/Portafolio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Portafolio(){
    return(
        <div id="portafolio" className="portafolio">
            <h2>PORTAFOLIO</h2>
            <div className="contenedores-portafolio">
                <div className="card-portafolio">
                    <img className="img-portafolio" src={require("../images/p1.jpg")} alt="img-portafolio"/>
                    <a href="https://github.com/JuanRx19" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> </a>
                </div>
                <div className="card-portafolio">
                    <img className="img-portafolio" src={require("../images/p2.jpg")} alt="img-portafolio"/>
                    <a href="https://github.com/JuanRx19" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> </a>
                </div>
                <div className="card-portafolio">
                    <img className="img-portafolio" src={require("../images/p3.jpg")} alt="img-portafolio"/>
                    <a href="https://github.com/JuanRx19" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> </a>
                </div>
                <div className="card-portafolio">
                    <img className="img-portafolio" src={require("../images/p4.jpg")} alt="img-portafolio"/>
                    <a href="https://github.com/JuanRx19" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> </a>
                </div>
                <div className="card-portafolio">
                    <img className="img-portafolio" src={require("../images/p5.jpg")} alt="img-portafolio"/>
                    <a href="https://github.com/JuanRx19" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> </a>
                </div>
                <div className="card-portafolio">
                    <img className="img-portafolio" src={require("../images/p6.jpg")} alt="img-portafolio"/>
                    <a href="https://github.com/JuanRx19" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /> </a>
                </div>
            </div>
        </div>
    );
}

export default Portafolio;