import React from "react";
import "./navigation.css";

const Navigation = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div></div>
      <div className="toolbar__logo">
        <a href="/">Recetas Saludables</a>
      </div>
      <div className="spacer" />
      <ul className="toolbar_navigation-items">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Recetas</a>
        </li>
        <li>
          <a href="/">Contacto</a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
