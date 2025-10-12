import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { GlobalNotifier } from "./ui/notify.tsx";

const Welcome = lazy(() => import("./ui/screens/welcome.tsx"));
const NotFound = lazy(() => import("./ui/screens/not-found.tsx"));

import "./index.css";
import { useApiStatusStore } from "./store/api-status.ts";
import { AppLayout } from "./ui/layout/app-layout.tsx";
import { LazyLoad } from "./ui/layout/lazy-load.tsx";

const root = document.getElementById("root");

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

			<GlobalNotifier />
		</StrictMode>,
	);
}
