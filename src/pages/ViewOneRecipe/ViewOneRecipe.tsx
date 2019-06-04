import React from "react";
import "./viewOneRecipe.scss";
import Rating from "../../components/Rating/Rating";

import Ingredient from "../../components/Ingredient/Ingredient";

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
            <Rating val={3} quantity={5} />
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
      <div>
        <div className="bottomWrapper">
          <div className="bottomWrapper__ingredients">
            <h2>Składniki:</h2>
            <Ingredient name="Jajko(1 Sztuka)" />
            <Ingredient name="Mąka" />
            <Ingredient name="Masło" />
            <Ingredient name="Serek" />
            <Ingredient name="Winogrona" />
          </div>
          <div className="bottomWrapper__recipe">
            <h2>Przygotowanie:</h2>
            <ul>
              <li>
                Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz
                w przemyśle poligraficznym. Został po raz pierwszy
              </li>
              <li>cznie niezmienionym. Spopularyzował si</li>
              <li>
                Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz
                w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w.
                przez nieznanego drukarza do wypełnienia tekstem próbnej
                książki. Pięć wieków później zaczął być używany przemyś
              </li>
              <li>
                arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a
                ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem
                przeznaczonym do realizacji druków na komputerach osobistych,
                jak Aldus PageMaker z publi
              </li>
            </ul>
            <div className="bottomWrapper__photosWrapper">
              <div className="photosWrapper__photo">
                <img src={require("../../img/card.jpg")} />
              </div>
              <div className="photosWrapper__photo">
                <img src={require("../../img/card.jpg")} />
              </div>
              <div className="photosWrapper__photo">
                <img src={require("../../img/card.jpg")} />
              </div>
              <div className="photosWrapper__photo">
                <img src={require("../../img/card.jpg")} />
              </div>
            </div>
          </div>
        </div>
        <div className="comments">
          <h3 className="comments__name">Komentarze</h3>
          <p>SMAKOWAŁ CI PRZEPIS? CHCESZ PODZIELIĆ SIĘ SWOJĄ OPINIĄ?</p>
          <form>
            <textarea placeholder="Rozpocznij pisanie komentarza" />
            <div className="comments__bottom">
              <input type="text" placeholder="Twój nick" />
              <button type="submit">Wyślij opinie</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ViewOneRecipe;
