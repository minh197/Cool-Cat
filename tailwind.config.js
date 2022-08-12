/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'serif': ['ui-serif', 'Poiret One'],


    },



    extend: {
      landingImage: {
        'hero-image': 'url("./components/images/landingpic.jpeg")'
      },
      logo: {
        'logo-image': 'url("./components/images/Logo.png")'
    },
    
  },
  plugins: [],
}
}