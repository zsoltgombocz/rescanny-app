import { type AnyAppError, ValidationError } from "../api/errors";
import type { ActionResultObject } from "../api/types";
import { notifyError } from "../ui/notify";

export function handleActionException(e: unknown): ActionResultObject {
	const error = e as AnyAppError;

	if (error instanceof ValidationError) {
		return { success: false, error: error };
	}

	notifyError(error);

	throw error;
}
