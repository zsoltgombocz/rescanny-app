import type { LaravelErrorBag } from "./types";

export type ErrorType = "Network" | "Api" | "Validation";

export abstract class AppError extends Error {
	abstract type: ErrorType;
	protected constructor(message: string) {
		super(message);

		this.name = new.target.name;
	}

	public getMessage(): string {
		return this.message;
	}
}

export class NetworkError extends AppError {
	type: ErrorType = "Network";
	constructor(message = "Network error") {
		super(message);
	}
}

export class ApiError extends AppError {
	type: ErrorType = "Api";
	code: number;
	constructor(code: number, message = `HTTP ${code}`) {
		super(message);
		this.code = code;
	}

	public getMessage(): string {
		return `${this.code} - ${this.message}`;
	}
}

export class ValidationError extends AppError {
	type: ErrorType = "Validation";
	bag: LaravelErrorBag;
	constructor(bag: LaravelErrorBag, message = "Validation error") {
		super(message);
		this.bag = bag;
	}

	public getErrorBag(): LaravelErrorBag {
		return this.bag;
	}
}

export type AnyAppError = NetworkError | ApiError | ValidationError;

export const isRetryable = (err: AnyAppError) =>
	err instanceof NetworkError ||
	(err instanceof ApiError && err.code >= 500 && err.code < 600);
