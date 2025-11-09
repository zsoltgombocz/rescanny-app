import { useTranslation } from "react-i18next";
import { useDeleteUserAction } from "../../../actions/delete-user";
import TrashIcon from "../../icons/trash";
import { Button } from "../button";

export default function DeleteUserButton() {
	const { run, loading } = useDeleteUserAction();
	const { t } = useTranslation();

	return (
		<Button
			className={"py-4"}
			loading={loading}
			icon={<TrashIcon className={"fill-red-400 w-5 h-5"} />}
			variant="danger"
			onClick={run}
		>
			{t("profile.deleteButton")}
		</Button>
	);
}
