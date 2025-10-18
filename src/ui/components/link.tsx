import type { ComponentProps, JSX } from "react";
import { Link as ReactRouterLink } from "react-router";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"a"> & {
	to: string;
	variant: "primary" | "gray";
};

export default function Link({
	to,
	variant,
	children,
	className,
	...rest
}: Props): JSX.Element {
	const classes = twMerge(
		"text-sm",
		variant === "primary" && "text-indigo-400 hover:text-indigo-300",
		variant === "gray" && "text-gray-400 hover:text-gray-300",
		className,
	);
	return (
		<ReactRouterLink className={classes} to={to} {...rest}>
			{children}
		</ReactRouterLink>
	);
}
