import axios from "axios";
import auth from "./auth";

export const api = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop",
  headers: {
    Authorization: `Bearer ${auth.getToken()}`,
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const accessToken = auth.getToken();

  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});
