import { post as httpPost } from "../api/http";
import type { ActionResultObject } from "../api/types";
import { notifySuccess } from "../ui/notify";
import { handleActionException } from "./handle-action-exception.ts";

export default async function updatePersonalInformation(formData: {
	last_name: string | undefined;
	first_name: string | undefined;
}): Promise<ActionResultObject> {
	try {
		const data = await httpPost<{ message: string }>(
			"/user/update/personal",
			formData,
		);

		notifySuccess(data.message);

		return { success: true, error: null };
	} catch (e: unknown) {
		return handleActionException(e);
	}
}
