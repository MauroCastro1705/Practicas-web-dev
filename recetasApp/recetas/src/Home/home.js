import React from "react";
import "./home.css";
import hero from "./hero.png";

const Home = props => (
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
        <div className="edaman">
          <h3>Las recetas son generadas por EDAMAN</h3>
          <br></br>
          <a href="https://www.edamam.com/">
            <h4>https://www.edamam.com/</h4>
          </a>

          <br></br>
          <p>Una APIs de comida saludable que trae mucha información</p>
        </div>
      </div>
      <div className="cajon2">
        <img src={hero}></img>
      </div>
    </div>
  </div>
);

export default Home;
