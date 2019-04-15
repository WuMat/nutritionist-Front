import React from "react";
import "./viewOneRecipe.scss";

const ViewOneRecipe = () => {
  return (
    <>
      <div className="topWrapper">
        <img
          className="topWrapper__img"
          src={require("../../img/card.jpg")}
          alt=""
        />
        <p className="topWrapper__title">Naleśniki z mascarpone i owocami</p>
        <div className="topWrapper__Details">
          <div className="rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
          <div className="details__time">
            <i className="fas fa-clock" /> PRZYGOTOWANIE: <span> 30 min</span>
          </div>
          <div className="details__time">
            <i className="fas fa-utensils" /> PORCJE: <span> 5</span>
          </div>
          <div className="details__comments">ZOBACZ KOMENTARZE (3)</div>
        </div>
      </div>

      <div className="bottomWrapper">
        <div className="bottomWrapper__ingredients">
          <p className="ingredients__Title">Składniki:</p>
          <div className="ingredients__wrapp">
            <i className="fas fa-check" />
            <span className="ingredients__ingredienet">Składniki</span>
          </div>
          <div className="ingredients__wrapp">
            <i className="fas fa-check" />
            <span className="ingredients__ingredienet">Składniki</span>
          </div>
          <div className="ingredients__wrapp">
            <i className="fas fa-check" />
            <span className="ingredients__ingredienet">Składniki</span>
          </div>
          <div className="ingredients__wrapp">
            <i className="fas fa-check" />
            <span className="ingredients__ingredienet">Składniki</span>
          </div>
          <div className="ingredients__wrapp">
            <i className="fas fa-check" />
            <span className="ingredients__ingredienet">Składniki</span>
          </div>
          <div className="ingredients__wrapp">
            <i className="fas fa-check" />
            <span className="ingredients__ingredienet">Składniki</span>
          </div>
        </div>
        <div className="bottomWrapper__recipe">
          Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w
          przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez
          nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć
          wieków później zaczął być używany przemyśle elektronicznym, pozostając
          praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz
          z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a
          ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem
          przeznaczonym do realizacji druków na komputerach osobistych, jak
          Aldus PageMaker z publikacją arkuszy Letrasetu, zawierających
          fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem
          Ipsum oprogramowaniem przeznaczonym do realizacji druków na
          komputerach osobistych, jak Aldus PageMaker fragmenty Lorem Ipsum, a
          ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem
          przeznaczonym do realizacji druków na komputerach osobistych, jak
          Aldus PageMaker
          <div className="bottomWrapper__photos">PHOTOS</div>
        </div>
      </div>
    </>
  );
};

export default ViewOneRecipe;
