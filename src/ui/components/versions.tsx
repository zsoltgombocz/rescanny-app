import type * as React from "react";
import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { useAppVersion } from "../../hooks/use-app-version.ts";
import { useApiStatusStore } from "../../store/api-status.ts";
import { Text } from "./text.tsx";

export function Versions({
	className,
}: React.HTMLProps<HTMLParagraphElement>): JSX.Element {
	const data = useApiStatusStore((store) => store.data);
	const { version: appVersion } = useAppVersion();
	const { t } = useTranslation();

	return (
		<Text
			className={twMerge(
				"text-sm text-gray-500 flex gap-2 items-center justify-center my-8",
				className,
			)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="1.5"
				className="w-4 h-4"
			>
				<title>Bolt Icon</title>
				<path d="M12 2v4"></path>
				<path d="M12 18v4"></path>
				<path d="M4.93 4.93 7.76 7.76"></path>
				<path d="M16.24 16.24l2.83 2.83"></path>
				<path d="M2 12h4"></path>
				<path d="M18 12h4"></path>
				<path d="M4.93 19.07 7.76 16.24"></path>
				<path d="M16.24 7.76l2.83-2.83"></path>
			</svg>
			<span>{t("version")}:</span>
			<span>APP {appVersion}</span>
			<span>•</span>
			<span>API {data?.version}</span>
		</Text>
	);
}
