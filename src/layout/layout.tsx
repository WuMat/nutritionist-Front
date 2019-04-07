import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

import "./layout.scss";

import Navigation from "../components/navigation/Navigation";
import Header from "../components/Header/Header";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <NavLink to="/admin">
        <p className="adminButton">Admin</p>
      </NavLink>
      {/* <div className="logo">JAKIES LOGO</div> */}
    </>
  );
};

export default Layout;
