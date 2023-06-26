import React from "react";
import "../stylesheets/SobreMi.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faGamepad, faHeadphonesSimple, faDumbbell, faMotorcycle, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { faLinux } from '@fortawesome/free-brands-svg-icons';

function SobreMi(){
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return(
        <div id="sobre-mi" className="contenedor-sobremi">
            <div className="contenido-seccion">
                <h2>Sobre Mí</h2>
                <p><span>Hola, soy Juan Miguel Rojas. </span>Actualmente soy estudiante de Ingenieria de Sistemas y Computacion. Me apasiona el
                desarrollo web y disfruto del mismo. Soy una persona innovadora y me gusta generar ideas para cualquier tipo  de ambiente
                al cual pueda brindarle mis capacidades.</p>
            </div>
            <div className="fila">
                <div className="datos-personales">
                    <h3>Datos personales</h3>
                    <ul>
                        <li>
                            <strong>Nombre </strong>
                            Juan Miguel Rojas Mejía
                        </li>
                        <li>
                            <strong>Cumpleaños </strong>
                            25-10-2003
                        </li>
                        <li>
                            <strong>Teléfono </strong>
                            +57 316 2567589
                        </li>
                        <li>
                            <strong>Email </strong>
                            juanrx1904@gmail.com
                        </li>
                        <li>
                            <strong>Cargo </strong>
                            <span>FREELANCE</span>
                        </li>
                    </ul>
                </div>
                <div className="contenedor-intereses">
                    <h3>Intereses</h3>
                    <div className="intereses">
                        <div className="interes">
                            <FontAwesomeIcon icon={faGamepad} />
                            JUEGOS
                        </div>
                        <div className="interes">
                            <FontAwesomeIcon icon={faHeadphonesSimple} />
                            MUSICA
                        </div>
                        <div className="interes">
                            <FontAwesomeIcon icon={faDumbbell} />
                            DEPORTE
                        </div>
                        <div className="interes">
                            <FontAwesomeIcon icon={faLinux} />
                            LINUX
                        </div>
                        <div className="interes">
                            <FontAwesomeIcon icon={faMotorcycle} />
                            MOTOS
                        </div>
                        <div className="interes">
                            <FontAwesomeIcon icon={faDesktop} />
                            PC
                        </div>
                    </div>
                </div>
            </div>
            <button className="descargar-cv" onClick={handleDownload}>
                Descargar CV <FontAwesomeIcon icon={faDownload} />
                <span className="overlay"></span>
            </button>
        </div>
    );
}

export default SobreMi;