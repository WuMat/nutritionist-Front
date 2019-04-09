import React from "react";
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
          <div className="CardHome__kaegoria">Kategoria: {kat}</div>
          <div className="CardHome__rating">rating</div>
        </div>
        <div className="CardHome__title">{title}</div>
        <div className="CardHome__description">
          tekstem stosowanym jako przykładowy wypełniacz w przemyśle
          poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego
          drukarza
        </div>
      </div>
    </div>
  );
};

export default CardHome;
