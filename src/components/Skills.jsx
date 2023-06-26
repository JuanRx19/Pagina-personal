import React from "react";
import BarraProgreso from "./mini-components/BarraProgreso.jsx"
import "../stylesheets/Skills.css"

function Skills(){
    return(
        <div className="skills">
            <h2>Skills</h2>
            <div className="contenido-seccion-skills">
                <div className="technical-skills">
                    <h3>Technical Skills</h3>
                    <div className="JavaScript">
                        <h4>JavaScript</h4>
                            <BarraProgreso width={75}/>
                    </div>
                    <div className="HTML-CSS">
                        <h4>HTML & CSS</h4>
                            <BarraProgreso width={78}/>
                    </div>
                    <div className="Python">
                        <h4>Python</h4>
                            <BarraProgreso width={85}/>
                    </div>
                    <div className="Front-end">
                        <h4>Front-end</h4>
                            <BarraProgreso width={75}/>
                    </div>
                    <div className="C++">
                        <h4>C++</h4>
                            <BarraProgreso width={65}/>
                    </div>
                    <div className="C#">
                        <h4>C#</h4>
                            <BarraProgreso width={73}/>
                    </div>
                </div>
                <div className="professional-skills">
                    <h3>Professional skills</h3>
                    <div className="comunicacion">
                        <h4>Comunicación</h4>
                            <BarraProgreso width={90}/>
                    </div>
                    <div className="trabajo-en-equipo">
                        <h4>Trabajo en equipo</h4>
                            <BarraProgreso width={95}/>
                    </div>
                    <div className="creatividad">
                        <h4>Creatividad</h4>
                            <BarraProgreso width={70}/>
                    </div>
                    <div className="dedicacion">
                        <h4>Dedicacion</h4>
                            <BarraProgreso width={85}/>
                    </div>
                    <div className="proyect-management">
                        <h4>Proyect-management</h4>
                            <BarraProgreso width={80}/>
                    </div>
                    <div className="adaptabilidad">
                        <h4>Adaptabilidad</h4>
                            <BarraProgreso width={88}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;