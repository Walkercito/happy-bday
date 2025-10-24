/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				tada: {
					'0%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '0',
					},
					'10%': {
						transform: 'scale(0.9) rotate(-3deg)',
						opacity: '1',
					},
					'20%': {
						transform: 'scale(0.9) rotate(-3deg)',
					},
					'30%, 50%, 70%, 90%': {
						transform: 'scale(1.1) rotate(3deg)',
					},
					'40%, 60%, 80%': {
						transform: 'scale(1.1) rotate(-3deg)',
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)',
						opacity: '1',
					},
				},
			},
			animation: {
				tada: 'tada 1s ease-in-out',
			},
		},
	},
	plugins: [],
}
