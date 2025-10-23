import { get as httpGet } from "../api/http";
import { type User, userGetState } from "../store/user";

export async function rootLoader() {
	const { hydrated, hydrate } = userGetState();

	if (!hydrated && typeof window !== "undefined") {
		const me = await httpGet("/user/me").catch(
			() => null,
		);

		const user = me ? me as User : null;

		hydrate(user);
	}
	
	const { user } = userGetState();

	return { user };
}
