import React from "react";
import "./header.scss";

interface HeaderProps {
  children: React.ReactNode;
}
const Header = ({ children }: HeaderProps) => {
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
