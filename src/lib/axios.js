import axios from "axios";

const baseURL = "http://localhost:5173/";

const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
});

export default api;