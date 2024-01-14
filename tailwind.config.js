/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{html,js}',
		'./pages/**/*.{html,js}',
		'./index.html',
	  ],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
	  fontFamily: { 
		'Montserrat': ["Montserrat", "sans-serif"]
	  },
	  backgroundColor: theme => ({
		...theme('colors'),
		'primary': '#CC2D4A',
		'secondary': '#F2AE2E',
		'tertiary': '#61AEC9',
		'quarty':'#A6831B',
		'quinto':'#F2BF27',
	  }),
	  textColor: theme => ({ 
		...theme('colors'),
		'primary': '#CC2D4A',
		'secondary': '#8FA206',
		'tertiary': '#61AEC9',
	  }),
	  /*
	  Esto funciona pero no nos permite usar los colores de Tailwind 
		colors: {
		primary: '#CC2D4A',
		secondary: "#8FA206",
		tertiary: "#61AEC9",
	  }, 
	  textColor: {
		primary: '#CC2D4A',
		secondary: "#8FA206",
		tertiary: "#61AEC9",
	  },*/
	  extend: {
		backgroundImage: { 
		  'sanFrancisco': "url('../img/sanFrancisco.jpg')",
		  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
		  'yosemite': "url('../img/yosemite.jpg')",
		  'LA': "url('../img/LA.jpg')",
		  'seattle': "url('../img/seattle.jpg')",
		  'new_york': "url('../img/new_york.jpg')",
		  norway: "url('../img/norway.jpg')",
		  'sydney': "url('../img/sydney.jpg')",
		  'miami': "url('../img/miami.jpg')",
		  'switzerland': "url('../img/switzerland.jpg')",
		  'bali': "url('../img/bali.jpg')",
		  'chicago': "url('../img/chicago.jpg')",
		  'europe': "url('../img/europe.jpg')",
		  'iceland': "url('../img/iceland.jpg')",
		  'brainMobile':"url('../img/brainMobile.jpg')",
		  'brainDesktop':"url('../img/brainDesktop.jpg')",
		  'davincicourse':"url('../img/davinci-course.jpg')",
		  'miguelAngelo':"url('../img/miguelAngelo.jpg')",
		  'rafael-sanzio':"url('../img/rafael-sanzio.jpg')",
		  'steveJobs':"url('../img/steveJobs.jpg')",
		  'elonMusk4':"url('../img/elonMusk4.jpg')",
		  'timBerners':"url('../img/timBerners.jpg')",
		  'amazon2':"url('../img/amazon2.jpg')",
		  'Bill-Gates2':"url('../img/Bill-Gates2.jpg')",
		  'florencia':"url('../img/florencia.jpg')",
		  'brainscientis':"url('../img/brainscientis.jpg')",
		  'brainscientis2':"url('../img/brainscientis2.jpg')",
		  'leonardodicaprio':"url('../img/leonardodicaprio.jpg')",
		  'leonardodicaprio2':"url('../img/leonardodicaprio2.jpg')",
		  'steveapple':"url('../img/steveapple.jpg')",
		  'brainhealth2':"url('../img/brainhealth2.jpg')",
		  'meditation':"url('../img/meditation.jpg')",
		  'socialmedia':"url('../img/socialmedia.jpg')",
		  'brainscientismobile':"url('../img/brainscientismobile.jpg')",
		  'articulo1':"url('../img/articulo1.jpg')",
		
		},
	  }
	},
	plugins: [],
  }