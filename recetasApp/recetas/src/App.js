import React from "react";
import RecetaApi from "./receta Api/recetas";
import "./App.css";
import Navigation from "./nav-bar/navigation";

const App = () => {
  ///---- comienza la APP ------///
  return (
    <div className="App">
      <Navigation />
      <main style={{ marginTop: "80px" }}></main>
      <RecetaApi />
    </div>
  );
};
export default App;
