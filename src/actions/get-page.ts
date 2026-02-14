import { get as httpGet } from "../api/http";
import type { ActionResultObject, Page } from "../api/types";
import { handleActionException } from "./handle-action-exception.ts";

export default async function getPage(
	slug: string | undefined,
): Promise<ActionResultObject> {
	try {
		const page = await httpGet<Page>(`/pages/${slug}`);

		return { success: true, error: null, data: page };
	} catch (e: unknown) {
		return handleActionException(e);
	}
}
