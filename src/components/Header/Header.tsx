import React, { FunctionComponent } from "react";
import "./header.scss";

const Header: FunctionComponent = ({ children }) => {
  return (
    <>
      <div className="header">
        <p className="header__title">Klaudia Pytlarz</p>
        {children}
      </div>
    </>
  );
};

export default Header;
