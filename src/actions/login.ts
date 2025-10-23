import { type AnyAppError, ValidationError } from "../api/errors";
import { post as httpPost } from "../api/http";
import { notifyError, notifySuccess } from "../ui/notify";

type ResultObject = {
	success: boolean;
	error: AnyAppError | null;
	data?: any;
};

export default async function basicLogin(
	email: string,
	password: string,
): Promise<ResultObject> {
	try {
		const data = await httpPost<{ message: string; user: any }>(
			"/auth/login/basic",
			{
				email,
				password,
			},
		);

		notifySuccess(data.message);

		return { success: true, error: null, data: data.user };
	} catch (e: unknown) {
		const error = e as AnyAppError;

		if (error instanceof ValidationError) {
			return { success: false, error: error };
		}

		notifyError(error);

		return { success: false, error: null };
	}
}
