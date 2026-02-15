import type { HTMLAttributes, JSX } from "react";
import { twMerge } from "tailwind-merge";

type Props = HTMLAttributes<HTMLElement> & {
	avatar: string;
};

export default function Avatar({
	avatar,
	className,
	...rest
}: Props): JSX.Element {
	return (
		<div
			className={twMerge(
				"w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-semibold",
				className,
			)}
			{...rest}
		>
			{avatar}
		</div>
	);
}
