import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import _ from "lodash";
import axios from "../../../axios";

import "../admin.scss";

import * as ActionCreators from "../../../store/actionCreator";

interface RecipeProps {
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
}

interface imgState {
  img_main: { src: string | null; file: any };
  img1: { src: string | null; file: any };
  img2: { src: string | null; file: any };
  img3: { src: string | null; file: any };
  img4: { src: string | null; file: any };
}

const initState = {
  img_main: { src: null, file: null },
  img1: { src: null, file: null },
  img2: { src: null, file: null },
  img3: { src: null, file: null },
  img4: { src: null, file: null }
};

const Recipe = ({ ...props }: RecipeProps) => {
  const [img, setImg] = useState<imgState>(initState);
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

  const handleSelectFile = (e: any) => {
    console.log("asd");
    let reader = new FileReader();
    const name = e.target.name;
    let file = e.target.files[0];
    reader.onloadend = () => {
      setImg({
        ...img,
        [name]: {
          src: reader.result,
          file: file
        }
      });
    };
    reader.readAsDataURL(file);
  };

  const handleClick = async () => {
    const formData = new FormData();
    console.log(img);

    formData.append("title", props.title);
    formData.append("timePrepare", props.time);
    formData.append("portion", props.portion);
    formData.append("category", props.category);
    formData.append("stepsPrepare", props.clickPrepare);
    formData.append("ingredient", props.ingredients);
    formData.append("image", img.img_main.file, "Main image.jpg");
    formData.append("image", img.img1.file);
    formData.append("image", img.img2.file);
    formData.append("image", img.img3.file);
    formData.append("image", img.img4.file);

    try {
      const send = await axios.post("/api/recipe", formData);
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
          <input
            type="text"
            name="category"
            required={true}
            value={props.category}
            onChange={e => props.handleChange(e.target.name, e.target.value)}
          />
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
          {img.img_main.src ? (
            <img src={img.img_main.src} />
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
            {img.img1.src ? (
              <img src={img.img1.src} />
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
            {img.img2.src ? (
              <img src={img.img2.src} />
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
            {img.img3.src ? (
              <img src={img.img3.src} />
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
            {img.img4.src ? (
              <img src={img.img4.src} />
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
          <button onClick={handleClick}>zapisz do bazy</button>
        </div>
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
    description_short: state.detail.description_short
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
      dispatch(ActionCreators.remove_ingredient(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
