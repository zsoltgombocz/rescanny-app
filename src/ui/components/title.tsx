import type { JSX } from "react";
import * as React from "react";
import { twMerge } from "tailwind-merge";

type Props = React.HTMLProps<HTMLDivElement> & {
	type: "h1" | "h2" | "h3" | "h4";
};

const baseClasses = {
	h1: "text-2xl sm:text-3xl font-semibold",
	h2: "text-xl sm:text-2xl font-semibold",
	h3: "text-lg sm:text-xl font-medium",
	h4: "text-base sm:text-lg font-medium",
};

export function Title({
	children,
	className,
	type,
	...props
}: Props): JSX.Element {
	const classes = twMerge(baseClasses[type], "tracking-tight", className);

	return React.createElement(type, { className: classes, ...props }, children);
}
