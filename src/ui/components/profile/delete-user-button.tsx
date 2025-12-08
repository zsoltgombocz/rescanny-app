import { Trans, useTranslation } from "react-i18next";
import { useDeleteUserAction } from "../../../actions/delete-user";
import { useConfirmation } from "../../../hooks/use-confirmation";
import TrashIcon from "../../icons/trash";
import { Button } from "../button";

export default function DeleteUserButton() {
	const { run, loading } = useDeleteUserAction();
	const { t } = useTranslation();
	const { confirm } = useConfirmation();

	const handleDelete = () => {
		confirm(
			{
				title: t("modal.profileDeletion.title"),
				description: (
					<Trans
						i18nKey={"modal.profileDeletion.description"}
						components={[<b key={0} />]}
					/>
				),
				confirmText: t("modal.profileDeletion.confirm"),
				confirmVariant: "danger",
			},
			() => {
				run();
			},
		);
	};

	return (
		<Button
			className={"py-4"}
			loading={loading}
			icon={<TrashIcon className={"fill-red-400 w-5 h-5"} />}
			variant="danger"
			onClick={handleDelete}
		>
			{t("profile.deleteButton")}
		</Button>
	);
}
