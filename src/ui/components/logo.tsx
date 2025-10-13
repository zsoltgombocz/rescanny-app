import type * as React from "react";
import type { JSX } from "react";
import { twMerge } from "tailwind-merge";

export function Logo({
	className,
}: React.HTMLProps<HTMLDivElement>): JSX.Element {
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
				className={
					"relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-indigo-500 to-teal-500 flex items-center justify-center shadow-2xl"
				}
			>
				<span
					className={
						"text-xl sm:text-2xl font-semibold tracking-tight text-white"
					}
				>
					R
				</span>
			</div>
		</div>
	);
}
