import { type ComponentProps, type JSX, useId } from "react";

type Props = ComponentProps<"input"> & {
	label?: string;
	name: string;
	type: string;
	autocomplete?: string;
	required?: boolean;
	placeholder?: string;
	icon?: JSX.Element;
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
}: Props): JSX.Element {
	const id = name + useId();
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
					className={
						"w-full rounded-xl border border-gray-700 bg-gray-800/80 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent pl-10 pr-3 py-2.5 text-sm"
					}
				/>
			</div>
		</div>
	);
}
