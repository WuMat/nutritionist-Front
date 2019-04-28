import React from "react";
import "./navigation.scss";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as ActionCreators from "../../store/actionCreator";

interface NavigationProps {
  ham: boolean;
  ham_menu: () => void;
}

const Navigation = ({ ham, ...props }: NavigationProps) => {
  return (
    <div
      className="navWrapper"
      style={{ transform: ham === true ? "translate(-100%)" : "translate(0)" }}
    >
      {console.log(ham)}

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
      <div className="close__ham" onClick={props.ham_menu}>
        <i className="fas fa-times" />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    ham: state.ui.ham
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ham_menu: () => dispatch(ActionCreators.open())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
