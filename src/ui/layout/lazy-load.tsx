import { type ReactNode, Suspense } from "react";
import { LoadingFallback } from "./loading-fallback.tsx";

type Props = {
	children: string | ReactNode | undefined;
};

export function LazyLoad({ children }: Props) {
	return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
}
