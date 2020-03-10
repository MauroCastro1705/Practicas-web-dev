import React from "react";
import "./navigation.css";

const Navigation = props => (
  <header className="toolbar">
    <nav>
      <div className="logo">
        <a href="/">Recetas Saludables</a>
      </div>

      <ul className="lista">
        <li>
          <a className="btn" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            Recetas
          </a>
        </li>
        <li>
          <a className="btn" href="/">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
