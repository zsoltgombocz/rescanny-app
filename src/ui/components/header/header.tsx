import type { JSX } from "react";
import { useLocation } from "react-router";
import { useUserStore } from "../../../store/user.ts";
import { Logo } from "../logo";
import { Title } from "../title";
import GoBackButton from "./go-back-button";
import NotificationToggle from "./notification-toggle.tsx";

export default function Header(): JSX.Element {
	const location = useLocation();
	const user = useUserStore();

	return (
		<header
			className={
				"border-b border-border w-full px-4 sm:px-6 py-4 flex justify-between items-center"
			}
		>
			<div className={"flex items-center gap-3"}>
				<div className={"flex items-center gap-4"}>
					{location.pathname.includes("page") && <GoBackButton />}
					<div className="flex gap-2 items-center">
						<Logo scale="small" />

						<Title type="h1" className={"text-xl! sm:text-2xl! text-white"}>
							Rescanny
						</Title>
					</div>
				</div>
			</div>

			{user.hydrated && <NotificationToggle />}
		</header>
	);
}
