///------IMPORTACIONES DE FUNCIONES----////
import React from "react";
import RecetaApi from "./receta Api/recetas";
import Navigation from "./nav-bar/navigation";
import Footer from "./Footer/footer";
import Home from "./Home/home";
import Contacto from "./Contacto/contacto";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; /// importamos router para cambiar entre paginas///
import "./App.css";

const App = () => {
  ///---- comienza la APP ------///
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/recetas" component={RecetaApi} />
          <Route path="/contacto" component={Contacto} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};
export default App;
