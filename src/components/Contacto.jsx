import React from "react";
import "../stylesheets/Contacto.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

function Contacto(){
    return(
        <div id="contacto" className="contacto">
            <h2>Contacto</h2>
            <div className="contenido-seccion-contacto">
                <input type="text" name="nombre" className="datos" placeholder="Nombre"/>
                <input type="email" name="correo" required className="datos" placeholder="Correo electronico"/>
                <textarea type="text" name="mensaje" className="mensaje" placeholder="¿En que puedo ayudarte?"/>
            </div>
            <button className="enviar">
                Enviar
                <span className="enviar-overlay"></span>
            </button>
            <a href="#inicio" className="volver-inicio">
                <FontAwesomeIcon icon={faAnglesUp} />
            </a>
        </div>
    );
}

export default Contacto;