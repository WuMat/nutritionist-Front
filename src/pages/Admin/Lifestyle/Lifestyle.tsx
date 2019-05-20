import React, { useState, useRef } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import _ from "lodash";
import axios from "../../../axios";

import "../admin.scss";

import * as ActionCreators from "../../../store/actionCreator";

interface LifestyleProps {}

const Lifestyle = ({ ...props }: LifestyleProps) => {
  // const [img, setImg] = useState<imgState>(initState);

  return (
    <>
      <p>LIFESTYLE</p>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lifestyle);
