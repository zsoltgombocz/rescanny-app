import type { JSX } from "react";
import { Logo } from "./logo";
import NotificationToggle from "./notification-toggle";
import { Title } from "./title";

export default function Header(): JSX.Element {
	return (
		<header
			className={
				"border border-b border-gray-800 w-full px-4 sm:px-6 py-4 flex justify-between"
			}
		>
			<div className={"flex items-center gap-3"}>
				<Logo scale="small" />
				<Title type="h1" className={"text-xl! sm:text-2xl! text-white"}>
					Rescanny
				</Title>
			</div>

			<NotificationToggle />
		</header>
	);
}
