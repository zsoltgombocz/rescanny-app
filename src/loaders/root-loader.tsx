import i18next from "i18next";
import type { LoaderFunctionArgs } from "react-router";
import { get as httpGet } from "../api/http";
import { useApiStatusStore } from "../store/api-status";
import { type User, userGetState } from "../store/user";

export async function rootLoader({ request }: LoaderFunctionArgs) {
	const { hydrated, hydrate } = userGetState();

	await useApiStatusStore.getState().fetch();

	const apiStatusPayload = useApiStatusStore.getState();

	const maintenanceMode = apiStatusPayload.data?.maintenance;

	const url = new URL(request.url);

	if (url.pathname.startsWith("/login/magic-link")) {
		return { user: null };
	}

	if (!hydrated && typeof window !== "undefined") {
		const me = await httpGet("/user/me").catch(() => null);

		const user = me ? (me as User) : null;

		hydrate(user);

		i18next.changeLanguage(user?.locale);
	}

	const { user } = userGetState();

	return { user, maintenanceMode, error: apiStatusPayload.error };
}
