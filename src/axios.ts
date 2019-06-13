import axios from "axios";

const instance = axios.create({
  baseURL: process.env.URL || "https://tranquil-depths-70068.herokuapp.com/"
});

export default instance;
