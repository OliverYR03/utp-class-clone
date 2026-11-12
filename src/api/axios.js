import axios from "axios";

const TOKEN_KEY = "token";

export const tokenStorage = {
  get: () => localStorage.getItem(TOKEN_KEY),
  set: (token) => localStorage.setItem(TOKEN_KEY, token),
  clear: () => localStorage.removeItem(TOKEN_KEY),
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:8080",
});

let onUnauthorized = () => {};
export const setOnUnauthorized = (fn) => {
  onUnauthorized = fn;
};

const esLogin = (url = "") => url.includes("/api/auth/login");

api.interceptors.request.use((config) => {
  const token = tokenStorage.get();
  if (token && !esLogin(config.url)) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && !esLogin(error.config?.url)) {
      tokenStorage.clear();
      onUnauthorized();
    }
    return Promise.reject(error);
  }
);

export const mensajeDeError = (error) => {
  const data = error.response?.data;
  if (typeof data === "string" && data) return data;
  if (data?.mensaje) return data.mensaje;
  return error.response
    ? "Ocurrio un error en el servidor."
    : "No se pudo conectar con el servidor.";
};