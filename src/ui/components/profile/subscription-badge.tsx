import type { HTMLAttributes, JSX } from "react";
import { useTranslation } from "react-i18next";
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
			className={
				"mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20"
			}
			{...rest}
		>
			<CrownIcon className={"stroke-indigo-400 w-4 h-4"} />
			<span className={"text-sm font-medium text-indigo-400"}>
				{t("subscriptionBadge", { type })}
			</span>
		</div>
	);
}
