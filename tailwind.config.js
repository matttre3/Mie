/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        winter: ["Righteous", 'sans-serif'],
        spring: ["Reem Kufi Ink", 'sans-serif'],
        summer: ["Patua One", 'serif'],
        autumn: ["Pattaya", 'sans-serif'],
        rosmatika: ["Rosmatika", 'sans-serif'],
        poppins: ["Poppins", 'sans-serif']
      },
      backgroundImage:{
        'autumn-bg': "url('/autumn-bg.png')",
        'spring-bg': "url('/spring-bg.png')",
        'summer-bg': "url('/summer-bg.png')",
        'winter-bg': "url('/winter-bg.png')"
      }
    },
  },
  plugins: [],
};
