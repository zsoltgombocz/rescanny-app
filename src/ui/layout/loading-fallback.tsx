import type { JSX } from "react";
import { Text } from "../components/text";
import LoadingIcon from "../icons/loading";

export function LoadingFallback(): JSX.Element {
	return (
		<div
			className={
				"flex-grow h-full w-full flex items-center justify-center gap-2 flex-col"
			}
		>
			<LoadingIcon />

			<Text>Betöltés</Text>
		</div>
	);
}
