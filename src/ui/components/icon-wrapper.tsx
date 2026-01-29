import type { ComponentProps, JSX } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
	variant?: "default" | "danger" | "gray";
} & ComponentProps<"div">;

export default function IconWrapper({
	children,
	variant = "default",
	className,
	...props
}: Props): JSX.Element {
	const color = twMerge([
		variant === "default" && "bg-gradient-to-r from-primary to-accent",
		variant === "danger" && "bg-destructive",
		variant === "gray" && "bg-secondary/50",
	]);
	return (
		<div className={twMerge([
			"flex w-16 h-16 rounded-xl shadow-lg items-center justify-center",
			color,
			className,
		])} {...props}>
			{children}
		</div>
	);
}
