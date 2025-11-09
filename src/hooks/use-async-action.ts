import { useCallback, useState } from "react";

export interface UseAsyncActionOptions<TResult> {
	onSuccess?: (result: TResult) => void;
	onError?: (error: unknown) => void;
	onFinally?: () => void;
}

export function useAsyncAction<TArgs extends unknown[], ActionResultObject>(
	fn: (...args: TArgs) => Promise<ActionResultObject>,
	options: UseAsyncActionOptions<ActionResultObject> = {},
) {
	const { onSuccess, onError, onFinally } = options;

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<unknown | null>(null);

	const run = useCallback(
		async (...args: TArgs): Promise<ActionResultObject | undefined> => {
			setLoading(true);
			setError(null);
			try {
				const result = await fn(...args);
				onSuccess?.(result);
				return result;
			} catch (err) {
				setError(err);
				onError?.(err);
				throw err;
			} finally {
				setLoading(false);
				onFinally?.();
			}
		},

		[fn, onSuccess, onError, onFinally],
	);

	return { run, loading, error } as const;
}
