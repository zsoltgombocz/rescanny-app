import type { JSX, PropsWithoutRef, SVGProps } from "react";

export default function PlusIcon({
	...props
}: PropsWithoutRef<SVGProps<SVGElement>>): JSX.Element {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			{...props}
		>
			<title>Plus Icon</title>
			<path
				d="M6 12H18"
				stroke="inherit"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 18V6"
				stroke="inherit"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
