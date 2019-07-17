import React, { useState } from "react";
import Recipe from "./Recipe/Recipe";
import axios from "../../axios";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import Lifestyle from "./Lifestyle/Lifestyle";

import * as ActionCreators from "../../store/actionCreator";

interface IProps {
  auth: boolean;
  login: () => void;
}
const Admin = ({ auth, login }: IProps) => {
  const [data, setData] = useState({ name: "", password: "" });
  const [state, setstate] = useState();
  const [loading, setLoading] = useState(false);

  const handleClick = (val: number) => () => {
    setstate(val);
  };
  const handleClickLogin = async () => {
    setLoading(true);
    try {
      await axios.post("/user/login", data);
      login();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <div className="admin">
      {!auth ? (
        <div className="admin__login">
          <div className="input__placeholder">
            <input
              type="text"
              name="name"
              required={true}
              value={data.name}
              onChange={handleChange}
            />
            <span>Login</span>
          </div>
          <div className="input__placeholder">
            <input
              type="text"
              name="password"
              required={true}
              value={data.password}
              onChange={handleChange}
            />
            <span>Haslo</span>
          </div>
          {!loading && (
            <button onClick={handleClickLogin}> ZALOGUJ SIE </button>
          )}
        </div>
      ) : (
        <div className="admin_add">
          <button className="button_choice" onClick={handleClick(1)}>
            Dodaj Przepis
          </button>
          <button className="button_choice" onClick={handleClick(2)}>
            Dodaj Artykuł
          </button>

          {state === 1 && <Recipe />}
          {state === 2 && <Lifestyle />}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.auth.isAuth
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: () => dispatch(ActionCreators.auth())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admin);
