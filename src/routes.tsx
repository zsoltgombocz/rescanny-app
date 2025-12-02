import { createBrowserRouter, type RouteObject } from "react-router";
import { lazyRoute } from "./helpers/lazy-route";
import { magicLinkLoginLoader } from "./loaders/magic-link-login";
import { pageLoader } from "./loaders/page";
import { rootLoader } from "./loaders/root-loader";
import { AppLayout } from "./ui/layout/app-layout";
import { FullPageLoader } from "./ui/layout/full-page-loader";
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
		hydrateFallbackElement: <FullPageLoader />,
		children: [
			{
				index: true,
				lazy: lazyRoute(() => import("./ui/screens/home"), AuthPolicy.Required),
			},
			{
				path: "user/profile",
				lazy: lazyRoute(
					() => import("./ui/screens/profile"),
					AuthPolicy.Required,
				),
			},
			{
				path: "login",
				lazy: lazyRoute(() => import("./ui/screens/login"), AuthPolicy.Guest),
				children: [
					{
						path: "magic-link",
						loader: magicLinkLoginLoader,
						element: null,
					},
				],
			},
			{
				path: "page/:slug",
				loader: pageLoader,
				lazy: lazyRoute(() => import("./ui/screens/page"), AuthPolicy.None),
			},
			{ path: "*", element: <NotFound /> },
		],
	},
];

export const router = createBrowserRouter(routes);
