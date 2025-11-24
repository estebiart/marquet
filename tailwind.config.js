import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';


/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: [
		'./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
		'./storage/framework/views/*.php',
		'./resources/views/**/*.blade.php',
		'./resources/js/**/*.tsx',
		'./bootstrap/ssr/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			screens: {
				short: { raw: '(max-height: 700px)' },
			},
			borderRadius: {
				lg: '30px',
				md: '20px',
				sm: '10px'
			},
			colors: {
				investigacion: '#822D18',
				mundo: '#AA205E',
				sportsYellow: '#F7931E',
				deportes: '#EA4600',
				colombia: '#841EAF',
				entreRed: '#91255D',
				white: '#FFFFFF',
				opal: '#FFF2E6',
				economia: '#01BBBA',
				black: '#2B2B2B',
				lightViolet: '#5D2783',
				darkViolet: '#2C1144',
				grey: '#EEEEEE',
				footerColor: '#FF5000',
				buttonColor: '#640BA5',
				headerColor: '#EF0C52',
				headerColor2: '#b10a3e',
				opinion: '#0034C6',
				entretenimientoCultura: '#90EA00',
				bogota: '#FF0000',
				politica: '#4C4646',
				judicial: '#000000',
				vidaModerna: '#23209E',
			},
			keyframes:{
				slideUp: {
					'0%': { transform: 'translateY(100%)', opacity: 0 },
					'100%': { transform: 'translateY(0)', opacity: 1 },
				}
			},
			animation: {
				slideUp: 'slideUp 0.4s ease-out',
			},
		}
	},

	plugins: [forms, require("tailwindcss-animate")],
};
