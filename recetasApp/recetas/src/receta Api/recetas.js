import React, { useEffect, useState } from "react";
import Recipe from "./paginador";

const RecetaApi = () => {
  const APP_ID = "d73a55a4"; //se consigue desde la api de EDAMAN//
  const APP_KEY = "d94e039a0e2b98ac807d95b94aa2ed63";

  const [recipes, setRecetas] = useState([]);

  const [search, setSearch] = useState(" ");

  const [query, setQuery] = useState("beef");

  useEffect(() => {
    getRecetas();
  }, [query]); //corremos la funcion "getRecetas" en la carga de la app//

  // traemos la info desde la api con un fetch
  const getRecetas = async () => {
    const respuesta = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    ); // agregamos con corchetes las variables que queremos introducir//
    const data = await respuesta.json();
    setRecetas(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    //modificamos el valor de search
    setSearch(e.target.value);
  };

  const getSearch = e => {
    //
    e.preventDefault();
    setQuery(search);
    setSearch(" "); //reseteamos el buscador, para que no qeude nada escrito ahi//
  };

  return (
    <div>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Buscar
        </button>
      </form>

      <div className="recetas">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            titulo={recipe.recipe.label}
            ingredientes={recipe.recipe.ingredients}
            calorias={recipe.recipe.calories}
            imagen={recipe.recipe.image}
          /> //traemos la data de la api al dom//
        ))}
        ;
      </div>
    </div>
  );
};

export default RecetaApi;
