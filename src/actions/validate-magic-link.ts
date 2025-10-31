import type { AnyAppError } from "../api/errors";
import { post as httpPost } from "../api/http";
import type { ActionResultObject } from "../api/types";
import { notifyError, notifySuccess } from "../ui/notify";

export default async function magicLinkValidation(
	token: string,
): Promise<ActionResultObject> {
	try {
		const data = await httpPost<{ message: string; user: any }>(
			"/auth/magic-link/validate",
			{
				token,
			},
		);
		if (data.message) {
			notifySuccess(data.message);
		}

		return { success: true, error: null, data: data.user };
	} catch (e: unknown) {
		const error = e as AnyAppError;

		notifyError(error);

		return { success: false, error: null };
	}
}
