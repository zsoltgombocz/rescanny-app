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
		variant === "primary" && "text-primary hover:text-primary/80",
		variant === "gray" &&
			"text-muted-foreground hover:text-muted-foreground/80",
		className,
	);
	return (
		<ReactRouterLink className={classes} to={to} {...rest}>
			{children}
		</ReactRouterLink>
	);
}
