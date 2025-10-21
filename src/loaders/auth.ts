import { redirect } from "react-router";
import { userGetState } from "../store/user";

export async function requireAuth() {
	const { hydrated, user } = userGetState();

	if (!hydrated) return null;
	if (!user) throw redirect("/welcome");

	return null;
}

export async function requireGuest() {
	const { hydrated, user } = userGetState();

	if (!hydrated) return null;
	if (user) throw redirect("/user/profile");

	return null;
}
