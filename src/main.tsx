import i18n from "i18next";
import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import en from "./lang/en.ts";
import hu from "./lang/hu.ts";

const Welcome = lazy(() => import("./ui/screens/welcome.tsx"));
const NotFound = lazy(() => import("./ui/screens/not-found.tsx"));

import { ToastContainer } from "react-toastify";
import { useApiStatusStore } from "./store/api-status.ts";
import { AppLayout } from "./ui/layout/app-layout.tsx";
import { LazyLoad } from "./ui/layout/lazy-load.tsx";

import "./index.css";
import { initReactI18next } from "react-i18next";

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
			<BrowserRouter>
				<Routes>
					<Route element={<AppLayout />} path="/">
						<Route
							path="/"
							element={
								<LazyLoad>
									<Welcome />
								</LazyLoad>
							}
						/>
						<Route
							path="*"
							element={
								<LazyLoad>
									<NotFound />
								</LazyLoad>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>

			<ToastContainer />
		</StrictMode>,
	);
}
