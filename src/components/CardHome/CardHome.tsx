import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./cardHome.scss";
import { URL } from "../../utils/URL";

interface CardHomeProps extends RouteComponentProps<any> {
  kat: string;
  title: string;
  description_short: string;
  main_img: string;
  id: string;
  rate: number;
}

const CardHome = React.memo(
  ({
    kat,
    title,
    description_short,
    main_img,
    id,
    history,
    rate
  }: CardHomeProps) => {
    const handleClick = () => {
      console.warn(history);
      history.push({
        pathname: `/recipes/${id}`,
        state: id
      });
    };
    return (
      <div className="CardHome">
        <div className="CardHome__img">
          <img src={`${URL}${main_img}`} alt="" />
        </div>
        <div className="CardHome__bottom">
          <div className="CardHome__katRat">
            <div className="CardHome__kategoria">
              <span>{kat.charAt(0).toUpperCase() + kat.slice(1)}</span>
            </div>
            <div className="CardHome__rating">
              <Rating val={rate} quantity={5} id={id} />
            </div>
          </div>
          <div className="CardHome__title">
            {title.charAt(0).toUpperCase() + title.slice(1)}
          </div>
          <div className="CardHome__description">
            {description_short}
            <div className="CardHome__Button">
              <button onClick={handleClick}>Wiecej...</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default withRouter(CardHome);
