import axios from "axios";

const instance = axios.create({
  baseURL: process.env.URL || "http://localhost:8000"
});

export default instance;
