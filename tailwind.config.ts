import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      sans: ["'Satoshi'", ...defaultTheme.fontFamily.sans],
      colors:{
        primary:{
          DEFAULT:'#6289CD',
          1:'#5779DF'
        }
      },
      backgroundImage:{
        footer:'linear-gradient(101deg, #000 0%, rgba(0, 0, 0, 0.83) 100%)'
      }
    },

    screens: {
      mv: '360px',
      // => @media (min-width: 480px) { ... }

      xs: '480px',
      // => @media (min-width: 480px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      ml: '992px', // Medium Large
      // => @media (min-width: 992px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      sl: '1199px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1921x',
      // => @media (min-width: 1921px) { ... }

      wrap: '1200px',
      // => @media (min-width: 1200px) { ... }
    },

  },
  plugins: [],
}
export default config
