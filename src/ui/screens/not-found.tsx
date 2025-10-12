import type { JSX } from "react";
import { Button } from "../components/button.tsx";
import { Logo } from "../components/logo.tsx";
import { Text } from "../components/text.tsx";
import { Title } from "../components/title.tsx";
import { Versions } from "../components/versions.tsx";
import { ArrowLeft } from "../icons/arrow-left.tsx";

export default function NotFound(): JSX.Element {
	return (
		<section
			className={"w-full h-full flex flex-col justify-around items-center"}
		>
			<div className={"text-center mt-24"}>
				<Logo className={"mb-6"} />
				<Title type={"h1"} className={"mb-2"}>
					404 - Az oldal nem található
				</Title>
				<Text>A keresett oldal nem létezik vagy áthelyezésre került.</Text>
				<Button
					icon={<ArrowLeft className={"stroke-white"} />}
					variant={"gray"}
					href={"/"}
					className={"mt-8"}
				>
					Vissza a kezdőlapra
				</Button>
			</div>

			<Versions />
		</section>
	);
}
