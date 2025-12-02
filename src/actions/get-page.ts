import type { AnyAppError } from "../api/errors";
import { get as httpGet } from "../api/http";
import type { ActionResultObject, Page } from "../api/types";
import { notifyError } from "../ui/notify";

export default async function getPage(
	slug: string | undefined,
): Promise<ActionResultObject> {
	try {
		const page = await httpGet<Page>(`/pages/${slug}`);

		return { success: true, error: null, data: page };
	} catch (e: unknown) {
		const error = e as AnyAppError;

		notifyError(error);

		return { success: false, error: null };
	}
}
