import React, { Component } from "react";
import Layout from "./layout/layout";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as ActionCreators from "./store/actionCreator";

import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import Diet from "./pages/Diet/Diet";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";
import ViewOneRecipe from "./pages/ViewOneRecipe/ViewOneRecipe";

interface IProps {
  mobile: () => void;
  desktop: () => void;
}

class App extends Component<IProps> {
  componentDidMount = () => {
    const width = () => {
      if (window.innerWidth < 500) this.props.mobile();
      else this.props.desktop();
    };
    window.addEventListener("resize", width);
  };

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/recipes" component={Recipes} />
            <Route path="/diet" component={Diet} />
            <Route path="/contact" component={Contact} />
            <Route path="/admin" component={Admin} />
            <Route path="/viewRecipe" component={ViewOneRecipe} />
            <Redirect from="/" to="home" />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    mobile: () => dispatch(ActionCreators.mobile()),
    desktop: () => dispatch(ActionCreators.desktop())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
