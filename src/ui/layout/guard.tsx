import { Navigate, useNavigate } from "react-router";
import { AuthPolicy } from "../../routes";
import { userGetState } from "../../store/user";
import { Fragment } from "react/jsx-runtime";
import type { JSX } from "react";

export function Guard({
  children,
  policy = AuthPolicy.None,
}: {
  children: React.ReactNode;
  policy?: AuthPolicy;
}): JSX.Element {
  const { user } = userGetState();

  if (policy === AuthPolicy.Required && !user)
    return <Navigate to={"/welcome"}></Navigate>;

  if (policy === AuthPolicy.Guest && user)
    return <Navigate to={"/user/profile"}></Navigate>;

  return <Fragment>{children}</Fragment>;
}