import React from "react";
import { NavLink } from "react-router-dom";

import "./layout.scss";

import Navigation from "../components/navigation/Navigation";
import Header from "../components/Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="Layout">
      <Header>
        <Navigation />
      </Header>
      <NavLink to="/admin">
        <p className="adminButton">Admin</p>
      </NavLink>
      <div className="layout__body">
        <div className="layout__content">{children}</div>
        <div className="layout__info">
          <div className="info__title">O mnie</div>
          <div className="info__fot" />
        </div>
      </div>
      <div className="bottom">stopka</div>
    </div>
  );
};

export default Layout;
