import axios from "axios";

const instance = axios.create({
  baseURL: process.env.URL || "https://lifestyles-back.herokuapp.com/"
});

export default instance;
