import type { ComponentProps, JSX } from "react";
import { twMerge } from "tailwind-merge";

type Props = ComponentProps<"section"> & {
	type?: "centered" | "simple";
};

export default function PageLayout({
	children,
	className,
	type = "centered",
}: Props): JSX.Element {
	return (
		<section
			className={twMerge(
				"w-full h-full",
				type === "centered" &&
					"flex-grow flex flex-col justify-around items-center",
				type === "simple" &&
					"overflow-y-auto overflow-x-hidden pt-6 pb-32 max-w-2xl mx-auto",
				className,
			)}
		>
			{children}
		</section>
	);
}
