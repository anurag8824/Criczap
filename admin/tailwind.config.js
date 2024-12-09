/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

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
        'blue-950': 'linear-gradient(to right, #3d4375 0%, #43356e 29%, #4a2565 53%, #4d1e62 100%)',
      },
    },
  },

};

