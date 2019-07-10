import React, { useState, useRef, Children } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import _ from "lodash";
import axios from "../../../axios";
import { ImageProps } from "../../../store/reducer/imageRecipe";
import "../admin.scss";

import * as ActionCreators from "../../../store/actionCreator";

interface RecipeProps extends ImageProps {
  title: string;
  time: number | any;
  portion: number | any;
  category: string;
  description_short: string;
  clicker: number;
  clickPrepare: { id: string; val: string }[] | any;
  ingredients:
    | {
        id: string;
        val: string;
        ingredients: { id: string; ingredient: string }[];
      }[]
    | any;
  addPrepare: () => void;
  delPrepare: (id: any) => void;
  handleChange: (name: string, val: string) => void;
  changePrepare: (id: string, val: string) => void;
  add_ingredient_name: () => void;
  change_ingredient_name: (id: string, val: string, children: any) => void;
  remove_ingredient_name: (id: string) => void;
  ingredient_value: (id: string, val: string) => void;
  add_ingredient: (id: string) => void;
  remove_ingredient: (id: string) => void;
  image_save: (name: string, src: any, file: any, id: string) => void;
}

const Recipe = ({ ...props }: RecipeProps) => {
  const handleSubmit = () => {
    console.log("poszlo");
  };

  const inputEl0 = useRef<HTMLInputElement>(null);
  const inputEl1 = useRef<HTMLInputElement>(null);
  const inputEl2 = useRef<HTMLInputElement>(null);
  const inputEl3 = useRef<HTMLInputElement>(null);
  const inputEl4 = useRef<HTMLInputElement>(null);
  const onButtonClick0 = () => {
    if (inputEl0 && inputEl0.current) {
      inputEl0.current.click();
    }
  };
  const onButtonClick1 = () => {
    if (inputEl1 && inputEl1.current) {
      inputEl1.current.click();
    }
  };
  const onButtonClick2 = () => {
    if (inputEl2 && inputEl2.current) {
      inputEl2.current.click();
    }
  };
  const onButtonClick3 = () => {
    if (inputEl3 && inputEl3.current) {
      inputEl3.current.click();
    }
  };
  const onButtonClick4 = () => {
    if (inputEl4 && inputEl4.current) {
      inputEl4.current.click();
    }
  };

  const makeid = (length: number) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const handleSelectFile = (e: any) => {
    console.log("asd");
    let reader = new FileReader();
    const name = e.target.name;
    const nameForSection = makeid(10) + Date.now();
    let file = e.target.files[0];
    reader.onloadend = () => {
      const src = reader.result;
      props.image_save(name, src, file, nameForSection);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = async () => {
    const formData = new FormData();
    const data = [
      `${props.img1.id}.jpg`,
      `${props.img2.id}.jpg`,
      `${props.img3.id}.jpg`,
      `${props.img4.id}.jpg`
    ];

    console.log(data);
    formData.append("title", props.title);
    formData.append("timePrepare", props.time);
    formData.append("portion", props.portion);
    formData.append("category", props.category);
    formData.append("description_short", props.description_short);
    formData.append("stepsPrepare", JSON.stringify(props.clickPrepare));
    formData.append("ingredient", JSON.stringify(props.ingredients));
    formData.append("main_img", `${props.img_main.id}.jpg`);
    formData.append("imagesName", JSON.stringify(data));
    formData.append("image", props.img_main.file, `${props.img_main.id}.jpg`);
    formData.append("image", props.img1.file, `${props.img1.id}.jpg`);
    formData.append("image", props.img2.file, `${props.img2.id}.jpg`);
    formData.append("image", props.img3.file, `${props.img3.id}.jpg`);
    formData.append("image", props.img4.file, `${props.img4.id}.jpg`);

    try {
      const send = await axios.post("/api/recipe/create", formData);
      console.log(send);
    } catch (error) {
      console.log("Jebany bład");
    }
  };

  return (
    <>
      <div className="admin">
        <form id="form" onSubmit={handleSubmit} />
        <div className="input__placeholder">
          <input
            type="text"
            name="title"
            required={true}
            value={props.title}
            onChange={e => props.handleChange(e.target.name, e.target.value)}
          />
          <span>Główny tytuł</span>
        </div>
        <div className="input__placeholder">
          <input
            type="number"
            name="time"
            required={true}
            value={props.time}
            onChange={e => props.handleChange(e.target.name, e.target.value)}
          />
          <span>czas przygotowania</span>
        </div>
        <div className="input__placeholder">
          <input
            type="number"
            name="portion"
            required={true}
            value={props.portion}
            onChange={e => props.handleChange(e.target.name, e.target.value)}
          />
          <span>Ilość porcji</span>
        </div>
        <div className="input__placeholder">
          <select
            value={props.category}
            onChange={e => props.handleChange(e.target.name, e.target.value)}
            name="category"
          >
            <option>Śniadania</option>
            <option>Przekąski</option>
            <option>Zupy</option>
            <option>Dania Główne</option>
            <option>Sałatki</option>
            <option>Desery</option>
            <option>Kolacje</option>
          </select>
          <span>Kategoria</span>
        </div>
        <div className="input__placeholder">
          <textarea
            name="description_short"
            value={props.description_short}
            required={true}
            onChange={e => props.handleChange(e.target.name, e.target.value)}
          />
          <span>krótki opis</span>
        </div>
        <p className="Steps">Kroki Przygotowania</p>
        {_.isArray(props.clickPrepare) &&
          props.clickPrepare.map(val => (
            <div className="input__placeholder" key={val.id}>
              <textarea
                name={val.id}
                value={val.val}
                required={true}
                onChange={e =>
                  props.changePrepare(e.target.name, e.target.value)
                }
              />
              <span>{`krok przygotowania`}</span>
              <button
                onClick={() => props.delPrepare(val.id)}
              >{`Usuń krok`}</button>
            </div>
          ))}
        <br />
        <button onClick={props.addPrepare}>Kolejny krok</button>
        <p className="Steps">Składniki</p>
        {_.isArray(props.ingredients) &&
          props.ingredients.map(val => (
            <div className="input__placeholder" key={val.id}>
              <input
                type="text"
                name={val.id}
                required={true}
                value={val.val}
                onChange={e =>
                  props.change_ingredient_name(
                    e.target.name,
                    e.target.value,
                    val
                  )
                }
              />
              <span>Nazwa Głowna Składnikow</span>
              <button
                className="ingredient_button"
                onClick={() => props.remove_ingredient_name(val.id)}
              >
                Usuń
              </button>
              {_.isArray(val.ingredients) &&
                val.ingredients.map((val: any) => (
                  <div className="input__placeholder" key={val.id}>
                    <input
                      type="text"
                      name={val.id}
                      required={true}
                      value={val.ingredient}
                      onChange={e =>
                        props.ingredient_value(e.target.name, e.target.value)
                      }
                    />
                    <span>Skladnik</span>
                    <button
                      className="ingredient_button"
                      onClick={() => props.remove_ingredient(val.id)}
                    >
                      Usuń
                    </button>
                  </div>
                ))}
              <button
                className="addIngredient"
                onClick={() => props.add_ingredient(val.id)}
              >
                dodaj skladnik
              </button>
            </div>
          ))}
        <button onClick={props.add_ingredient_name}>
          Kolejny Grupa Skladnikow
        </button>
        <p className="Steps">Zdjęcie głowne</p>
        <div className="img__main" onClick={onButtonClick0}>
          {props.img_main.src ? (
            <img src={props.img_main.src} />
          ) : (
            <i className="fas fa-plus-circle" />
          )}
          <input
            type="file"
            name="img_main"
            ref={inputEl0}
            style={{ display: "none" }}
            onChange={handleSelectFile}
          />
        </div>
        <p className="Steps">Zdjęcia poboczne</p>
        <div className="img__group">
          <div className="img__single" onClick={onButtonClick1}>
            {props.img1.src ? (
              <img src={props.img1.src} />
            ) : (
              <i className="fas fa-plus-circle" />
            )}
            <input
              type="file"
              name="img1"
              ref={inputEl1}
              style={{ display: "none" }}
              onChange={handleSelectFile}
            />
          </div>
          <div className="img__single" onClick={onButtonClick2}>
            {props.img2.src ? (
              <img src={props.img2.src} />
            ) : (
              <i className="fas fa-plus-circle" />
            )}
            <input
              type="file"
              name="img2"
              ref={inputEl2}
              style={{ display: "none" }}
              onChange={handleSelectFile}
            />
          </div>
          <div className="img__single" onClick={onButtonClick3}>
            {props.img3.src ? (
              <img src={props.img3.src} />
            ) : (
              <i className="fas fa-plus-circle" />
            )}
            <input
              type="file"
              name="img3"
              ref={inputEl3}
              style={{ display: "none" }}
              onChange={handleSelectFile}
            />
          </div>
          <div className="img__single" onClick={onButtonClick4}>
            {props.img4.src ? (
              <img src={props.img4.src} />
            ) : (
              <i className="fas fa-plus-circle" />
            )}
            <input
              type="file"
              name="img4"
              ref={inputEl4}
              style={{ display: "none" }}
              onChange={handleSelectFile}
            />
          </div>
        </div>
        <button className="sendButton" onClick={handleClick}>
          -- WYSLIJ --
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    clicker: state.prepare.clicker,
    clickPrepare: state.prepare.clickPrepare,
    title: state.detail.title,
    time: state.detail.time,
    portion: state.detail.portion,
    category: state.detail.category,
    ingredients: state.ingredients.ingredients,
    description_short: state.detail.description_short,
    img_main: state.img.img_main,
    img1: state.img.img1,
    img2: state.img.img2,
    img3: state.img.img3,
    img4: state.img.img4
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addPrepare: () => dispatch(ActionCreators.add_prepare()),
    delPrepare: (id: any) => dispatch(ActionCreators.remove_prepare(id)),
    handleChange: (name: string, val: string) =>
      dispatch(ActionCreators.change_input(name, val)),
    changePrepare: (id: string, val: string) =>
      dispatch(ActionCreators.change_prepare(id, val)),
    add_ingredient_name: () => dispatch(ActionCreators.add_ingredient_name()),
    change_ingredient_name: (id: string, val: string, children: any) =>
      dispatch(ActionCreators.change_ingredient_name(id, val, children)),
    remove_ingredient_name: (id: string) =>
      dispatch(ActionCreators.remove_ingredient_name(id)),
    ingredient_value: (id: string, val: string) =>
      dispatch(ActionCreators.ingredient_value(id, val)),
    add_ingredient: (id: string) => dispatch(ActionCreators.add_ingredient(id)),
    remove_ingredient: (id: string) =>
      dispatch(ActionCreators.remove_ingredient(id)),
    image_save: (name: string, src: any, file: any, id: string) =>
      dispatch(ActionCreators.image_save(name, src, file, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
