import React from "react";
import "./navigation.scss";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navWrapper">
      <nav className="nav">
        <ul className="nav__element">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Przepisy</NavLink>
            <ul className="nav__nested">
              <li>
                <NavLink to="/recipes">Śniadania</NavLink>
              </li>
              <li>
                <NavLink to="/recipes">Przekąski</NavLink>
              </li>
              <li>
                <NavLink to="/recipes">Sałatki</NavLink>
              </li>
              <li>
                <NavLink to="/recipes">Zupy</NavLink>
              </li>
              <li>
                <NavLink to="/recipes">Dania Główne</NavLink>
              </li>
              <li>
                <NavLink to="/recipes">Kolacje</NavLink>
              </li>
              <li>
                <NavLink to="/recipes">Desery</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/diet">Dieta</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
          </li>
          <li>
            <NavLink to="/viewRecipe">widok</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
