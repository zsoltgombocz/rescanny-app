import { t } from "i18next";
import { type ToastOptions, toast } from "react-toastify";
import type { AnyAppError } from "../api/errors";
import Toast from "./components/toast";

const baseConfig: ToastOptions = {
	position: "top-center",
	autoClose: 4000,
	closeButton: false,
	closeOnClick: true,
	hideProgressBar: true,
	style: { background: "transparent", boxShadow: "none", minWidth: 400 },
};

export function notifyError(err: AnyAppError) {
	const title = t("errorOccurred");
	const message = err.getMessage() ?? "Unknown error";

	toast(Toast, {
		...baseConfig,
		toastId: btoa(message),
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
		toastId: btoa(text),
		data: {
			variant: "success",
			title: text,
		},
	});
}
