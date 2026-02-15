import type { JSX } from "react";
import { Fragment } from "react/jsx-runtime";
import { Navigate } from "react-router";
import { AuthPolicy } from "../../routes";
import { userGetState } from "../../store/user";

export function Guard({
	children,
	policy = AuthPolicy.None,
}: {
	children: React.ReactNode;
	policy?: AuthPolicy;
}): JSX.Element {
	const { user } = userGetState();

	if (policy === AuthPolicy.Required && !user)
		return <Navigate to={"/login"}></Navigate>;

	if (policy === AuthPolicy.Guest && user)
		return <Navigate to={"/"}></Navigate>;

	return <Fragment>{children}</Fragment>;
}
