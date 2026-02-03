import { post as httpPost } from "../api/http";
import type { ActionResultObject } from "../api/types";
import { useAsyncAction } from "../hooks/use-async-action.ts";
import { notifySuccess } from "../ui/notify";

async function requestEmailChangeCode(
	newEmail: string,
): Promise<ActionResultObject> {
	const formData = { new_email: newEmail };
	const data = await httpPost<{ message: string; codeSent?: boolean }>(
		"/user/email-change/request",
		formData,
	);

	notifySuccess(data.message);

	return { success: true, error: null, data };
}

export function useRequestEmailChangeCode(
	onSuccess?: (result: ActionResultObject) => void,
	onError?: (error: unknown) => void,
) {
	return useAsyncAction<[string], ActionResultObject>(requestEmailChangeCode, {
		onSuccess,
		onError,
	});
}
