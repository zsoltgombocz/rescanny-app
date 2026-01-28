import type { JSX } from "react";
import BellIcon from "../../icons/bell";

export default function NotificationToggle(): JSX.Element {
	return (
		<button
			type="button"
			className={
				"relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition"
			}
		>
			<BellIcon className={"stroke-muted-foreground"} />
			<span
				className={
					"text-sm sm:text-md text-white absolute top-2 right-2 w-2 h-2 bg-primary rounded-md flex justify-center items-center"
				}
			></span>
		</button>
	);
}
