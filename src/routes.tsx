import { createBrowserRouter, type RouteObject } from "react-router";
import { rootLoader } from "./loaders/root-loader";
import { AppLayout } from "./ui/layout/app-layout";
import { Guard } from "./ui/layout/guard";
import Login from "./ui/screens/login";
import NotFound from "./ui/screens/not-found";
import Welcome from "./ui/screens/welcome";

export enum AuthPolicy {
	None = "none",
	Guest = "guest",
	Required = "required",
}

export const routes: RouteObject[] = [
	{
		id: "root",
		path: "/",
		element: <AppLayout />,
		loader: rootLoader,
		children: [
			{
				index: true,
				element: (
					<Guard policy={AuthPolicy.Required}>
						<div>dashboard</div>
					</Guard>
				),
			},
			{
				path: "user/profile",
				element: (
					<Guard policy={AuthPolicy.Required}>
						<div>profile</div>
					</Guard>
				),
			},
			{ path: "welcome", element: <Welcome /> },
			{
				path: "login",
				element: (
					<Guard policy={AuthPolicy.Guest}>
						<Login />
					</Guard>
				),
			},
			{ path: "*", element: <NotFound /> },
		],
	},
];

export const router = createBrowserRouter(routes);
