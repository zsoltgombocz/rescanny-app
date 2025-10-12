import type { JSX } from "react";
import { Text } from "../components/text";

export function LoadingFallback(): JSX.Element {
	return (
		<div
			className={
				"h-full w-full flex items-center justify-center gap-2 flex-col"
			}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 300 150"
				className={"w-20 h-20 stroke-white"}
			>
				<title>Loading Icon</title>
				<path
					fill="none"
					stroke="inherit"
					stroke-width="23"
					stroke-linecap="round"
					stroke-dasharray="300 385"
					stroke-dashoffset="0"
					d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
				>
					<animate
						attributeName="stroke-dashoffset"
						calcMode="spline"
						dur="2"
						values="685;-685"
						keySplines="0 0 1 1"
						repeatCount="indefinite"
					></animate>
				</path>
			</svg>

			<Text>Betöltés</Text>
		</div>
	);
}
