import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import BellIcon from "../../icons/bell";
import UserInfo from "../../icons/user-info";
import LinkBox from "../layout/link-box";
import { Title } from "../title";
import CogIcon from "../../icons/cog.tsx";

export default function AccountManagementSection(): JSX.Element {
	const { t } = useTranslation();

	return (
		<div className={"mt-6 space-y-3"}>
			<Title type="h4" className={"text-gray-400"}>
				{t("profile.accountSettings.title")}
			</Title>

			<LinkBox
				to="/manage/personal"
				icon={<UserInfo className={"w-6 h-6 stroke-white"}></UserInfo>}
				title={t("profile.accountSettings.personal.title")}
				subtitle={t("profile.accountSettings.personal.subtitle")}
			/>

			<LinkBox
				to="/manage/appearance"
				icon={<CogIcon className={"w-6 h-6 stroke-white"}></CogIcon>}
				title={t("profile.accountSettings.appearance.title")}
				subtitle={t("profile.accountSettings.appearance.subtitle")}
			/>

			<LinkBox
				to="/manage/notifications"
				icon={<BellIcon className={"w-6 h-6 stroke-white"}></BellIcon>}
				title={t("profile.accountSettings.notifications.title")}
				subtitle={t("profile.accountSettings.notifications.subtitle")}
			/>
		</div>
	);
}
