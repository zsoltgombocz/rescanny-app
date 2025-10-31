import { lazy } from "react";
import { createBrowserRouter, type RouteObject } from "react-router";
import { magicLinkLoginLoader } from "./loaders/magic-link-login";
import { rootLoader } from "./loaders/root-loader";
import { AppLayout } from "./ui/layout/app-layout";
import { FullPageLoader } from "./ui/layout/full-page-loader";
import { Guard } from "./ui/layout/guard";
import NotFound from "./ui/screens/not-found";

const Home = lazy(() => import("./ui/screens/home"));
const Login = lazy(() => import("./ui/screens/login"));
const Profile = lazy(() => import("./ui/screens/profile"));

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
		hydrateFallbackElement: <FullPageLoader />,
		children: [
			{
				index: true,
				element: (
					<Guard policy={AuthPolicy.Required}>
						<Home />
					</Guard>
				),
			},
			{
				path: "user/profile",
				element: (
					<Guard policy={AuthPolicy.Required}>
						<Profile />
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
						element: null,
					},
				],
			},
			{ path: "*", element: <NotFound /> },
		],
	},
];

export const router = createBrowserRouter(routes);
