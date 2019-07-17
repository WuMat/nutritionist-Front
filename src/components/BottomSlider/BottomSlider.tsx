import React from "react";
import _ from "lodash";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { URL } from "../../utils/URL";
import "./bottomSlider.scss";

interface IProps extends RouteComponentProps<any> {
  images: any;
}
const BottomSlider = ({ images, history }: IProps) => {
  const handleClick = (val: string, type: number) => () => {
    if (type === 1) {
      history.push({
        pathname: `/recipes/${val}`,
        state: val
      });
    } else {
      history.push({
        pathname: `/lifestyle/${val}`,
        state: val
      });
    }
  };
  return (
    <>
      <div className="BottomSlider">
        <div className="BottomSlider__faders">
          {/* <div className="BottomSlider__faders--left" /> */}
          {/* <div className="BottomSlider__faders--right" /> */}
        </div>
        <div className="BottomSlider__items">
          {_.isArray(images) &&
            images.map((el: any) => (
              <div
                key={el._id}
                className="BottomSlider__item"
                onClick={handleClick(el._id, el.type)}
              >
                <img src={`${URL}${el.main_img}`} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default withRouter(BottomSlider);
