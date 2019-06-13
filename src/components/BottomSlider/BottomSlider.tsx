import React, { FC } from "react";
import "./bottomSlider.scss";

interface IProps {
  name: string;
}
const BottomSlider: FC = () => {
  return (
    <>
      <div className="BottomSlider">
        <div className="BottomSlider__faders">
          <div className="BottomSlider__faders--left" />
          <div className="BottomSlider__faders--right" />
        </div>
        <div className="BottomSlider__items">
          <div className="BottomSlider__item">cos</div>
          <div className="BottomSlider__item">cos</div>
          <div className="BottomSlider__item">cos</div>
          <div className="BottomSlider__item">cos</div>
          <div className="BottomSlider__item">cos</div>
          <div className="BottomSlider__item">cos</div>
          <div className="BottomSlider__item">cos</div>
          <div className="BottomSlider__item">cos</div>
        </div>
      </div>
    </>
  );
};

export default BottomSlider;
