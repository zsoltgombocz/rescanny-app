import type { JSX } from "react";
import BellIcon from "../icons/bell";

export default function NotificationToggle(): JSX.Element {
	return (
		<button
			type="button"
			className={
				"relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition"
			}
		>
			<BellIcon className={"stroke-gray-300"} />
			<span
				className={
					"text-sm sm:text-md text-white absolute -bottom-2 -right-2 w-5 h-5 bg-indigo-500 rounded-md flex justify-center items-center"
				}
			>
				3
			</span>
		</button>
	);
}
