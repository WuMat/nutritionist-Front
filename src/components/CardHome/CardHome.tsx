import React from "react";
import Rating from "../Rating/Rating";
import "./cardHome.scss";

interface CardHomeProps {
  kat: string;
  title: string;
}

const CardHome = ({ kat, title }: CardHomeProps) => {
  return (
    <div className="CardHome">
      <div className="CardHome__img">
        <img src={require("../../img/card.jpg")} alt="" />
      </div>
      <div className="CardHome__bottom">
        <div className="CardHome__katRat">
          <div className="CardHome__kategoria">
            <span>{kat.charAt(0).toUpperCase() + kat.slice(1)}</span>
          </div>
          <div className="CardHome__rating">
            <Rating val={2} quantity={5} />
          </div>
        </div>
        <div className="CardHome__title">
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </div>
        <div className="CardHome__description">
          tekstem stosowanym jako przykładowy wypełniacz w przemyśle
          poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego
          drukarza
          <div className="CardHome__Button">
            <button>Wiecej...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHome;
