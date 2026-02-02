import { type ComponentProps, type JSX, useId } from "react";
import { twMerge } from "tailwind-merge";
import { Text } from "../text";

type Props = ComponentProps<"input"> & {
	label?: string;
	name: string;
	type: string;
	autocomplete?: string;
	required?: boolean;
	placeholder?: string;
	icon?: JSX.Element;
	errorMessage?: string;
	inputClassName?: string;
};

export default function Input({
	className,
	label,
	type,
	name,
	autocomplete,
	required,
	placeholder,
	icon,
	errorMessage,
	inputClassName,
	id,
	...rest
}: Props): JSX.Element {
	const randomId = useId();
	const inputId = id ?? name + randomId;

	const inputClasses = twMerge(
		"transition w-full rounded-xl bg-card/80 border border-border focus:ring-primary text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent px-3 py-2.5 text-sm",
		"aria-[invalid=true]:border-destructive aria-[invalid=true]:focus:ring-destructive",
		"disabled:opacity-50 disabled:grayscale-25 disabled:cursor-not-allowed",
		icon && "!pl-10",
		inputClassName,
	);

	return (
		<div className={className}>
			<label
				htmlFor={inputId}
				className={"block text-sm text-muted-foreground"}
			>
				{label}
			</label>
			<div className={"mt-1 relative"}>
				<div
					className={
						"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none stroke-gray-500"
					}
				>
					{icon}
				</div>
				<input
					id={inputId}
					name={name}
					type={type}
					autoComplete={autocomplete}
					required={required}
					placeholder={placeholder}
					className={inputClasses}
					{...rest}
				/>
			</div>
			{errorMessage && (
				<Text className={"text-rose-500 mt-1 text-xs"}>{errorMessage}</Text>
			)}
		</div>
	);
}
