import React from "react";
import _ from "lodash";
import { URL } from "../../utils/URL";
import "./bottomSlider.scss";

interface IProps {
  images: any;
}
const BottomSlider = ({ images }: IProps) => {
  const handleClick = (val: string) => () => {
    console.log(val);
  };
  return (
    <>
      <div className="BottomSlider">
        <div className="BottomSlider__faders">
          <div className="BottomSlider__faders--left" />
          <div className="BottomSlider__faders--right" />
        </div>
        <div className="BottomSlider__items">
          {_.isArray(images) &&
            images.map((el: any) => (
              <div
                key={el._id}
                className="BottomSlider__item"
                onClick={handleClick(el._id)}
              >
                <img src={`${URL}${el.main_img}`} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default BottomSlider;
