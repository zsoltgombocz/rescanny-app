import { useNavigate } from "react-router";
import { post as httpPost } from "../api/http";
import type { ActionResultObject } from "../api/types";
import { useAsyncAction } from "../hooks/use-async-action";
import { useUserStore } from "../store/user";
import { notifySuccess } from "../ui/notify";
import { handleActionException } from "./handle-action-exception";

async function logout(): Promise<ActionResultObject> {
	try {
		const data = await httpPost<{ message: string }>("/auth/logout");

		notifySuccess(data.message);

		return { success: true, error: null };
	} catch (e: unknown) {
		return handleActionException(e);
	}
}

export function useLogoutAction() {
	const { hydrate } = useUserStore();
	const navigate = useNavigate();

	return useAsyncAction<[], ActionResultObject>(logout, {
		onSuccess: (res) => {
			if (res.success) {
				hydrate(null);
				navigate("/login");
			}
		},
	});
}
