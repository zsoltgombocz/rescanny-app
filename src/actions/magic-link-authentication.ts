import { type AnyAppError, ValidationError } from "../api/errors";
import { post as httpPost } from "../api/http";
import type { ActionResultObject } from "../api/types";
import { notifyError, notifySuccess } from "../ui/notify";

export default async function magicLinkAuthentication(
	email: string,
): Promise<ActionResultObject> {
	try {
		const data = await httpPost<{ message: string }>("/auth/magic-link", {
			email,
		});

		notifySuccess(data.message);

		return { success: true, error: null };
	} catch (e: unknown) {
		const error = e as AnyAppError;

		if (error instanceof ValidationError) {
			return { success: false, error: error };
		}

		notifyError(error);

		return { success: false, error: null };
	}
}
