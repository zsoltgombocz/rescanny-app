import type * as React from "react";
import type { JSX } from "react";
import { twMerge } from "tailwind-merge";
import LoadingIcon from "../icons/loading";

export type Variants =
	| "primary"
	| "gray"
	| "gray-solid"
	| "danger"
	| "danger-solid"
	| "fancy"
	| "custom";

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
		"rounded-xl text-sm inline-flex items-center justify-center gap-2 transition font-semibold text-white px-5 py-3 w-full",
		"disabled:opacity-90 disabled:grayscale-100 disabled:cursor-not-allowed",
		variant === "primary" &&
			"bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg",
		variant === "gray" && "bg-card/50 border border-border hover:bg-card",
		variant === "danger" &&
			"bg-destructive/5 border border-destructive/20 hover:bg-destructive/10 text-destructive",
		variant === "fancy" &&
			"bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 font-medium hover:shadow-lg !px-8 !py-3",
		variant === "custom" && "rounded-xl shadow-lg",
		variant === "gray-solid" &&
			"bg-secondary hover:bg-secondary/80 text-secondary-foreground",
		variant === "danger-solid" &&
			"bg-destructive hover:bg-destructive/90 text-destructive-foreground",
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
