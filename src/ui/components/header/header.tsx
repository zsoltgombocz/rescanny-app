import type { JSX } from "react";
import { useLocation } from "react-router";
import { Logo } from "../logo";
import { Title } from "../title";
import GoBackButton from "./go-back-button";

export default function Header(): JSX.Element {
	const location = useLocation();

	return (
		<header
			className={
				"border border-b border-gray-800 w-full px-4 sm:px-6 py-4 flex justify-between items-center"
			}
		>
			<div className={"flex items-center gap-3"}>
				<div className={"flex items-center gap-4"}>
					{location.pathname.includes("page") && <GoBackButton />}
					<a href="/" className="flex gap-2 items-center">
						<Logo scale="small" />

						<Title type="h1" className={"text-xl! sm:text-2xl! text-white"}>
							Rescanny
						</Title>
					</a>
				</div>
			</div>
		</header>
	);
}
