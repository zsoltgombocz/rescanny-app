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
				"bg-card/50 border border-border rounded-xl p-6",
				className,
			)}
			{...props}
		>
			{children}
		</section>
	);
}
