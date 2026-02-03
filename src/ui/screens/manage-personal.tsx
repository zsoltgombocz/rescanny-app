import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import updatePersonalInformation from "../../actions/update-personal-information.ts";
import { ValidationError } from "../../api/errors.ts";
import { useHeaderAction } from "../../contexts/header-action-context.tsx";
import { useUser } from "../../store/user.ts";
import { Button } from "../components/button";
import Input from "../components/form/input";
import DisplayBox from "../components/layout/display-box.tsx";
import MultiStepEmailChange from "../components/profile/email-change/multi-step-email-change.tsx";
import { Text } from "../components/text";
import { Title } from "../components/title.tsx";
import PageLayout from "../layout/page-layout";

type Fields = {
	first_name: string | undefined;
	last_name: string | undefined;
};

export default function ManagePersonal() {
	const { t } = useTranslation();
	const { setHeaderAction } = useHeaderAction();
	const user = useUser();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<Fields>({
		values: {
			first_name: user?.firstName,
			last_name: user?.lastName,
		},
	});

	const onSubmit = useMemo(
		() => async (data: Fields) => {
			const { error } = await updatePersonalInformation(data);

			if (error && error instanceof ValidationError) {
				const errorBag = error.getErrorBag();

				if (!errorBag) {
					setError("root", { type: "server", message: error.message });
					return;
				}

				for (const [field, messages] of Object.entries(errorBag)) {
					const message = messages?.[0] ?? "Invalid";
					setError(field as keyof Fields, { type: "server", message: message });
				}
			}
		},
		[setError],
	);

	useEffect(() => {
		setHeaderAction(
			<Button
				className={"w-fit"}
				variant="fancy"
				onClick={handleSubmit(onSubmit)}
				disabled={isSubmitting}
				loading={isSubmitting}
			>
				{t("common.save")}
			</Button>,
		);

		return () => {
			setHeaderAction(null);
		};
	}, [isSubmitting, handleSubmit, setHeaderAction, t, onSubmit]);

	return (
		<PageLayout type="simple">
			<form onSubmit={(e) => e.preventDefault()}>
				{errors.root?.message && (
					<div className="border-destructive bg-destructive/50 p-3 rounded-xl border">
						<Text className={"text-sm text-white"}>{errors.root.message}</Text>
					</div>
				)}
				<DisplayBox className={"mt-6 w-full"}>
					<Title type="h4" className={"mb-4"}>
						{t("profile.manage.personal.name")}
					</Title>

					<div className={"grid sm:grid-cols-2 gap-4"}>
						<Input
							{...register("last_name")}
							aria-invalid={!!errors.last_name}
							name="last_name"
							type="text"
							label={t("input.lastName")}
							placeholder={t("input.lastName")}
							disabled={isSubmitting}
							errorMessage={errors.last_name?.message}
						/>

						<Input
							{...register("first_name")}
							aria-invalid={!!errors.first_name}
							name="first_name"
							type="text"
							label={t("input.firstName")}
							placeholder={t("input.firstName")}
							disabled={isSubmitting}
							errorMessage={errors.first_name?.message}
						/>
					</div>
				</DisplayBox>

				<DisplayBox className={"mt-6 w-full"}>
					<Title type="h4" className={"mb-4"}>
						{t("profile.manage.personal.contact")}
					</Title>
					<Text className={"mb-2"}>{t("input.emailLabel")}</Text>
					<MultiStepEmailChange />
				</DisplayBox>
			</form>
		</PageLayout>
	);
}
