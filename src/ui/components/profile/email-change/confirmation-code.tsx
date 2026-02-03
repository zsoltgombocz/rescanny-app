import { type JSX, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSubmitEmailChangeCode } from "../../../../actions/submit-email-change-code.ts";
import type { AnyAppError } from "../../../../api/errors.ts";
import { Button } from "../../button.tsx";
import Input from "../../form/input.tsx";

type Props = {
	newEmail: string | undefined;
	onComplete: () => void;
};

export default function ConfirmationCode({
	newEmail,
	onComplete,
}: Props): JSX.Element {
	const { t } = useTranslation();
	const [code, setCode] = useState<string>("");
	const [error, setError] = useState<AnyAppError | undefined>();

	const { run, loading } = useSubmitEmailChangeCode(onComplete, (error) =>
		setError(error as AnyAppError),
	);

	return (
		<div className={"w-full pt-2 mb-4"}>
			<div className="mb-4">
				<label
					className={"text-sm text-muted-foreground block mb-1"}
					htmlFor={"new_email_display"}
				>
					{t("multiStepEmailChange.newEmail")}
				</label>
				<Input
					id={"new_email_display"}
					className={"w-full"}
					name="new_email_display"
					type="email"
					placeholder={t("input.emailPlaceholder")}
					disabled
					value={newEmail}
				/>
			</div>

			<label
				className={"text-sm text-muted-foreground block mb-1"}
				htmlFor={"code"}
			>
				{t("input.confirmationCode")}
			</label>

			<div className={"flex gap-3 items-center"}>
				<Input
					id={"code"}
					className={"w-full"}
					inputClassName={
						"font-mono appearance-none text-center tracking-widest"
					}
					name="code"
					type="text"
					inputMode="numeric"
					pattern="[0-9]*"
					placeholder={"000000"}
					disabled={loading}
					value={code}
					onChange={(e) => setCode(e.target.value)}
					errorMessage={error?.message}
					aria-invalid={!!error}
				/>

				<Button
					className={"w-fit"}
					onClick={() => run(parseInt(code, 10))}
					variant={"fancy"}
					disabled={loading}
					loading={loading}
				>
					{t("button.save")}
				</Button>
			</div>
		</div>
	);
}
