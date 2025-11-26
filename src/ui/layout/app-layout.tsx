import { type JSX, Suspense } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router";
import type { ApiError } from "../../api/errors";
import type { MaintenanceMode } from "../../api/types";
import { useUser } from "../../store/user";
import Header from "../components/header";
import Navbar from "../components/navbar/navbar";
import ErrorPage from "../screens/error";
import Maintenace from "../screens/maintenance";
import { LoadingFallback } from "./loading-fallback";

export function AppLayout(): JSX.Element {
	const navigation = useNavigation();
	const isNavigating = navigation.state === "loading";
	const user = useUser();
	const { maintenanceMode, error } = useLoaderData<{
		maintenanceMode: MaintenanceMode | undefined;
		error: ApiError | null;
	}>();

	if (error) {
		return (
			<main
				className={
					"min-h-[100dvh] container mx-auto px-6 text-white h-full flex-grow flex flex-col"
				}
			>
				<ErrorPage />
			</main>
		);
	}

	if (maintenanceMode?.active) {
		return (
			<main
				className={
					"min-h-[100dvh] container mx-auto px-6 text-white h-full flex-grow flex flex-col"
				}
			>
				<Maintenace />
			</main>
		);
	}

	return (
		<div className={"min-h-[100dvh] flex flex-col"}>
			{user && <Header />}
			<main
				className={
					"container mx-auto px-6 text-white h-full flex-grow flex flex-col"
				}
			>
				<Suspense fallback={<LoadingFallback />}>
					{isNavigating ? <LoadingFallback /> : <Outlet />}
				</Suspense>
			</main>
			{user && <Navbar />}
		</div>
	);
}
