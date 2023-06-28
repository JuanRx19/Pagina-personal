import React from "react";
import "../stylesheets/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
        <footer className="footer">
            <a href="#inicio" className="volver-inicio">
                <FontAwesomeIcon icon={faAnglesUp} />
            </a>
            <p>Web realizada por <span>Juan Miguel</span></p>
        </footer>
    );
}

export default Footer;