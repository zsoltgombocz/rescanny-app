import type { ReactNode } from "react";
import { useCallback } from "react";
import { useDialog } from "../contexts/dialog-context";

export interface ConfirmationOptions {
	title: string;
	description: ReactNode;
	confirmText?: string;
	cancelText?: string;
	confirmVariant?: "primary" | "danger";
}

export function useConfirmation() {
	const { showDialog } = useDialog();

	const confirm = useCallback(
		(options: ConfirmationOptions, onConfirm: () => void) => {
			showDialog(options, onConfirm);
		},
		[showDialog],
	);

	return { confirm };
}
