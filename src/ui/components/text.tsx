import { twMerge } from "tailwind-merge";

type Props = {
	children: React.ReactNode;
	className?: string;
};

export function Text({ children, className }: Props) {
	return <p className={twMerge("text-gray-400", className)}>{children}</p>;
}
