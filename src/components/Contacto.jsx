import React, { useState, useEffect } from "react";
import "../stylesheets/Contacto.css"

function Contacto(){

    const [isMobile, setIsMobile] = useState(false);
  
    const handleResize = () => {
      if (window.innerWidth <= 768) {
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

    return(
        <div id="contacto" className="contacto">
            <h2>Contacto</h2>
            <div className={`contenido-seccion-contacto ${isMobile ? "mobile" : ""}`}>
                <input type="text" name="nombre" className="datos" placeholder="Nombre"/>
                <input type="email" name="correo" required className="datos" placeholder="Correo electronico"/>
                <textarea type="text" name="mensaje" className="mensaje" placeholder="¿En que puedo ayudarte?"/>
            </div>
            <button className="enviar">
                Enviar
                <span className="enviar-overlay"></span>
            </button>
        </div>
    );
}

export default Contacto;