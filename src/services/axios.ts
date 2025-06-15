import axios, { AxiosHeaders, InternalAxiosRequestConfig } from "axios";

import authHandler from "../utils/auth-handler";

interface CustomHeaders extends AxiosHeaders {
  authorization: string | null;
}

const { getJwt } = authHandler();

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

axiosInstance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  (request.headers as CustomHeaders).authorization = getJwt();

  return request;
});

export default axiosInstance;
