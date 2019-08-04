import axios from "axios";

const instance = axios.create({
  // baseURL: process.env.URL || "http://localhost:8080"
  baseURL: process.env.URL || "116.203.197.143"
});

export default instance;
