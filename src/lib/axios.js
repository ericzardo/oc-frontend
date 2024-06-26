import axios from "axios";

const baseURL = "http://localhost:1337";

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
});

export default api;