import type * as React from "react";
import type { JSX } from "react";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

type Props = React.HTMLAttributes<HTMLElement> & {
	variant: "primary" | "gray";
	icon?: JSX.Element;
	href: string;
};
export function Button({
	href,
	variant,
	icon,
	children,
	className,
	...props
}: Props): JSX.Element {
	const classes = twMerge(
		"inline-flex items-center justify-center gap-2 transition font-semibold text-white px-5 py-3 w-full",
		variant === "primary" && "",
		variant === "gray" &&
			"bg-gray-800 rounded-xl  border border-gray-700 hover:border-gray-600 hover:bg-gray-750/90",
		className,
	);

	if (href) {
		return (
			<Link to={href} className={classes} {...props}>
				{icon}
				<span>{children}</span>
			</Link>
		);
	}

	return (
		<button className={classes} {...props}>
			{icon}
			<span>{children}</span>
		</button>
	);
}
