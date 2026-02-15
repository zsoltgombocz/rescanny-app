import type { ReactNode } from "react";
import { useCallback, useEffect, useId } from "react";
import { useTranslation } from "react-i18next";
import type { Variants as ButtonVariants } from "../components/button.tsx";
import { Button } from "./button";
import { Text } from "./text.tsx";
import { Title } from "./title.tsx";

interface ConfirmationDialogProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title: string;
	description: ReactNode;
	confirmText?: string;
	cancelText?: string;
	confirmVariant?: ButtonVariants;
}

export function ConfirmationDialog({
	isOpen,
	onClose,
	onConfirm,
	title,
	description,
	confirmText = "Confirm",
	cancelText,
	confirmVariant = "danger-solid",
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
		<button
			type={"button"}
			className={
				"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
			}
			onClick={onClose}
		>
			<dialog
				open={isOpen}
				aria-labelledby={titleId}
				aria-describedby={descriptionId}
				onKeyDown={keyDownHandler}
				onClick={(e) => e.stopPropagation()}
				className={
					"bg-card border border-border rounded-2xl w-full max-w-md p-6 relative text-center"
				}
			>
				<Title type={"h3"} id={titleId} className={"text-white mb-4"}>
					{title}
				</Title>

				<Text id={descriptionId} className={"mb-6"}>
					{description}
				</Text>

				<div className={"flex gap-4 flex-col"}>
					<Button variant={confirmVariant} onClick={onConfirm}>
						{confirmText}
					</Button>
					<Button variant={"gray-solid"} onClick={onClose}>
						{cancelText || t("button.cancel")}
					</Button>
				</div>
			</dialog>
		</button>
	);
}
