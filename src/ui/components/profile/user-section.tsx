import type { JSX } from "react";
import { useTranslation } from "react-i18next";
import { useUser } from "../../../store/user";
import DisplayBox from "../layout/display-box";
import { Text } from "../text";
import { Title } from "../title";
import Avatar from "./avatar";
import SubscriptionBadge from "./subscription-badge";

export default function UserSection(): JSX.Element {
	const { t } = useTranslation();
	const user = useUser();

	if (!user) {
		return <DisplayBox>{t("warning.user_required")}</DisplayBox>;
	}

	return (
		<DisplayBox className={"flex items-start gap-4"}>
			<Avatar avatar={user.avatar} />
			<div className={"flex-1"}>
				<Title
					type="h2"
					className={"text-xl! sm:text-2xl! text-white flex items-center"}
				>
					<span>{user.displayName}</span>
					<Text className={"text-sm ml-2"}>
						({user.id.substring(user.id.length - 6)})
					</Text>
				</Title>
				<Text className={"mt-1 text-sm"}>{user.email}</Text>
				<SubscriptionBadge hasCrown={true} type={"Pro"} />
			</div>
		</DisplayBox>
	);
}
