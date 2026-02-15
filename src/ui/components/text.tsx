import type { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
	children: React.ReactNode;
	className?: string;
} & HTMLAttributes<HTMLParagraphElement>;

export function Text({ children, className, ...rest }: Props) {
	return (
		<p className={twMerge("text-muted-foreground", className)} {...rest}>{children}</p>
	);
}
