import type { ReactNode } from "react";
import { useCallback } from "react";
import { useDialog } from "../contexts/dialog-context";
import type { Variants as ButtonVariants } from "../ui/components/button.tsx";

export interface ConfirmationOptions {
	title: string;
	description: ReactNode;
	confirmText?: string;
	cancelText?: string;
	confirmVariant?: ButtonVariants;
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
