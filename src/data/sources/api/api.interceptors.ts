import axios, {
  AxiosError,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { type AxiosInterceptors } from "./api.provider";
import { type RefreshTokenResponse } from "./types";

// Menambahkan properti _retry ke interface Axios agar tidak error
declare module "axios" {
  export interface InternalAxiosRequestConfig {
    _retry?: boolean;
  }
}

export const mainInterceptors: AxiosInterceptors = {
  onRequest: (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("access_token");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  onRequestError: (error: AxiosError) => Promise.reject(error),
  onResponse: (response: AxiosResponse) => response,
  onResponseError: async (error: AxiosError) => {
    const originalRequest = error.config;

    // Sekarang originalRequest._retry sudah dikenali oleh TypeScript
    if (
      error.response?.status === 401 &&
      originalRequest &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");

        const { data } = await axios.post<RefreshTokenResponse>(
          `${import.meta.env.VITE_API_URL}/auth/refresh`,
          { refresh_token: refreshToken }
        );

        localStorage.setItem("access_token", data.accessToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
        }

        // Jalankan ulang request yang gagal dengan token baru
        return axios(originalRequest);
      } catch (refreshError) {
        localStorage.clear();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  },
};