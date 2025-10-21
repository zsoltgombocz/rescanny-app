import axios, {
	type AxiosError,
	type AxiosRequestConfig,
	type AxiosRequestHeaders,
} from "axios";
import {
	ApiError,
	type AppError,
	NetworkError,
	ValidationError,
} from "./errors";
import type { LaravelValidationResponse } from "./types";

const APP_ENV = import.meta.env.APP_ENV ?? "local";

const BASE_URL =
	APP_ENV === "local" ? "/api" : (import.meta.env.VITE_API_URL ?? "");

const API_TOKEN = import.meta.env.VITE_API_TOKEN ?? "";

const http = axios.create({
	baseURL: BASE_URL,
	timeout: 10_000,
	withCredentials: true,
	withXSRFToken: true,
});

http.interceptors.request.use((config) => {
	config.headers = (config.headers as AxiosRequestHeaders) ?? {};

	config.headers.Accept = "application/json";

	config.headers.Authorization = `Bearer ${API_TOKEN}`;

	return config;
});

http.interceptors.response.use(
	(res) => res.data,
	(err: AxiosError) => {
		const error = transformAxiosError(err);
		return Promise.reject(error);
	},
);

const transformAxiosError = (err: AxiosError): AppError => {
	if (!err.response) {
		return new NetworkError();
	}

	if (err.response.status === 422) {
		const responseBody = err.response.data as LaravelValidationResponse;

		return new ValidationError(responseBody.errors, responseBody.message);
	}
	const message =
		(err.response.data as AxiosError).message ?? err.response.statusText;

	return new ApiError(err.response.status, message);
};

export function get<T = unknown>(
	url: string,
	cfg?: AxiosRequestConfig,
): Promise<T> {
	return http.get<T, T>(url, cfg);
}

export function post<T = unknown, D = unknown>(
	url: string,
	data?: D,
	cfg?: AxiosRequestConfig,
): Promise<T> {
	return http.post<T, T, D>(url, data, cfg);
}

export default http;
