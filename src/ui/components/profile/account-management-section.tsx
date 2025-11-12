import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { useUser } from "../../../store/user";
import BellIcon from "../../icons/bell";
import UserInfo from "../../icons/user-info";
import LinkBox from "../layout/link-box";
import { Title } from "../title";

export default function AccountManagementSection(): JSX.Element {
	const { t } = useTranslation();
	const user = useUser();

	return (
		<div className={"mt-6 space-y-3"}>
			<Title type="h4" className={"text-gray-400"}>
				{t("profile.accountSettings.title")}
			</Title>

			<LinkBox
				to="/manage/email"
				icon={<UserInfo className={"w-6 h-6 stroke-white"}></UserInfo>}
				title={t("profile.accountSettings.email.title")}
				subtitle={t("profile.accountSettings.email.subtitle", {
					email: user?.email,
				})}
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
