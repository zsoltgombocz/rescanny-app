import type { ComponentType } from "react";
import type { RouteObject } from "react-router";
import { AuthPolicy } from "../routes";
import { Guard } from "../ui/layout/guard";

export function lazyRoute(
	importer: () => Promise<{ default: ComponentType }>,
	policy: AuthPolicy = AuthPolicy.None,
): RouteObject["lazy"] {
	return async () => {
		const { default: Component } = await importer();

		return {
			Component: () =>
				policy === AuthPolicy.None ? (
					<Component />
				) : (
					<Guard policy={policy}>
						<Component />
					</Guard>
				),
		};
	};
}
