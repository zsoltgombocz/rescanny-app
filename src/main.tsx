import i18n from "i18next";
import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import en from "./lang/en.ts";
import hu from "./lang/hu.ts";

const _Welcome = lazy(() => import("./ui/screens/welcome.tsx"));
const _NotFound = lazy(() => import("./ui/screens/not-found.tsx"));

import { ToastContainer } from "react-toastify";
import { useApiStatusStore } from "./store/api-status.ts";

import "./index.css";
import { initReactI18next } from "react-i18next";

import router from "./routes.tsx";

const root = document.getElementById("root");

i18n.use(initReactI18next).init({
	resources: { hu, en },
	lng: "hu",
	interpolation: {
		escapeValue: false,
	},
});

if (!root) {
	console.error("No root found!");
} else {
	void useApiStatusStore.getState().fetch();

	createRoot(root).render(
		<StrictMode>
			<RouterProvider router={router}></RouterProvider>

			<ToastContainer />
		</StrictMode>,
	);
}
