import type { ToastContentProps } from "react-toastify";
import { twMerge } from "tailwind-merge";
import Close from "../icons/close";
import ErrorIcon from "../icons/error";
import TickIcon from "../icons/tick";
import { Text } from "./text";

type ToastData = {
	variant: "success" | "error";
	title: string;
	body?: string;
};

const icon = {
	success: <TickIcon className={"stroke-success"} />,
	error: <ErrorIcon className={"stroke-destructive"} />,
};

export default function Toast({ closeToast, data }: ToastContentProps) {
	const variant = (data as ToastData)?.variant ?? "error";
	const title = (data as ToastData)?.title;
	const body = (data as ToastData)?.body;

	const iconComponent = icon[variant];
	const containerClass = twMerge(
		"flex items-start gap-3 p-3 rounded-xl border w-full",
		variant === "success" && "border-success/50 bg-success/5",
		variant === "error" && "border-destructive/50 bg-destructive/5",
	);
	return (
		<div className={containerClass}>
			{iconComponent}
			<div>
				<Text className={"text-foreground"}>{title}</Text>
				{body && <Text className={"text-sm mt-2"}>{body}</Text>}
			</div>
			<button
				type="button"
				onClick={closeToast}
				className={
					"w-7 h-7 ml-auto rounded-lg flex justify-center items-center stroke-muted-foreground hover:stroke-foreground hover:bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-ring/20"
				}
			>
				<Close />
			</button>
		</div>
	);
}
