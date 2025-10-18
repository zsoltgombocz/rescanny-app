import type { ComponentProps, JSX } from "react";

export default function PageLayout({
	children,
}: ComponentProps<"section">): JSX.Element {
	return (
		<section
			className={
				"w-full h-full flex-grow flex flex-col justify-around items-center"
			}
		>
			{children}
		</section>
	);
}
