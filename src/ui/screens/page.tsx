import type { JSX } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router";
import type { Page as PageType } from "../../api/types";
import { useHeaderAction } from "../../contexts/header-action-context.tsx";
import Block from "../components/block";
import { Text } from "../components/text";
import { Title } from "../components/title";
import PageLayout from "../layout/page-layout";
import NotFound from "./not-found";

export default function Page(): JSX.Element {
	const { page, success } = useLoaderData<{
		page: PageType | null;
		success: boolean;
	}>();

	const { setShowBackButton } = useHeaderAction();

	useEffect(() => {
		setShowBackButton(true);

		return () => {
			setShowBackButton(false);
		};
	}, [setShowBackButton]);

	if (!success) {
		return <NotFound />;
	}

	return (
		<PageLayout type={"simple"}>
			<article>
				<Title type="h1" className={"mt-8"}>
					{page?.title}
				</Title>
				<Text className={"my-2"}>{page?.subtitle}</Text>

				<section className={"mt-6 space-y-6"}>
					{page?.content.map((block) => (
						<Block block={block} key={block.id} />
					))}
				</section>
			</article>
		</PageLayout>
	);
}
