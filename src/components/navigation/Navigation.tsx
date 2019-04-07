import React from "react";
import "./navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navWrapper">
      <nav className="nav">
        <ul className="nav__element">
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>
          <NavLink to="/recipes">
            <li>Przepisy</li>
          </NavLink>
          <NavLink to="/diet">
            <li>Dieta</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Kontakt</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
