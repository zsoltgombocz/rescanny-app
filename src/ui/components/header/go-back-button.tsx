import type { JSX } from "react";
import { useNavigate } from "react-router";

import ChevronRight from "../../icons/chevron-right";

export default function GoBackButton(): JSX.Element {
	const navigate = useNavigate();

	return (
		<button
			type={"button"}
			onClick={() => navigate(-1)}
			className={
				"relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition"
			}
		>
			<ChevronRight className={"stroke-gray-300 rotate-180"} />
		</button>
	);
}
