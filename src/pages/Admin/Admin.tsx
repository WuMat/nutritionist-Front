import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import _ from "lodash";

import "./admin.scss";

import * as ActionCreators from "../../store/actionCreator";

interface AdminProps {
  title: string;
  time: number;
  portion: number;
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

const Admin = ({ ...props }: AdminProps) => {
  const handleSubmit = () => {
    console.log("poszlo");
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

        {/* <input
          name="imagePreviewUrl1"
          // onChange={handleSelectFile}
          type="file"
          // style={{ display: "none" }}
          multiple
          // ref = {fileInput0 => this.fileInput0 = fileInput0}
        />
        <button type="submit">zapisz do bazy</button> */}
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
