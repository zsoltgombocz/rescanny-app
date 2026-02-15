import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { useUserSubscription } from "../../../store/user";
import DisplayBox from "../layout/display-box";
import Link from "../link";
import { Text } from "../text";
import { Title } from "../title";

export default function SubscriptionSection(): JSX.Element {
	const { t } = useTranslation();
	const subscription = useUserSubscription();

	if (!subscription) {
		return <DisplayBox>{t("warning.subscriptionMissing")}</DisplayBox>;
	}

	return (
		<DisplayBox className={"flex items-start gap-4 mt-6 flex-col"}>
			<div className={"w-full"}>
				<div className={"flex justify-between items-center mb-4"}>
					<Title type="h4">{t("profile.subscriptionSection.title")}</Title>
					<Link
						to="/manage/subscription"
						variant="primary"
						className={"font-medium"}
					>
						{t("profile.subscriptionSection.modify")}
					</Link>
				</div>
				<div className={"space-y-3"}>
					<div className={"flex justify-between items-center"}>
						<Text>{t("profile.subscriptionSection.label")}</Text>
						<Text className={"text-white font-medium"}>
							{subscription.label}
						</Text>
					</div>
					<div className={"flex justify-between items-center"}>
						<Text>{t("profile.subscriptionSection.price")}</Text>
						<Text className={"text-white font-medium"}>
							{subscription.price}
						</Text>
					</div>
					<div className={"flex justify-between items-center"}>
						<Text>{t("profile.subscriptionSection.nextBilling")}</Text>
						<Text className={"text-white font-medium"}>
							{subscription.nextBilling}
						</Text>
					</div>
				</div>
			</div>
		</DisplayBox>
	);
}
