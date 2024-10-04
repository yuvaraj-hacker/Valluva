/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
            '0%': { transform: 'translateX(100%)' },  // Start from off-screen right
            '100%': { transform: 'translateX(-100%)' },
           
        
        },
    },
    animation: {
        marquee: 'marquee 12s linear infinite', // Adjusted to 5s for faster scroll
    },
    
    },

  
    
  },
  plugins: [    require('preline/plugin'),   require('tailwindcss-animated')  ,require('@tailwindcss/line-clamp')  ],
}

