/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
"primary": "#55c11b",
"secondary": "#e5a72b",
"accent": "#5ac413",
"neutral": "#342537",     
"base-100": "#f9fafb",    
"info": "#9bace8",   
"success": "#50d7a4",   
"warning": "#f2b450",
"error": "#e77495",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

