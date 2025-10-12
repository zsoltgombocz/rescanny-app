import { t } from "i18next";
import { type ToastOptions, toast } from "react-toastify";
import type { AnyAppError } from "../api/errors";
import Toast from "./components/toast";

const baseConfig: ToastOptions = {
	position: "bottom-center",
	autoClose: 4000,
	closeButton: false,
	hideProgressBar: true,
	style: { background: "transparent", boxShadow: "none", minWidth: 400 },
};

export function notifyError(err: AnyAppError) {
	const title = t("errorOccured", { error: err.type });
	const message = err.getMessage();

	toast(Toast, {
		...baseConfig,
		data: {
			variant: "error",
			title: title,
			body: message,
		},
	});
}

export function notifySuccess(text: string) {
	toast(Toast, {
		...baseConfig,
		data: {
			variant: "success",
			title: text,
		},
	});
}
