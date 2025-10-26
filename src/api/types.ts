import type { AnyAppError } from "./errors";

export type ApiStatusPayload = {
	ready: boolean;
	version: string;
	time: string;
};

export type LaravelErrorBag = Record<string, string[]>;

export type LaravelValidationResponse = {
	message: string;
	errors: LaravelErrorBag;
};

export type ActionResultObject = {
	success: boolean;
	error: AnyAppError | null;
	data?: any;
};
