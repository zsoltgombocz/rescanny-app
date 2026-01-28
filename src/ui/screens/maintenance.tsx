import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { useLoaderData } from "react-router";
import type { MaintenanceMode } from "../../api/types";
import IconWrapper from "../components/icon-wrapper";
import { Text } from "../components/text";
import { Title } from "../components/title";
import { Versions } from "../components/versions";
import ShieldIcon from "../icons/shield";
import PageLayout from "../layout/page-layout";

export default function Maintenace(): JSX.Element {
	const { t } = useTranslation();
	const { maintenanceMode } = useLoaderData<{
		maintenanceMode: MaintenanceMode | undefined;
	}>();

	return (
		<PageLayout>
			<div className={"text-center mt-24 max-w-md"}>
				<IconWrapper>
					<ShieldIcon className={"stroke-white w-7 h-7"} />
				</IconWrapper>

				<Title type="h1" className={"mb-2"}>
					{t("maintenance.title")}
				</Title>
				{maintenanceMode?.from && maintenanceMode?.to && (
					<Text className={"text-sm"}>
						{maintenanceMode?.from} - {maintenanceMode?.to}
					</Text>
				)}
				<Text className={"mb-4 mt-6"}>{maintenanceMode?.message}</Text>
				<Text className={"text-sm"}>{t("maintenance.subtitle")}</Text>
			</div>

			<Versions />
		</PageLayout>
	);
}
