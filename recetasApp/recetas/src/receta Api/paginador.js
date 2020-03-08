import React from "react";
import style from "./recetas.module.css";

const Recipe = ({ titulo, calorias, imagen, ingredientes }) => {
  //con mayuscula porque es React
  return (
    <div className={style.receta}>
      <h1>{titulo}</h1>
      <ol>
        {ingredientes.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p> Calorias = {calorias}</p>
      <img className={style.imagen} src={imagen} alt={titulo} />
    </div>
  );
};
export default Recipe;
