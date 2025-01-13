 /** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		fontFamily: {
		  outfit: ['Outfit', 'sans-serif'],
		  poppins: ['Poppins', 'sans-serif'],
		},
		colors: {
		  active: '#FFA500',
		},
		transitionProperty: {
			'height': 'height',
			'spacing': 'margin, padding',
		  },
		  transitionDuration: {
			'2000': '2000ms',
		  },
		keyframes: {
		  fadeIn: {
			'0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
		  },
		  slideUp: {
			'0%': { 
			  opacity: '0',
			  transform: 'translateY(20px)'
			},
			'100%': { 
			  opacity: '1',
			  transform: 'translateY(0)'
			},
		  }
		},
		animation: {
		  fadeIn: 'fadeIn 1s ease-out forwards',
		  slideUp: 'slideUp 1s ease-out forwards',
		}
	  },
	},
	plugins: [],
  }