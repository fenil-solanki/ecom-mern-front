/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner1': "url('/banner-1.png')",
        'banner2': "url('/banner-2.png')",
        'betterfashion1':"url('/betterfashion-1.png')",
        'betterfashion2':"url('/betterfashion-2.png')",
        'bigzone1':"url('/bigzone-1.png')",
        'bigzone2':"url('/bigzone-2.png')",
        'bigzone3':"url('/bigzone-3.png')",
        'bigzone4':"url('/bigzone-4.png')",
        'bigzone5':"url('/bigzone-5.png')",
        'signinimage':"url('/sign-in-image.png')"
      },
      decoration:{
         'white':'#fff'
      },
      container:{
        screens:{
          sm:'640px',
          md:'768px',
          lg:'1024px',
          xl:'1536px',
        }
      }
    },
  },
  plugins: [],
}
