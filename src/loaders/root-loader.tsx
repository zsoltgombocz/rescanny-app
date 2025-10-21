import { type LoaderFunctionArgs, matchRoutes, redirect } from "react-router";
import { get as httpGet } from "../api/http";
import { AuthPolicy, routes } from "../routes";
import { type User, userGetState } from "../store/user";

function getAuthPolicy(pathname: string): AuthPolicy {
	const matches = matchRoutes(routes, pathname);

	if (!matches || matches.length === 0) {
		return AuthPolicy.None;
	}

	return matches[matches.length - 1].route.auth ?? AuthPolicy.None;
}

export async function rootLoader({ request }: LoaderFunctionArgs) {
	const pathname = new URL(request.url).pathname;
	const policy = getAuthPolicy(pathname);
	const { hydrated, hydrate } = userGetState();

	if (!hydrated && typeof window !== "undefined") {
		const me = await httpGet<{ user: any | null }>("/user/me").catch(
			() => null,
		);

		hydrate(me as User);
	}

	const { user } = userGetState();

	if (policy === AuthPolicy.Required && !user) throw redirect("/welcome");
	if (policy === AuthPolicy.Guest && user) throw redirect("/user/profile");

	return { user };
}
