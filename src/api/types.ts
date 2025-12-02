import type { AnyAppError } from "./errors";

export type MaintenanceMode = {
	active: boolean;
	from: string | null;
	message: string;
	to: string | null;
	upcoming: boolean;
};

export type ApiStatusPayload = {
	maintenance: MaintenanceMode;
	version: string;
	time: string;
};

export type LaravelErrorBag = Record<string, string[]>;

export type LaravelValidationResponse = {
	message: string;
	errors: LaravelErrorBag;
};

export type ActionResultObject = {
	success: boolean;
	error: AnyAppError | null;
	data?: any;
};

export type Page = {
	title: string;
	subtitle: string | null;
	slug: string;
	content: PageBlock[];
};

export type TextBlock = {
	id: string;
	type: "text";
	content: string;
};

export type ImageBlock = {
	id: string;
	type: "image";
	url: string;
	alt: string;
};

export type ButtonBlock = {
	id: string;
	type: "button";
	mode: "navigate" | "link" | "scroll";
	label: string;
	url: string;
};

export type ListBlock = {
	id: string;
	type: "unordered-list";
	items: {
		title: string;
		description?: string;
	}[];
};

export type PageBlock = TextBlock | ImageBlock | ButtonBlock | ListBlock;
