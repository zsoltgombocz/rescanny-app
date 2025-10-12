import * as React from "react";

export function useAppVersion() {
	const [version, setVersion] = React.useState<string | null>(null);

	React.useEffect(() => {
		const controller = new AbortController();

		(async () => {
			try {
				const res = await fetch("/VERSION", {
					cache: "no-store",
					signal: controller.signal,
				});
				const txt = (await res.text()).trim();
				setVersion(txt || "dev");
			} catch (_e: unknown) {
				setVersion("dev");
			}
		})();

		return () => controller.abort();
	}, []);

	return { version };
}
