import type * as React from "react";
import type { JSX } from "react";
import { twMerge } from "tailwind-merge";

type Variants = "primary" | "gray" | "custom";

type BaseProps = {
	variant: Variants;
	icon?: React.ReactNode;
	className?: string;
	children: React.ReactNode;
};

type ButtonProps<T extends React.ElementType> = {
	as?: T;
} & BaseProps &
	Omit<React.ComponentPropsWithoutRef<T>, keyof BaseProps | "as">;

export function Button<T extends React.ElementType = "button">({
	as,
	href,
	variant,
	icon,
	children,
	className,
	...rest
}: ButtonProps<T>): JSX.Element {
	const Component = as ?? "button";

	const classes = twMerge(
		"text-sm inline-flex items-center justify-center gap-2 transition font-semibold text-white px-5 py-3 w-full w-full",
		"disabled:opacity-75 disabled:grayscale-100 disabled:cursor-not-allowed",
		variant === "primary" &&
			"bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl shadow-lg hover:from-indigo-500 hover:to-indigo-400",
		variant === "gray" &&
			"bg-gray-800 rounded-xl  border border-gray-700 hover:border-gray-600 hover:bg-gray-750/90",
		variant === "custom" && "rounded-xl shadow-lg",
		className,
	);

	return (
		<Component className={classes} {...rest}>
			{icon}
			<span>{children}</span>
		</Component>
	);
}
