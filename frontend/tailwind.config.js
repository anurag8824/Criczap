/** @type {import('tailwindcss').Config} */



module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",

  ],

  theme: {
    extend: {
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        blink: 'blink 2s ease-in-out infinite', // Blink every 1 second
      },
      spacing: {
        '84': '21rem', // Custom width class (84)
      },
      backgroundImage: {
        'blue-950': 'linear-gradient(45deg, rgba(2,0,36,1) 11%, rgba(23,37,84,1) 51%, rgba(0,212,255,1) 150%)',
      },
      
    },
  },

};

