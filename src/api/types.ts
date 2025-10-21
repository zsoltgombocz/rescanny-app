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
