/*
 * @Author: allenxing
 * @Date: 2024-05-03 22:08:36
 * @LastEditors: allenxing
 * @LastEditTime: 2024-05-03 22:15:13
 * @Description: 自定义axios
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
 */

import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
  } from "axios";
import { IResponse } from "./type";

// 如果请求超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = 5000;

const axiosInstance: AxiosInstance = axios.create({
baseURL: import.meta.env.VITE_APP_BASE_API + "",
});

// axios实例拦截请求
axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig):any => {
        // 配置headers
        config.headers = {
        ...config.headers,
        };
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

// axios实例拦截响应
axiosInstance.interceptors.response.use(
    // 请求成功
    (response: AxiosResponse) => {
        return response;
    },
    // 请求失败
    (error: AxiosError) => {
        const { response } = error;
        console.error(response, "response error");
        if (response) {
        return Promise.reject(response.data);
        }
    }
);

const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
    const conf = config;
    return new Promise((resolve) => {
        axiosInstance
        .request<any, AxiosResponse<IResponse>>(conf)
        .then((res: AxiosResponse<IResponse>) => {
            const {
            data: { result },
            } = res;
            resolve(result as T);
        });
    });
};

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return request({ ...config, method: "GET" });
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return request({ ...config, method: "POST" });
}

export default request;
export type { AxiosInstance, AxiosResponse };