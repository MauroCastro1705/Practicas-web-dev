import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

function Navigation() {
  const navStyle = {
    color: "black"
  };

  return (
    <header className="toolbar">
      <nav>
        <div className="logo">
          <a href="/">Recetas Saludables</a>
        </div>

        <ul className="lista">
          <Link style={{ textDecoration: "none", color: "white" }} to="/home">
            <li>
              <a className="btn" href="/">
                Home
              </a>
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/recetas"
          >
            <li>
              <a className="btn" href="/">
                Recetas
              </a>
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/contacto"
          >
            <li>
              <a className="btn" href="/">
                Contacto
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
