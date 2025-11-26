import i18n from "i18next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import en from "./lang/en.ts";
import hu from "./lang/hu.ts";

import "./index.css";
import { initReactI18next } from "react-i18next";

import { router } from "./routes.tsx";

const root = document.getElementById("root");

i18n.use(initReactI18next).init({
	resources: { hu, en },
	lng: window.navigator.language,
	interpolation: {
		escapeValue: false,
	},
});

if (!root) {
	console.error("No root found!");
} else {
	createRoot(root).render(
		<StrictMode>
			<RouterProvider router={router}></RouterProvider>

			<ToastContainer />
		</StrictMode>,
	);
}
