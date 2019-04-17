import React from "react";
import "./ingredient.scss";

interface HeaderProps {
  name: string;
}
const Ingredient = ({ name }: HeaderProps) => {
  return (
    <>
      <div className="ingredients__wrapp">
        <i className="fas fa-check" />
        <span className="ingredients__ingredienet">{name}</span>
      </div>
    </>
  );
};

export default Ingredient;
