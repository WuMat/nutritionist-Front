import React, { FunctionComponent } from "react";
import "./layout.scss";

import Navigation from "../components/navigation/Navigation";

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <div className="logo">JAKIES LOGO</div>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
