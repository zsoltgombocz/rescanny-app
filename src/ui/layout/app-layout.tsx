import type { JSX } from "react";
import { Outlet } from "react-router";

export function AppLayout(): JSX.Element {
	return (
		<div className={"h-[100dvh] flex flex-col"}>
			<main className={"container mx-auto px-6 text-white h-full"}>
				<Outlet />
			</main>
		</div>
	);
}
