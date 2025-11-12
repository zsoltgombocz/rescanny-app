import { type JSX, Suspense } from "react";
import { Outlet, useNavigation } from "react-router";
import { useUser } from "../../store/user";
import Header from "../components/header";
import Navbar from "../components/navbar/navbar";
import { LoadingFallback } from "./loading-fallback";

export function AppLayout(): JSX.Element {
	const navigation = useNavigation();
	const isNavigating = navigation.state === "loading";
	const user = useUser();

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
