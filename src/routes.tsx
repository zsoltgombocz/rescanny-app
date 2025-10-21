import { createBrowserRouter, type RouteObject } from "react-router";
import { requireAuth, requireGuest } from "./loaders/auth";
import { rootLoader } from "./loaders/root-loader";
import { AppLayout } from "./ui/layout/app-layout";
import Login from "./ui/screens/login";
import NotFound from "./ui/screens/not-found";
import Welcome from "./ui/screens/welcome";

export enum AuthPolicy {
	None = "none",
	Guest = "guest",
	Required = "required",
}

export type AppRouteObject = RouteObject & {
	auth?: AuthPolicy;
	children?: AppRouteObject[];
};

export const routes: AppRouteObject[] = [
	{
		id: "root",
		path: "/",
		element: <AppLayout />,
		loader: rootLoader,
		children: [
			{ index: true, element: <div>dashboard</div>, loader: requireAuth },
			{
				path: "user/profile",
				element: <div>profile</div>,
				loader: requireAuth,
			},
			{ path: "welcome", element: <Welcome /> },
			{ path: "login", element: <Login />, loader: requireGuest },
			{ path: "*", element: <NotFound /> },
		],
	},
];

export const router = createBrowserRouter(routes);
