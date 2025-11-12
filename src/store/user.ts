import { create } from "zustand";

type Subscription = {
	label: string;
	price: string;
	nextBilling: string;
};

export type User = {
	id: string;
	firstName: string;
	lastName: string;
	displayName: string;
	avatar: string;
	email: string;
	lastLogin: string;
	registeredRecently: boolean;
	subscription: Subscription;
} | null;

type State = {
	user: User;
	hydrated: boolean;
};

type Actions = {
	hydrate: (user: User) => void;
	clear: () => void;
};

export const useUserStore = create<State & Actions>((set) => ({
	user: null,
	hydrated: false,
	hydrate: (user) => set({ user, hydrated: true }),
	clear: () => set({ user: null, hydrated: false }),
}));

export const useUser = () => useUserStore((s) => s.user);
export const useUserSubscription = () =>
	useUserStore((s) => s.user?.subscription);
export const userGetState = () => useUserStore.getState();
