import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import basicLogin from "../../actions/login";
import { ValidationError } from "../../api/errors";
import { type User, useUserStore } from "../../store/user";
import { Button } from "../components/button";
import Divider from "../components/divider";
import Input from "../components/form/input";
import Link from "../components/link";
import { Text } from "../components/text";
import { Versions } from "../components/versions";
import WelcomeSection from "../components/welcome-section";
import LoadingIcon from "../icons/loading";
import LockIcon from "../icons/lock";
import LoginIcon from "../icons/login";
import UserIcon from "../icons/user";
import PageLayout from "../layout/page-layout";

type Fields = {
	email: string;
	password: string;
};

export default function Login() {
	const { t } = useTranslation();

	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<Fields>();

	const navigate = useNavigate();
	const { hydrate } = useUserStore();

	const onSubmit = async (data: Fields) => {
		const {
			success,
			error,
			data: user,
		} = await basicLogin(data.email, data.password);

		if (success) {
			hydrate(user as User);
			return navigate("/user/profile");
		}

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
	};

	return (
		<PageLayout>
			<div className={"flex flex-col mt-24"}>
				<WelcomeSection
					title={t("welcome.welcomeToRescanny")}
					subtitle={t("login.subTitle")}
				/>
				<div className={"flex flex-col gap-5"}>
					<form
						className={"flex flex-col gap-5"}
						onSubmit={handleSubmit(onSubmit)}
					>
						{errors.root?.message && (
							<div className="border-rose-500 bg-rose-500/10 p-3 rounded-xl border">
								<Text className={"text-sm text-white"}>
									{errors.root.message}
								</Text>
							</div>
						)}
						<Input
							{...register("email", { required: true })}
							aria-invalid={!!errors.email}
							icon={<UserIcon />}
							name="email"
							type="email"
							label={t("input.emailLabel")}
							placeholder={t("input.emailPlaceholder")}
							autocomplete="email"
							disabled={isSubmitting}
							errorMessage={errors.email?.message}
						/>

						<Input
							{...register("password", { required: true })}
							aria-invalid={!!errors.password}
							icon={<LockIcon />}
							name="password"
							type="password"
							label={t("input.passwordLabel")}
							placeholder={t("input.passwordPlaceholder")}
							autocomplete="password"
							disabled={isSubmitting}
							errorMessage={errors.password?.message}
						/>

						<div className={"flex justify-between"}>
							<Link to={"/forget-password"} variant="primary">
								{t("login.link.forgotPassword")}
							</Link>
							<Link to={"/login/otp"} variant="gray">
								{t("login.link.otp")}
							</Link>
						</div>

						<Button
							icon={!isSubmitting && <LoginIcon className={"fill-white"} />}
							variant="primary"
							type="submit"
							disabled={isSubmitting}
						>
							{isSubmitting ? (
								<LoadingIcon className={"w-6 h-6"} />
							) : (
								t("login.loginButton")
							)}
						</Button>
					</form>

					<Divider>{t("conjugation.or")}</Divider>

					<Button
						disabled
						className={"bg-white hover:bg-slate-100 text-black"}
						variant="custom"
					>
						{t("login.googleButton")}
					</Button>

					<Button
						disabled
						className={"bg-[#1877F2] hover:hover:bg-[#166fe5]"}
						variant="custom"
					>
						{t("login.facebookButton")}
					</Button>
				</div>
			</div>

			<Versions />
		</PageLayout>
	);
}
