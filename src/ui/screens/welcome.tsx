import { useTranslation } from "react-i18next";
import { Button } from "../components/button";
import { Logo } from "../components/logo";
import { Text } from "../components/text";
import { Title } from "../components/title";
import { Versions } from "../components/versions";
import LoginIcon from "../icons/login";
import RegisterIcon from "../icons/register";

export default function Welcome() {
	const { t } = useTranslation();

	return (
		<section
			className={"w-full h-full flex flex-col justify-around items-center"}
		>
			<div className={"flex flex-col text-center mt-24"}>
				<Logo className={"mb-6 mx-auto"} />
				<Title type="h1" className={"mb-2"}>
					{t("welcome.welcomeToRescanny")}
				</Title>
				<Text className={"mb-8"}>{t("welcome.loginOrRegister")}</Text>

				<Button
					className={"w-full sm:w-[380px] mb-4"}
					icon={<LoginIcon className={"fill-white"} />}
					variant="primary"
					href="/login"
				>
					{t("welcome.loginButton")}
				</Button>
				<Button
					className={"w-full sm:w-[380px]"}
					icon={<RegisterIcon className={"stroke-white"} />}
					variant="gray"
					href="/register"
				>
					{t("welcome.registerButton")}
				</Button>
			</div>

			<Versions />
		</section>
	);
}
