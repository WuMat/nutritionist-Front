import React, { useEffect, useState } from "react";
import axios from "../../axios";
import _ from "lodash";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Rating from "../../components/Rating/Rating";
import Ingredient from "../../components/Ingredient/Ingredient";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as ActionCreators from "../../store/actionCreator";
import ImageGallery from "../../components/ImageGalery/ImageGalery";
import { URL } from "../../utils/URL";
import "./viewOneRecipe.scss";

interface CardHomeProps extends RouteComponentProps<any> {
  kat: string;
  title: string;
  description_short: string;
  main_img: string;
  id: string;
  gallery_photos: () => void;
}

const initState = {
  nick: "",
  comment: ""
};

const ViewOneRecipe = ({ ...props }: CardHomeProps) => {
  const [payload, setPayload] = useState();
  const [comments, setComment] = useState(initState);
  const [idElement, setIdElement] = useState();
  const fetchData = async () => {
    const data = props.location.state;
    try {
      const response = await axios.post("/api/recipe/getOne", { data });
      setPayload(response.data.recipe);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = async (e: any) => {
    e.preventDefault();
    const data = {
      id: payload._id,
      note: comments
    };
    try {
      const response = await axios.post("/api/recipe/update", data);
      setComment(initState);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => (e: any) => {
    const { name, value } = e.target;
    setComment({ ...comments, [name]: value });
  };

  const handleClickGallery = (val: number) => () => {
    setIdElement(val);
    props.gallery_photos();
  };
  return (
    <>
      {payload && !_.isEmpty(payload) && (
        <>
          <div className="topWrapper">
            <div className="topWrapper__img">
              <img src={`${URL}${payload.main_img}`} alt="" />
            </div>
            <p className="topWrapper__title">{payload.title}</p>
            <div className="topWrapper__Details">
              <div className="rating">
                <Rating val={payload.rate} quantity={5} id={payload._id} />
              </div>
              <div className="details__time">
                <i className="fas fa-clock" /> PRZYGOTOWANIE:{" "}
                <span> {`${payload.timePrepare} min`}</span>
              </div>
              <div className="details__time">
                <i className="fas fa-utensils" /> PORCJE:{" "}
                <span> {payload.portion}</span>
              </div>
              <div className="details__comments">
                ZOBACZ KOMENTARZE ({payload.note.length})
              </div>
            </div>
          </div>
          <div>
            <div className="bottomWrapper">
              <div className="bottomWrapper__ingredients">
                {payload.ingredient.map((el: any) => (
                  <div key={el.id}>
                    <h2>{el.val}</h2>
                    {el.ingredients.map((el: any) => (
                      <Ingredient key={el.id} name={el.ingredient} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="bottomWrapper__recipe">
                <h2>Przygotowanie:</h2>
                <ul>
                  {payload.stepsPrepare.map((el: any) => (
                    <li key={el._id}>{el.val}</li>
                  ))}
                </ul>
                <div className="bottomWrapper__photosWrapper">
                  {payload.imagesName.map((el: any, i: number) => (
                    <div
                      key={i}
                      className="photosWrapper__photo"
                      onClick={handleClickGallery(i)}
                    >
                      <img src={`${URL}${el}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="comments">
              <h3 className="comments__name">Komentarze</h3>
              {!_.isEmpty(payload.note) &&
                payload.note
                  .filter((el: any) => el)
                  .map((el: any) => (
                    <div key={el._id} className="comments_single">
                      {el.comment}
                      <p className="comments_nick">{el.nick}</p>
                    </div>
                  ))}
              <p>SMAKOWAŁ CI PRZEPIS? CHCESZ PODZIELIĆ SIĘ SWOJĄ OPINIĄ?</p>
              <form>
                <textarea
                  name="comment"
                  value={comments.comment}
                  onChange={handleChange()}
                  placeholder="Rozpocznij pisanie komentarza"
                />
                <div className="comments__bottom">
                  <input
                    name="nick"
                    value={comments.nick}
                    onChange={handleChange()}
                    type="text"
                    placeholder="Twój nick"
                  />
                  {comments.comment.length > 1 && comments.nick.length > 1 && (
                    <button onClick={handleClick}>Wyślij opinie</button>
                  )}
                </div>
              </form>
            </div>
          </div>
          <ImageGallery value={payload.imagesName} idElement={idElement} />
        </>
      )}
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
)(withRouter(ViewOneRecipe));
