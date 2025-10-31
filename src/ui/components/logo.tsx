import type * as React from "react";
import type { JSX } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.HTMLProps<HTMLDivElement> & {
	scale?: "big" | "small";
};

export function Logo({ className, scale = "big" }: Props): JSX.Element {
	const sizeClass = twMerge(
		scale === "big" && "w-16 h-16 sm:w-20 sm:h-20 rounded-2xl",
		scale === "small" && "w-10 h-10 sm:w-14 sm:h-14 rounded-xl",
	);
	const fontSizeClass = twMerge(
		scale === "big" && "text-xl sm:text-2xl",
		scale === "small" && "text-lg sm:text-xl",
	);
	return (
		<div
			className={twMerge(
				className,
				"relative inline-flex items-center justify-center w-fit",
			)}
		>
			<div
				className={
					"absolute -inset-6 rounded-3xl bg-gradient-to-r from-indigo-600 to-teal-600 opacity-20 blur-2xl"
				}
			></div>
			<div
				className={twMerge(
					sizeClass,
					"relative bg-gradient-to-r from-indigo-500 to-teal-500 flex items-center justify-center shadow-2xl",
				)}
			>
				<span
					className={twMerge(
						fontSizeClass,
						"font-semibold tracking-tight text-white",
					)}
				>
					R
				</span>
			</div>
		</div>
	);
}
