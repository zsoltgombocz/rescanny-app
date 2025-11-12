import type { DetailedHTMLProps, HTMLAttributes, JSX } from "react";
import { twMerge } from "tailwind-merge";

export default function DisplayBox({
	children,
	className,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>): JSX.Element {
	return (
		<section
			className={twMerge(
				"bg-gray-800/50 border-gray-700 border rounded-2xl pt-6 pr-6 pb-6 pl-6",
				className,
			)}
			{...props}
		>
			{children}
		</section>
	);
}
