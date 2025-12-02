/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						p: {
							color: "var(--color-gray-400)",
							lineHeight: "1.7",
							margin: "0 !important",
						},
						h2: {
							textSize: "var(--text-xl)",
							fontWeight: 600,
							lineHeight: "var(--tracking-tight)",
							marginBottom: "calc(var(--spacing) * 4)",
							marginTop: "calc(var(--spacing) * 2)",
							color: "var(--color-white)",
						},
						h3: {
							textSize: "var(--text-base)",
							fontWeight: 600,
							lineHeight: "var(--tracking-tight)",
							marginBottom: "calc(var(--spacing) * 2)",
							color: "var(--color-white)",
						},
						"ul > li > p": {
							margin: "0 !important",
						},
						a: {
							color: "var(--color-indigo-400)",
							textDecoration: "none",
							"&:hover": {
								color: "var(--color-indigo-300)",
							},
						},
					},
				},
				lg: {
					h2: {
						textSize: "var(--text-2xl)",
						fontWeight: 600,
						lineHeight: "var(--tracking-tight)",
						marginBottom: "calc(var(--spacing) * 8)",
						marginTop: "calc(var(--spacing) * 4)",
						color: "var(--color-white)",
					},
					h3: {
						textSize: "var(--text-lg)",
						fontWeight: 600,
						lineHeight: "var(--tracking-tight)",
						marginBottom: "calc(var(--spacing) * 4)",
						color: "var(--color-white)",
					},
				},
			},
		},
	},
};
