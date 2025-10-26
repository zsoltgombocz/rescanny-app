import { createBrowserRouter, type RouteObject } from "react-router";
import { magicLinkLoginLoader } from "./loaders/magic-link-login";
import { rootLoader } from "./loaders/root-loader";
import { AppLayout } from "./ui/layout/app-layout";
import { Guard } from "./ui/layout/guard";
import Login from "./ui/screens/login";
import NotFound from "./ui/screens/not-found";

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
			{
				path: "login",
				element: (
					<Guard policy={AuthPolicy.Guest}>
						<Login />
					</Guard>
				),
				children: [
					{
						path: "magic-link",
						loader: magicLinkLoginLoader,
					},
				],
			},
			{ path: "*", element: <NotFound /> },
		],
	},
];

export const router = createBrowserRouter(routes);
