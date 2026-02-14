import { post as httpPost } from "../api/http";
import type { ActionResultObject } from "../api/types";
import { notifySuccess } from "../ui/notify";
import { handleActionException } from "./handle-action-exception.ts";

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
		return handleActionException(e);
	}
}
