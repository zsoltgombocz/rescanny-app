import type { LoaderFunctionArgs } from "react-router";
import getPage from "../actions/get-page";

export async function pageLoader({ params }: LoaderFunctionArgs) {
	const { data, success } = await getPage(params.slug);

	return { page: data, success };
}
