import { create } from "zustand";
import type { AnyAppError, AppError } from "../api/errors";
import { get as httpGet } from "../api/http.ts";
import type { ApiStatusPayload } from "../api/types.ts";
import { notifyError } from "../ui/notify.tsx";

interface ApiStatusState {
	data: ApiStatusPayload | null;
	error: AppError | null;

	fetch: () => Promise<void>;
}

export const useApiStatusStore = create<ApiStatusState>((set) => ({
	data: null,
	error: null,

	fetch: async () => {
		try {
			const payload = await httpGet<ApiStatusPayload>("/status");

			set({
				data: payload,
				error: null,
			});
		} catch (e: unknown) {
			const error = e as AnyAppError;
			notifyError(error);
			set({
				error,
			});
		}
	},
}));
