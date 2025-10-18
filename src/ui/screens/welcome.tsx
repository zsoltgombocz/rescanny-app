import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Button } from "../components/button";
import { Versions } from "../components/versions";
import WelcomeSection from "../components/welcome-section";
import LoginIcon from "../icons/login";
import RegisterIcon from "../icons/register";
import PageLayout from "../layout/page-layout";

export default function Welcome() {
	const { t } = useTranslation();

	return (
		<PageLayout>
			<div className={"flex flex-col text-center mt-24"}>
				<WelcomeSection
					title={t("welcome.welcomeToRescanny")}
					subtitle={t("welcome.loginOrRegister")}
				/>
				<Button
					as={Link}
					className={"w-full sm:w-[380px] mb-4"}
					icon={<LoginIcon className={"fill-white"} />}
					variant="primary"
					to="/login"
				>
					{t("welcome.loginButton")}
				</Button>
				<Button
					as={Link}
					className={"w-full sm:w-[380px]"}
					icon={<RegisterIcon className={"stroke-white"} />}
					variant="gray"
					to="/register"
				>
					{t("welcome.registerButton")}
				</Button>
			</div>
			<Versions />
		</PageLayout>
	);
}
