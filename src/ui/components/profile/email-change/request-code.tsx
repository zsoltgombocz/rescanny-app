import { type JSX, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRequestEmailChangeCode } from "../../../../actions/request-email-change-code.ts";
import type { AnyAppError } from "../../../../api/errors.ts";
import { Button } from "../../button.tsx";
import Input from "../../form/input.tsx";

type Props = {
	onCodeRequested: (email: string) => void;
};

export default function RequestCode({ onCodeRequested }: Props): JSX.Element {
	const { t } = useTranslation();
	const [newEmail, setNewEmail] = useState<string>("");
	const [error, setError] = useState<AnyAppError | undefined>();

	const { run, loading } = useRequestEmailChangeCode(
		({ data }) => {
			if (data.codeSent) {
				onCodeRequested(newEmail);
			}
		},
		(error) => setError(error as AnyAppError),
	);

	return (
		<div className={"w-full py-4"}>
			<label
				className={"text-sm text-muted-foreground block mb-1"}
				htmlFor={"new_email"}
			>
				{t("input.emailLabel")}
			</label>
			<div className={"flex gap-3 items-start"}>
				<Input
					id={"new_email"}
					className={"w-full"}
					name="new_email"
					type="email"
					placeholder={t("input.emailPlaceholder")}
					disabled={loading}
					value={newEmail}
					onChange={(e) => setNewEmail(e.target.value)}
					errorMessage={error?.message}
				/>
				<Button
					className={"w-fit flex-shrink-0"}
					onClick={() => run(newEmail)}
					variant={"primary"}
					disabled={loading || !newEmail}
					loading={loading}
				>
					{t("button.getCode")}
				</Button>
			</div>
		</div>
	);
}
