module.exports = {
	mode: 'jit',
	purge: {
		mode: 'all',
		preserveHtmlElements: false,
		content: [
			'./pages/**/*.{js,ts,jsx,tsx}',
			'./components/**/*.{js,ts,jsx,tsx}'
		]
	},
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Site accent: dark red by day, a brighter red that glows at night.
				accent: {
					DEFAULT: '#a70e1b',
					glow: '#ef4444',
				},
				// List bullets: cyan by day, a brighter cyan at night.
				highlight: {
					DEFAULT: '#0891b2',
					glow: '#22d3ee',
				},
			},
			boxShadow: {
				glow: '0 0 10px 1px rgba(239, 68, 68, 0.6)',
				'glow-soft': '0 0 24px rgba(239, 68, 68, 0.2)',
			},
		},
	},
	variants: {
		extend: {
			filter: ['hover'],
		},
	}
}
