import type { JSX } from "react";
import { Outlet } from "react-router";

export function AppLayout(): JSX.Element {
	return (
		<div className={"min-h-[100dvh] flex flex-col"}>
			<main
				className={
					"container mx-auto px-6 text-white h-full flex-grow flex flex-col"
				}
			>
				<Outlet />
			</main>
		</div>
	);
}
