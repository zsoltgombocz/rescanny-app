import type { JSX } from "react";
import { Link } from "react-router";
import type { PageBlock } from "../../api/types";
import BareTickIcon from "../icons/bare-tick";
import { Button } from "./button";
import { Text } from "./text";

type Props = {
	block: PageBlock;
};
export default function Block({ block }: Props): JSX.Element {
	if (block.type === "text") {
		return (
			<div className={"prose md:prose-lg max-w-none"}>
				<div dangerouslySetInnerHTML={{ __html: block.content }} />
			</div>
		);
	}

	if (block.type === "image") {
		return (
			<picture
				className={
					"overflow-clip bg-gradient-to-br from-indigo-500/20 to-teal-500/20 rounded-2xl border border-gray-700 flex items-center justify-center"
				}
			>
				<img className={"w-auto h-auto"} src={block.url} alt={block.alt} />
			</picture>
		);
	}

	if (block.type === "button") {
		return (
			<div className={"w-full"}>
				<Link
					to={block.url}
					className={"block mx-auto max-w-1/2 w-full"}
					target={block.mode === "navigate" ? "_self" : "_blank"}
					rel={block.mode === "link" ? "noopener noreferrer" : ""}
				>
					<Button variant={"fancy"}>{block.label}</Button>
				</Link>
			</div>
		);
	}

	if (block.type === "unordered-list") {
		return (
			<ul className={"space-y-4"}>
				{block.items.map((item, index) => (
					<li className={"flex gap-2 items-start"} key={`${block.id}-${index}`}>
						<div
							className={
								"w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center flex-shrink-0 mb-1"
							}
						>
							<BareTickIcon className={"w-4 h-4 stroke-indigo-400"} />
						</div>
						<div>
							<Text className={"font-medium text-white"}>{item.title}</Text>
							<Text>{item.description}</Text>
						</div>
					</li>
				))}
			</ul>
		);
	}

	return <></>;
}
