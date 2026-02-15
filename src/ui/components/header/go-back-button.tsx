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
				"relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card border border-border hover:bg-secondary  flex items-center justify-center transition"
			}
		>
			<ChevronRight className={"stroke-gray-300 rotate-180"} />
		</button>
	);
}
