import type { ComponentProps, JSX } from "react";
import { Text } from "./text";

export default function Divider({
	children,
}: ComponentProps<"div">): JSX.Element {
	return (
		<div className={"flex items-center gap-3 w-full"}>
			<div className={"h-px bg-border flex-1"}></div>
			<Text className={"text-xs"}>{children}</Text>
			<div className={"h-px bg-border flex-1"}></div>
		</div>
	);
}
