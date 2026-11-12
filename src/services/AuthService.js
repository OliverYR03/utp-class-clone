import { api, tokenStorage } from "../api/axios";

const AuthService = {
  login: async (codigo, password) => {
    tokenStorage.clear();                       
    const { data } = await api.post("/api/auth/login", { codigo, password });
    tokenStorage.set(data.tokendeAcceso);       
    return data;
  },
  logout: () => tokenStorage.clear(),
};

export default AuthService;