import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import "./layout.scss";

import Navigation from "../components/navigation/Navigation";
import Header from "../components/Header/Header";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <NavLink to="/admin">
        <p className="adminButton">Admin</p>
      </NavLink>
      <div className="logo">JAKIES LOGO</div>
      <Navigation />
      <Header />
      {children}
    </>
  );
};

export default Layout;
