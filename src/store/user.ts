import { create } from "zustand";

export type User = {
	id: number;
	name: string;
	email: string;
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
export const userGetState = () => useUserStore.getState();
