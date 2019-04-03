import React, { Component } from "react";
import Layout from "./layout/layout";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import Diet from "./pages/Diet/Diet";
import Contact from "./pages/Contact/Contact";
import Admin from "./pages/Admin/Admin";

class App extends Component {
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
            <Redirect from="/" to="home" />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
