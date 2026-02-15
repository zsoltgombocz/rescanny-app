import type { JSX } from "react";
import { NavLink } from "react-router";
import { twMerge } from "tailwind-merge";
import { Text } from "../text";

type Props = {
	to: string;
	icon: JSX.Element;
	label: string;
};

export default function NavItem({
	to,
	icon,
	label,
	...rest
}: Props): JSX.Element {
	return (
		<NavLink
			className={({ isActive }) =>
				twMerge(
					"text-center flex flex-col justify-center items-center text-gray-400 stroke-gray-400 hover:text-white hover:stroke-white transition",
					isActive && "!text-primary !stroke-primary",
				)
			}
			to={to}
			{...rest}
		>
			<span className={"w-fit"}>{icon}</span>
			<Text className={"text-inherit! text-xs sm:text-md font-medium"}>
				{label}
			</Text>
		</NavLink>
	);
}
