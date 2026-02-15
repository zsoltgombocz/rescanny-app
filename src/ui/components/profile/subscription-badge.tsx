import type { HTMLAttributes, JSX } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import CrownIcon from "../../icons/crown";

type Props = HTMLAttributes<HTMLElement> & {
	hasCrown?: boolean;
	type: string;
};

export default function SubscriptionBadge({
	hasCrown = false,
	type,
	className,
	...rest
}: Props): JSX.Element {
	const { t } = useTranslation();

	return (
		<div
			className={twMerge(
				"mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20",
				className,
			)}
			{...rest}
		>
			<CrownIcon
				className={twMerge("stroke-primary w-4 h-4", !hasCrown && "hidden")}
			/>
			<span className={"text-sm font-medium text-primary"}>
				{t("subscriptionBadge", { type })}
			</span>
		</div>
	);
}
