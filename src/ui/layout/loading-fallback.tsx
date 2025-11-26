import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { Text } from "../components/text";
import LoadingIcon from "../icons/loading";

export function LoadingFallback(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div
			className={
				"flex-grow h-full w-full flex items-center justify-center gap-2 flex-col"
			}
		>
			<LoadingIcon />

			<Text>{t("loading")}</Text>
		</div>
	);
}
