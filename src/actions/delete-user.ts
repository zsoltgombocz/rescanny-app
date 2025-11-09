import { useNavigate } from "react-router";
import { post as httpPost } from "../api/http";
import type { ActionResultObject } from "../api/types";
import { useAsyncAction } from "../hooks/use-async-action";
import { useUserStore } from "../store/user";
import { notifySuccess } from "../ui/notify";
import { handleActionException } from "./handle-action-exception";

async function deleteUser(): Promise<ActionResultObject> {
	try {
		const data = await httpPost<{ message: string }>("/user/delete");

		notifySuccess(data.message);

		return { success: true, error: null };
	} catch (e: unknown) {
		return handleActionException(e);
	}
}

export function useDeleteUserAction() {
	const { hydrate } = useUserStore();
	const navigate = useNavigate();

	return useAsyncAction<[], ActionResultObject>(deleteUser, {
		onSuccess: (res) => {
			if (res.success) {
				hydrate(null);
				navigate("/login");
			}
		},
	});
}
