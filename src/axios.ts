import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE || "http://localhost:8080"
  // baseURL: process.env.URL_BASE || "http://116.203.197.143"
});

export default instance;
