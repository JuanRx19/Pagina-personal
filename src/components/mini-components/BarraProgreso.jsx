import React from "react";
import "../../stylesheets/BarraProgreso.css"
import PropTypes from "prop-types";

const BarraProgreso = ({ width }) => {

    return (
      <div className="barra-progreso">
        <div className="barra-progreso-indicador" style={{ width: `${width}%` }}>
            <div className="barra-progreso-indicador-porcentaje">{width}%</div>
        </div>
      </div>
    );
  };
  
  BarraProgreso.propTypes = {
    porcentaje: PropTypes.number.isRequired,
  };
  
  export default BarraProgreso;