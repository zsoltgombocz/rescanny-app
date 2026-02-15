import { Activity, type JSX, useState } from "react";
import { useTranslation } from "react-i18next";
import { useUserStore } from "../../../../store/user.ts";
import EmailIcon from "../../../icons/email.tsx";
import IconWrapper from "../../icon-wrapper.tsx";
import DisplayBox from "../../layout/display-box.tsx";
import { Text } from "../../text.tsx";
import ConfirmationCode from "./confirmation-code.tsx";
import RequestCode from "./request-code.tsx";

export default function MultiStepEmailChange(): JSX.Element {
	const { t } = useTranslation();
	const { update, user } = useUserStore((state) => state);
	const [emailEditing, setEmailEditing] = useState<boolean>(false);
	const [newEmail, setNewEmail] = useState<string>("");

	const onCodeRequested = (email: string) => {
		setNewEmail(email);
	};

	const onEmailChangeComplete = () => {
		update({ email: newEmail });
		setEmailEditing(false);
		setNewEmail("");
	};

	if (!emailEditing) {
		return (
			<button
				type={"button"}
				className={"w-full block"}
				title={t("button.modify")}
				onClick={() => setEmailEditing(true)}
			>
				<DisplayBox className={"hover:bg-card transition"}>
					<div className={"flex items-center justify-between"}>
						<div className={"flex items-center gap-3"}>
							<IconWrapper
								className={"w-10 h-10 sm:w-12 sm:h-12"}
								variant={"gray"}
							>
								<EmailIcon className={"w-6 h-6 stroke-muted-foreground"} />
							</IconWrapper>
							<div className={"flex flex-col items-start"}>
								<Text className={"text-white"}>{user?.email}</Text>
								<Text className={"text-sm"}>{t("common.tapToEdit")}</Text>
							</div>
						</div>

						<span className={"text-primary hover:text-primary/80 text-sm"}>
							{t("button.modify")}
						</span>
					</div>
				</DisplayBox>
			</button>
		);
	}

	return (
		<DisplayBox className={"hover:bg-card transition !p-4"}>
			<div className={"flex gap-1 flex-row text-sm items-center mb-4"}>
				<Text>{t("multiStepEmailChange.currentEmail")}</Text>
				<Text className={"text-white"}>{user?.email}</Text>
			</div>

			<Activity mode={!newEmail ? "visible" : "hidden"}>
				<RequestCode onCodeRequested={onCodeRequested} />
			</Activity>

			<Activity mode={newEmail ? "visible" : "hidden"}>
				<ConfirmationCode
					newEmail={newEmail}
					onComplete={onEmailChangeComplete}
				/>
			</Activity>

			<button
				type={"button"}
				className={
					"text-muted-foreground hover:text-white text-sm mt-4 block text-center w-fit"
				}
				onClick={() => setEmailEditing(false)}
			>
				{t("button.cancel")}
			</button>
		</DisplayBox>
	);
}
