import type { ComponentProps, JSX } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
	variant?: "default" | "orange";
} & ComponentProps<"div">;

export default function IconWrapper({
	children,
	variant = "default",
	...props
}: Props): JSX.Element {
	const color = twMerge([
		variant === "default" && "bg-gradient-to-r from-indigo-500 to-teal-500",
		variant === "orange" && "bg-gradient-to-r from-red-500 to-orange-500",
	]);
	return (
		<div className={"flex items-center justify-center mb-6"} {...props}>
			<div
				className={twMerge([
					"flex w-16 h-16 rounded-2xl shadow-lg items-center justify-center",
					color,
				])}
			>
				{children}
			</div>
		</div>
	);
}
