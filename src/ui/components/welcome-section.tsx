import type { ComponentProps, JSX } from "react";
import { twMerge } from "tailwind-merge";
import { Logo } from "./logo";
import { Text } from "./text";
import { Title } from "./title";

type Props = ComponentProps<"div"> & {
	title: string;
	subtitle: string;
};

export default function WelcomeSection({
	className,
	title,
	subtitle,
	...rest
}: Props): JSX.Element {
	return (
		<div className={twMerge("text-center", className)} {...rest}>
			<Logo className={"mb-6 mx-auto"} />
			<Title type="h1" className={"mb-2"}>
				{title}
			</Title>
			<Text className={"mb-8"}>{subtitle}</Text>
		</div>
	);
}
