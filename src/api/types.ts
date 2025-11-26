import type { AnyAppError } from "./errors";

export type MaintenanceMode = {
	active: boolean;
	from: string | null;
	message: string;
	to: string | null;
	upcoming: boolean;
};

export type ApiStatusPayload = {
	maintenance: MaintenanceMode;
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
