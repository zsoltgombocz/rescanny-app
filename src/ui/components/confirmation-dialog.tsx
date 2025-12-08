import type { ReactNode } from "react";
import { useCallback, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import CloseIcon from "../icons/close";
import { Button } from "./button";

interface ConfirmationDialogProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title: string;
	description: ReactNode;
	confirmText?: string;
	cancelText?: string;
	confirmVariant?: "primary" | "danger";
}

export function ConfirmationDialog({
	isOpen,
	onClose,
	onConfirm,
	title,
	description,
	confirmText = "Confirm",
	cancelText,
	confirmVariant = "danger",
}: ConfirmationDialogProps) {
	const { t } = useTranslation();

	const titleId = useId();
	const descriptionId = useId();

	const handleKeyDown = useCallback(
		(event: KeyboardEvent) => {
			if (event.key === "Escape") {
				onClose();
			}
		},
		[onClose],
	);

	const keyDownHandler = useCallback(
		(e: unknown) => handleKeyDown(e as KeyboardEvent),
		[handleKeyDown],
	);

	useEffect(() => {
		if (!isOpen) return;

		document.addEventListener("keydown", keyDownHandler);

		return () => {
			document.removeEventListener("keydown", keyDownHandler);
		};
	}, [isOpen, keyDownHandler]);

	if (!isOpen) return null;

	return (
		<div
			role="dialog"
			onKeyDown={keyDownHandler}
			className={
				"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
			}
			onClick={onClose}
			aria-modal="true"
			aria-labelledby={titleId}
			aria-describedby={descriptionId}
		>
			<div className="bg-gray-900 rounded-2xl border-gray-700 w-full max-w-md p-6 relative">
				<button
					type={"button"}
					onClick={onClose}
					className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors"
					aria-label="Close"
				>
					<CloseIcon className="w-8 h-8 stroke-gray-400" />
				</button>

				<h3 id={titleId} className="text-lg font-semibold text-white mb-4">
					{title}
				</h3>

				<div id={descriptionId} className="text-gray-300 mb-6">
					{description}
				</div>

				<div className="flex gap-4 flex-col-reverse sm:flex-row">
					<Button variant="gray" className="flex-1" onClick={onClose}>
						{cancelText || t("button.cancel")}
					</Button>
					<Button
						variant={confirmVariant}
						className="flex-1"
						onClick={onConfirm}
					>
						{confirmText}
					</Button>
				</div>
			</div>
		</div>
	);
}
