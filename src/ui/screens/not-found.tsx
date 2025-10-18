import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "../components/button.tsx";
import { Logo } from "../components/logo.tsx";
import { Text } from "../components/text.tsx";
import { Title } from "../components/title.tsx";
import { Versions } from "../components/versions.tsx";
import ArrowLeftIcon from "../icons/arrow-left.tsx";
import PageLayout from "../layout/page-layout.tsx";

export default function NotFound(): JSX.Element {
	const { t } = useTranslation();

	return (
		<PageLayout>
			<div className={"text-center mt-24"}>
				<Logo className={"mb-6"} />
				<Title type={"h1"} className={"mb-2"}>
					404 - {t("pageNotFound")}
				</Title>
				<Text>{t("pageNotFoundLonger")}</Text>
				<Button
					as={Link}
					icon={<ArrowLeftIcon className={"stroke-white"} />}
					variant={"gray"}
					to={"/"}
					className={"mt-8"}
				>
					{t("backToHome")}
				</Button>
			</div>

			<Versions />
		</PageLayout>
	);
}
