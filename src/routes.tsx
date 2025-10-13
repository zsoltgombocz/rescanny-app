import { createBrowserRouter } from "react-router";
import { AppLayout } from "./ui/layout/app-layout";
import Login from "./ui/screens/login";
import NotFound from "./ui/screens/not-found";
import Welcome from "./ui/screens/welcome";

export default createBrowserRouter([
	{
		id: "root",
		path: "/",
		element: <AppLayout />,
		loader: async () => {},
		children: [
			{ index: true, element: <Welcome /> },
			{ path: "/login", element: <Login /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);
