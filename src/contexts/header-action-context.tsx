import { createContext, type ReactNode, useContext, useState } from "react";

interface HeaderActionContextType {
	headerAction: ReactNode | null;
	setHeaderAction: (action: ReactNode | null) => void;
}

const HeaderActionContext = createContext<HeaderActionContextType | undefined>(
	undefined,
);

export function HeaderActionProvider({ children }: { children: ReactNode }) {
	const [headerAction, setHeaderAction] = useState<ReactNode | null>(null);

	return (
		<HeaderActionContext.Provider value={{ headerAction, setHeaderAction }}>
			{children}
		</HeaderActionContext.Provider>
	);
}

export function useHeaderAction() {
	const context = useContext(HeaderActionContext);
	if (context === undefined) {
		throw new Error(
			"useHeaderAction must be used within a HeaderActionProvider",
		);
	}
	return context;
}
