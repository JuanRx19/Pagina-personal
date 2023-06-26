import React from "react";
import "../stylesheets/Curriculum.css"

function Curriculum(){
    return(
        <div className="curriculum">
            <h2>Curriculum</h2>
            <div className="contenido-seccion-curriculum">
                <div className="contenedor-educacion">
                    <h3>Educación</h3>
                    <div className="card-educacion">
                        <h4>Ingeniería de Sistemas y Computación</h4>
                        <h5>Universidad Javeriana de Cali</h5>
                        <p className="fecha">2023</p>
                        <p>Estudiante de Ingeniería de Sistemas y Computación en la Universidad Javeriana de Cali, adquiriendo 
                            conocimientos sólidos en tecnología e informática. Apasionado por el desarrollo web, enfocado en 
                            desarrollar habilidades técnicas y competencias profesionales para destacar en el campo de la tecnología.
                            Preparado para enfrentar desafíos y contribuir al avance de la industria.</p>
                    </div>
                    <div className="conector-educacion"  style={{ top: `334%`}}/>
                    <div className="circulo-educacion" style={{ top: `333.5%`}}/>

                    <div className="card-educacion">
                        <h4>Bachiller Tecnigo en Sistemas</h4>
                        <h5>Colegio León de Greiff</h5>
                        <p className="fecha">2010 - 2020</p>
                        <p>Bachiller Técnico en Sistemas graduado del Colegio León de Greiff, con enfoque en el área de tecnología e informática. 
                            Adquirí conocimientos fundamentales en sistemas, programación y soluciones tecnológicas. 
                            Listo para aplicar mis habilidades en proyectos desafiantes y seguir creciendo en el campo de la tecnología.</p>
                        <div className="conector-educacion"  style={{ top: `384%`}}/>
                        <div className="circulo-educacion" style={{ top: `383.3%`}}/>
                </div>
                    
                </div>
                <div className="contenedor-experiencia">
                    <h3>Experiencia</h3>
                    <div className="card-experiencia">
                        <h4>Front-End Junior</h4>
                        <h5>FREELANCE</h5>
                        <p className="fecha">2023</p>
                        <p>Freenlance Junior, cursando estudios en la Universidad Javeriana de Cali. En constante desarrollo de habilidades
                            técnicas y competencias profesionales para destacar en el campo tecnológico. Listo para enfrentar proyectos 
                            desafiantes y aportar valor como profesional independiente. Como desarrollador tengo una gran iniciativa para
                            generar conocimientos y lograr adecuarme a cualquier reto.</p>
                        <div className="conector-experiencia"  style={{ top: `334%`}}/>
                        <div className="circulo-experiencia" style={{ top: `333.5%`}}/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Curriculum;