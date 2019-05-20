import React from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as ActionCreators from "../../store/actionCreator";

import "./header.scss";
interface HeaderProps {
  children: React.ReactNode;
  ham: boolean;
  ham_menu: () => void;
}
const Header = ({ children, ham, ...props }: HeaderProps) => {
  return (
    <>
      <div className="header">
        <div className="ham_menu" onClick={props.ham_menu}>
          <i className="fas fa-bars" />
        </div>
        <p className="header__title">Fit Endorfiny</p>
        {children}
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    ham: state.ui.ham
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ham_menu: () => dispatch(ActionCreators.open())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
