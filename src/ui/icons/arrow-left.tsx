import type { JSX, PropsWithoutRef, SVGProps } from "react";

export default function ArrowLeftIcon({
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
			<title>Arrow Left</title>
			<path
				d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.5 12H3.67004"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
