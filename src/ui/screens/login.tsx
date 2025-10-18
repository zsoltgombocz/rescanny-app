import { useTranslation } from "react-i18next";
import { Button } from "../components/button";
import Divider from "../components/divider";
import Input from "../components/form/input";
import Link from "../components/link";
import { Versions } from "../components/versions";
import WelcomeSection from "../components/welcome-section";
import LockIcon from "../icons/lock";
import LoginIcon from "../icons/login";
import UserIcon from "../icons/user";
import PageLayout from "../layout/page-layout";

export default function Login() {
	const { t } = useTranslation();

	return (
		<PageLayout>
			<div className={"flex flex-col mt-24"}>
				<WelcomeSection
					title={t("welcome.welcomeToRescanny")}
					subtitle={t("login.subTitle")}
				/>
				<div className={"flex flex-col gap-5"}>
					<form className={"flex flex-col gap-5"}>
						<Input
							icon={<UserIcon />}
							name="email"
							type="email"
							label={t("input.emailLabel")}
							placeholder={t("input.emailPlaceholder")}
							autocomplete="email"
						/>

						<Input
							icon={<LockIcon />}
							name="passsord"
							type="password"
							label={t("input.passwordLabel")}
							placeholder={t("input.passwordPlaceholder")}
							autocomplete="email"
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
							icon={<LoginIcon className={"fill-white"} />}
							variant="primary"
							onClick={() => console.log("click")}
						>
							{t("login.loginButton")}
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
