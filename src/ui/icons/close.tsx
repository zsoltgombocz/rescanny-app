import type { JSX, PropsWithoutRef, SVGProps } from "react";
import { twMerge } from "tailwind-merge";
export default function CloseIcon({
	className,
}: PropsWithoutRef<SVGProps<SVGElement>>): JSX.Element {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			className={twMerge(className)}
		>
			<title>Close Icon</title>
			<g>
				<path
					d="M9.17004 14.8299L14.83 9.16992"
					stroke="inherit"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.83 14.8299L9.17004 9.16992"
					stroke="inherit"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
}
