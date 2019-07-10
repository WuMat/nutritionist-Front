import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import prepare from "./store/reducer/prepare";
import detail from "./store/reducer/detail";
import ingredients from "./store/reducer/ingrediens";
import ui from "./store/reducer/ui";
import article from "./store/reducer/article";
import img from "./store/reducer/imageRecipe";
import homeApi from "./store/reducer/HomeApiRequest";
import { fetch_all_data } from "./store/actionCreator/HomeApiRequest";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
const rootReducer = combineReducers({
  prepare: prepare,
  detail: detail,
  ingredients: ingredients,
  ui: ui,
  article: article,
  img: img,
  homeApi: homeApi
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  // composeEnhancers(applyMiddleware(logger, thunk))
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch<any>(fetch_all_data());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
