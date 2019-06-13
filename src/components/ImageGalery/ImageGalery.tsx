import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as ActionCreators from "../../store/actionCreator";

import "./imageGalery.scss";
import { URL } from "../../utils/URL";

interface IProps {
  value: any;
  gallery: boolean;
  idElement: number;
  gallery_photos: () => void;
}

const ImageGallery = ({ ...props }: IProps) => {
  const [allImg, setAllImg] = useState();
  const [mainImg, setMainImg] = useState();

  const handleClickClose = (e: any) => {
    props.gallery_photos();
  };

  useEffect(() => {
    setMainImg(props.value[props.idElement]);
  }, [props.idElement]);

  const handleClickImg = (el: number) => () => {
    setMainImg(props.value[el]);
    props.gallery_photos();
  };
  return (
    <>
      <div
        className="ImageGallery"
        onClick={handleClickClose}
        style={{ display: props.gallery ? "block" : "none" }}
      >
        <div className="ImageGallery_container">
          <div className="ImageGallery__mainImage">
            {console.log(`${URL}${mainImg}`)}
            <img className="topWrapper__img" src={`${URL}${mainImg}`} alt="" />
          </div>
          <div className="ImageGallery__smallImgContainer">
            {props.value.map((el: any, i: number) => (
              <div
                key={i}
                className="ImageGallery__singleImg"
                onClick={handleClickImg(i)}
              >
                <img className="topWrapper__img" src={`${URL}${el}`} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    gallery: state.ui.gallery
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    gallery_photos: () => dispatch(ActionCreators.photos_gallery())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageGallery);
