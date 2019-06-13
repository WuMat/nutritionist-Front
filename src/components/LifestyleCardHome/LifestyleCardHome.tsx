import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Rating from "../Rating/Rating";
import "./lifestyleCardHome.scss";
import { URL } from "../../utils/URL";

interface CardHomeProps extends RouteComponentProps<any> {
  title: string;
  description_short: string;
  mainImage: string;
  id: string;
}

const CardHome = ({ ...props }: CardHomeProps) => {
  const handleClick = () => {
    props.history.push({
      pathname: `/lifestyle/${props.id}`,
      state: props.id
    });
  };
  console.log(props);
  return (
    <div className="LifestyleCardHome">
      <div className="LifestyleCardHome__img">
        <img src={`${URL}${props.mainImage}`} alt="" />
      </div>
      <div className="LifestyleCardHome__bottom">
        <div className="LifestyleCardHome__katRat" />
        <div className="LifestyleCardHome__title">
          {props.title.charAt(0).toUpperCase() + props.title.slice(1)}
        </div>
        <div className="LifestyleCardHome__description">
          {props.description_short}
          <div className="LifestyleCardHome__Button">
            <button onClick={handleClick}>Wiecej...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CardHome);
