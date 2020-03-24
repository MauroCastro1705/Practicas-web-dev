import React from "react";
import "./contacto.css";
import hero from "./hero.png";

const Contacto = props => (
  <div className="contacto">
    <div className="home">
      <div className="cajones">
        <div className="cajon1">
          <h1 className="titulo">Hola soy Mauro Castro</h1>
          <br></br>
          <p>Soy Programador y maquetador Web Jr.</p>
          <p>
            Estudio de manera formal y autodidacta, este sitio es una practica
            sobre el uso de React.js y APIs
          </p>
          <br></br>
          <h4>Podes Contactarme aca!:</h4>
          <div className="cv">
            <a href="https://maurocastro1705.github.io/">Mi CV</a>
          </div>
        </div>
        <div className="cajon2">
          <img src={hero}></img>
        </div>
      </div>
    </div>
  </div>
);

export default Contacto;
