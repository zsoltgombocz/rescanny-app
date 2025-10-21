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
	...rest
}: Props): JSX.Element {
	const id = name + useId();

	const inputClasses = twMerge(
		"transition w-full rounded-xl border border-gray-700 bg-gray-800/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent pl-10 pr-3 py-2.5 text-sm",
		"aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:ring-red-500",
		"disabled:opacity-50 disabled:grayscale-25 disabled:cursor-not-allowed",
	);

	return (
		<div className={className}>
			<label htmlFor={id} className={"block text-sm text-gray-300"}>
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
					id={id}
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
