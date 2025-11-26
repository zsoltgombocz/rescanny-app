import { get as httpGet } from "../api/http";
import { useApiStatusStore } from "../store/api-status";
import { type User, userGetState } from "../store/user";

export async function rootLoader() {
	const { hydrated, hydrate } = userGetState();

	await useApiStatusStore.getState().fetch();

	const apiStatusPayload = useApiStatusStore.getState();

	const maintenanceMode = apiStatusPayload.data?.maintenance;

	if (!hydrated && typeof window !== "undefined") {
		const me = await httpGet("/user/me").catch(() => null);

		const user = me ? (me as User) : null;

		hydrate(user);
	}

	const { user } = userGetState();

	return { user, maintenanceMode, error: apiStatusPayload.error };
}
