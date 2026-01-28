import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import AccountManagementSection from "../components/profile/account-management-section";
import DeleteUserButton from "../components/profile/delete-user-button";
import LogoutButton from "../components/profile/logout-button";
import SubscriptionSection from "../components/profile/subscription-section";
import UserSection from "../components/profile/user-section";
import { Title } from "../components/title";
import PageLayout from "../layout/page-layout";

export default function Profile(): JSX.Element {
	const { t } = useTranslation();

	return (
		<PageLayout type="simple">
			<UserSection />
			<SubscriptionSection />
			<AccountManagementSection />

			<div className={"mt-6 space-y-3"}>
				<Title type="h4" className={"text-muted-foreground"}>
					{t("profile.actions")}
				</Title>

				<LogoutButton />
				<DeleteUserButton />
			</div>
		</PageLayout>
	);
}
