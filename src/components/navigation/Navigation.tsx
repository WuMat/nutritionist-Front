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
      <nav className="nav">
        <ul className="nav__element">
          <li>
            <NavLink to="/home">Strona Główna</NavLink>
          </li>
          <li>
            <NavLink to="/recipes">Przepisy</NavLink>
            <ul className="nav__nested">
              <li>
                <NavLink
                  to={{ pathname: "/recipes", state: { name: "Śniadania" } }}
                >
                  Śniadania
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{ pathname: "/recipes", state: { name: "Przekąski" } }}
                >
                  Przekąski
                </NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: "/recipes", state: { name: "Zupy" } }}>
                  Zupy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{ pathname: "/recipes", state: { name: "Dania Główne" } }}
                >
                  Dania Główne
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{ pathname: "/recipes", state: { name: "Sałatki" } }}
                >
                  Sałatki
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{ pathname: "/recipes", state: { name: "Desery" } }}
                >
                  Desery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{ pathname: "/recipes", state: { name: "Kolacje" } }}
                >
                  Kolacje
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/lifestyle">blog</NavLink>
          </li>
          <li>
            <NavLink to="/about">O nas</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
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
