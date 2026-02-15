import type { JSX } from "react";
import { Link, type LinkProps } from "react-router";
import { twMerge } from "tailwind-merge";
import ChevronRight from "../../icons/chevron-right";
import { Text } from "../text";

type Props = LinkProps & {
	icon: JSX.Element;
	title: string;
	subtitle?: string;
};

export default function LinkBox({
	icon,
	title,
	subtitle,
	children,
	className,
	...props
}: Props): JSX.Element {
	return (
		<Link
			className={twMerge(
				"block bg-card/50 border border-border rounded-xl p-4 hover:bg-card transition text-left group",
				className,
			)}
			{...props}
		>
			<div className={"flex items-center justify-between"}>
				<div className={"flex items-center gap-3"}>
					<div
						className={
							"w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center"
						}
					>
						{icon}
					</div>
					<div>
						<Text className={"text-white"}>{title}</Text>
						{subtitle && <Text className={"text-sm"}>{subtitle}</Text>}
					</div>
				</div>

				<ChevronRight className={"w-5 h-5 stroke-muted-foreground"} />
			</div>
		</Link>
	);
}
