import { post as httpPost } from "../api/http";
import type { ActionResultObject } from "../api/types";
import { notifySuccess } from "../ui/notify";
import { handleActionException } from "./handle-action-exception.ts";

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
		return handleActionException(e);
	}
}
