import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8001",
  headers: {
    "Content-Type": "application/json",
  },
});

export const analyzeArticle = (url) => {
  return api.post("/analyze", {
    url: url,
  });
};

export const getHistory = () => {
  return api.get("/history");
};

export default api;