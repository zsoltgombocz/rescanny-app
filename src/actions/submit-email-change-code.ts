import { post as httpPost } from "../api/http";
import type { ActionResultObject } from "../api/types";
import { useAsyncAction } from "../hooks/use-async-action.ts";
import { notifySuccess } from "../ui/notify";

export default async function submitEmailChangeCode(
	code: number,
): Promise<ActionResultObject> {
	const data = await httpPost<{ message: string }>(
		"/user/email-change/confirm",
		{ code },
	);

	notifySuccess(data.message);

	return { success: true, error: null, data };
}

export function useSubmitEmailChangeCode(
	onSuccess?: (result: ActionResultObject) => void,
	onError?: (error: unknown) => void,
) {
	return useAsyncAction<[number], ActionResultObject>(submitEmailChangeCode, {
		onSuccess,
		onError,
	});
}
