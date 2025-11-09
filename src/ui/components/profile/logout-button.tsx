import { useTranslation } from "react-i18next";
import { useLogoutAction } from "../../../actions/logout";
import LogoutIcon from "../../icons/logout";
import { Button } from "../button";

export default function LogoutButton() {
	const { t } = useTranslation();

	const { run, loading } = useLogoutAction();

	return (
		<Button
			className={"py-4"}
			loading={loading}
			icon={<LogoutIcon className={"fill-white w-5 h-5"} />}
			variant="gray"
			onClick={run}
		>
			{t("profile.logoutButton")}
		</Button>
	);
}
