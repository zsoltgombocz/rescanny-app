import { createContext, type ReactNode, useContext, useState } from "react";
import { ConfirmationDialog } from "../ui/components/confirmation-dialog";

interface DialogOptions {
	title: string;
	description: ReactNode;
	confirmText?: string;
	cancelText?: string;
	confirmVariant?: "primary" | "danger";
}

interface DialogContextType {
	showDialog: (options: DialogOptions, onConfirm: () => void) => void;
	hideDialog: () => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

interface DialogProviderProps {
	children: ReactNode;
}

export function DialogProvider({ children }: DialogProviderProps) {
	const [dialogOptions, setDialogOptions] = useState<DialogOptions | null>(
		null,
	);
	const [onConfirmCallback, setOnConfirmCallback] = useState<
		(() => void) | null
	>(null);
	const [isOpen, setIsOpen] = useState(false);

	const showDialog = (options: DialogOptions, onConfirm: () => void) => {
		setDialogOptions(options);
		setOnConfirmCallback(() => onConfirm);
		setIsOpen(true);
	};

	const hideDialog = () => {
		setIsOpen(false);
		setDialogOptions(null);
		setOnConfirmCallback(null);
	};

	const handleConfirm = () => {
		onConfirmCallback?.();
		hideDialog();
	};

	return (
		<DialogContext.Provider value={{ showDialog, hideDialog }}>
			{children}
			{dialogOptions && (
				<ConfirmationDialog
					isOpen={isOpen}
					onClose={hideDialog}
					onConfirm={handleConfirm}
					title={dialogOptions.title}
					description={dialogOptions.description}
					confirmText={dialogOptions.confirmText}
					cancelText={dialogOptions.cancelText}
					confirmVariant={dialogOptions.confirmVariant}
				/>
			)}
		</DialogContext.Provider>
	);
}

export function useDialog() {
	const context = useContext(DialogContext);
	if (!context) {
		throw new Error("useDialog must be used within a DialogProvider");
	}
	return context;
}
