import { type LoaderFunctionArgs, redirect } from "react-router";
import magicLinkValidation from "../actions/validate-magic-link";
import { type User, userGetState } from "../store/user";

export async function magicLinkLoginLoader({ request }: LoaderFunctionArgs) {
	const url = new URL(request.url);
	const token = url.searchParams.get("token");
	const { hydrate } = userGetState();

	if (!token) {
		return redirect("/login");
	}

	const { success, data } = await magicLinkValidation(token);

	if (success) {
		if (data) {
			hydrate(data as User);
		}

		return redirect("/");
	}

	return redirect("/login");
}
