import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import _ from "lodash";

import "./admin.scss";

import * as ActionCreators from "../../store/actionCreator";

interface AdminProps {
  title: string;
  time: number;
  portion: number;
  category: string;
  clicker: number;
  clickPrepare: { id: string; val: string }[];
  ingredients: {
    id: string;
    val: string;
    ingredients: { id: string; ingredient: string }[];
  }[];
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
  img_main: string | null;
  img1: string | null;
  img2: string | null;
  img3: string | null;
  img4: string | null;
}

const initState = {
  img_main: null,
  img1: null,
  img2: null,
  img3: null,
  img4: null
};

const Admin = ({ ...props }: AdminProps) => {
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
      setImg({ ...img, [name]: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="admin">
        {console.log("asdasdasd", img)}
        {console.log("cos")}
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
                val.ingredients.map(val => (
                  <>
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
                  </>
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
          {img.img_main ? (
            <img src={img.img_main} />
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
            {img.img1 ? (
              <img src={img.img1} />
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
            {img.img2 ? (
              <img src={img.img2} />
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
            {img.img3 ? (
              <img src={img.img3} />
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
            {img.img4 ? (
              <img src={img.img4} />
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
          <button type="submit">zapisz do bazy</button>
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
    ingredients: state.ingredients.ingredients
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
)(Admin);

// TYtul
// opis
// skladniki
//fotka glowna
//fotki poboczne
