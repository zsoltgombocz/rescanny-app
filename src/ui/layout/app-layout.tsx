import { type JSX, Suspense } from "react";
import { Outlet, useNavigation } from "react-router";
import { LoadingFallback } from "./loading-fallback";

export function AppLayout(): JSX.Element {
	const navigation = useNavigation();
	const isNavigating = navigation.state === "loading";

	return (
		<div className={"min-h-[100dvh] flex flex-col"}>
			<main
				className={
					"container mx-auto px-6 text-white h-full flex-grow flex flex-col"
				}
			>
				<Suspense fallback={<LoadingFallback />}>
					{isNavigating ? <LoadingFallback /> : <Outlet />}
				</Suspense>
			</main>
		</div>
	);
}
