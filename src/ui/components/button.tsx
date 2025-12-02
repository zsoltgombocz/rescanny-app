import type * as React from "react";
import type { JSX } from "react";
import { twMerge } from "tailwind-merge";
import LoadingIcon from "../icons/loading";

type Variants = "primary" | "gray" | "danger" | "fancy" | "custom";

type BaseProps = {
	variant: Variants;
	icon?: React.ReactNode;
	className?: string;
	children: React.ReactNode;
	loading?: boolean;
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
	loading,
	disabled,
	...rest
}: ButtonProps<T>): JSX.Element {
	const Component = as ?? "button";

	const classes = twMerge(
		"rounded-xl text-sm inline-flex items-center justify-center gap-2 transition font-semibold text-white px-5 py-3 w-full w-full",
		"disabled:opacity-75 disabled:grayscale-100 disabled:cursor-not-allowed",
		variant === "primary" &&
			"bg-gradient-to-r from-indigo-600 to-indigo-500 rounded-xl shadow-lg hover:from-indigo-500 hover:to-indigo-400",
		variant === "gray" &&
			"bg-gray-800/50 border border-gray-700 hover:bg-gray-700",
		variant === "danger" &&
			"bg-red-500/5 border border-red-500/20 hover:bg-red-500/10 text-red-400",
		variant === "fancy" &&
			"bg-gradient-to-r from-indigo-500 to-teal-500 font-medium hover:shadow-lg !px-8 !py-3",
		variant === "custom" && "rounded-xl shadow-lg",
		className,
	);

	return (
		<Component className={classes} {...rest} disabled={disabled || loading}>
			{loading ? (
				<LoadingIcon className={"w-6 h-6"} />
			) : (
				<>
					{icon}
					<span>{children}</span>
				</>
			)}
		</Component>
	);
}
