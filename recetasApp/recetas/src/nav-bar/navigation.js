import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
//import "./animation";

function Navigation() {
  const navStyle = {
    color: "black"
  };

  return (
    <header className="toolbar">
      <nav>
        <Link style={{ textDecoration: "none", color: "white" }} to="/home">
          <div className="logo">
            <a href="/">Recetas Saludables</a>
          </div>
        </Link>

        <ul className="nav-links">
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
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
