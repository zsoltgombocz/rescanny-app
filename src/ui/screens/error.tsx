import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../components/button";
import IconWrapper from "../components/icon-wrapper";
import { Text } from "../components/text";
import { Title } from "../components/title";
import { Versions } from "../components/versions";
import CloudErrorIcon from "../icons/cloud-error";
import ReloadIcon from "../icons/reload";
import PageLayout from "../layout/page-layout";

export default function ErrorPage(): JSX.Element {
	const { t } = useTranslation();

	return (
		<PageLayout>
			<div className={"text-center mt-24 max-w-md"}>
				<IconWrapper variant="orange">
					<CloudErrorIcon className={"stroke-white w-7 h-7"} />
				</IconWrapper>

				<Title type="h1" className={"mb-2"}>
					{t("error.title")}
				</Title>
				<Text className={"my-6"}>{t("error.subtitle")}</Text>

				<Button
					onClick={() => window.location.reload()}
					icon={<ReloadIcon className={"w-4 h-4 stroke-white"}></ReloadIcon>}
					variant={"gray"}
				>
					{t("button.reloadPage")}
				</Button>
			</div>

			<Versions />
		</PageLayout>
	);
}
