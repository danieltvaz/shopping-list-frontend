import axios, { InternalAxiosRequestConfig } from "axios";

import authHandler from "../utils/auth-handler";

const { getJwt } = authHandler();

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

axiosInstance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  request.headers["Authorization"] = getJwt();

  return request;
});

export default axiosInstance;
