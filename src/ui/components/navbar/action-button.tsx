import type { JSX } from "react";
import PlusIcon from "../../icons/plus";

export default function ActionButton(): JSX.Element {
	return (
		<button
			type="button"
			className={"flex flex-col items-center gap-1 px-2 py-2 relative -mt-8"}
		>
			<div
				className={
					"w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-teal-500 flex items-center justify-center shadow-lg hover:shadow-xl transition ring-4 ring-gray-900"
				}
			>
				<PlusIcon className={"stroke-white w-10 h-10"} />
			</div>
		</button>
	);
}
