import { type JSX, type PropsWithoutRef, type SVGProps, useId } from "react";
import { twMerge } from "tailwind-merge";

export default function ErrorIcon({
	className,
}: PropsWithoutRef<SVGProps<SVGElement>>): JSX.Element {
	const id = useId();

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			className={twMerge(className)}
		>
			<title>Error Icon</title>
			<g clipPath={`url(#${id})`}>
				<path
					d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
					stroke="inherit"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
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
			<defs>
				<clipPath id={id}>
					<rect width="24" height="24" fill="inherit" />
				</clipPath>
			</defs>
		</svg>
	);
}
