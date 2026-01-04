const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '1300px',   // changed from 768px → 1300px
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'accent': {
          DEFAULT: '#0de7e5',
          cyan: '#0de7e5',
          teal: '#0C7CBA',
        },
        'primary': {
          DEFAULT: '#0C7CBA',
          50: '#E6F4FA',
          100: '#CCE9F5',
          200: '#99D3EB',
          300: '#66BDE1',
          400: '#33A7D7',
          500: '#0C7CBA',
          600: '#0A6399',
          700: '#084A72',
          800: '#05314C',
          900: '#031926'
        },
        'secondary': {
          DEFAULT: '#0de7e5',
          50: '#E6FEFE',
          100: '#CCFDFD',
          200: '#99FBFB',
          300: '#66F9F9',
          400: '#33F1F0',
          500: '#0de7e5',
          600: '#0AB9B7',
          700: '#088B89',
          800: '#055C5C',
          900: '#032E2E'
        },
        'dark': {
          DEFAULT: '#0F1519',
          50: '#3A4651',
          100: '#323D47',
          200: '#293338',
          300: '#1F282C',
          400: '#171D21',
          500: '#0F1519',
          600: '#070A0C',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
        'light': {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#FFFFFF',
          600: '#E6E6E6',
          700: '#CCCCCC',
          800: '#B3B3B3',
          900: '#999999'
        },
        // Color palette based on design: #0C7CBA (primary blue), #0DE7E5 (cyan accent), #0F1519 (dark), #FFFFFF (light)
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc[800]'),
            '--tw-prose-headings': theme('colors.zinc[900]'),
            '--tw-prose-lead': theme('colors.zinc[700]'),
            '--tw-prose-links': theme('colors.zinc[900]'),
            '--tw-prose-bold': theme('colors.zinc[900]'),
            '--tw-prose-counters': theme('colors.zinc[600]'),
            '--tw-prose-bullets': theme('colors.zinc[400]'),
            '--tw-prose-hr': theme('colors.zinc[300]'),
            '--tw-prose-quotes': theme('colors.zinc[900]'),
            '--tw-prose-quote-borders': theme('colors.zinc[300]'),
            '--tw-prose-captions': theme('colors.zinc[700]'),
            '--tw-prose-code': theme('colors.indigo[500]'),
            '--tw-prose-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-th-borders': theme('colors.zinc[300]'),
            '--tw-prose-td-borders': theme('colors.zinc[200]'),
            '--tw-prose-invert-body': theme('colors.zinc[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.zinc[300]'),
            '--tw-prose-invert-links': theme('colors.indigo[400]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.zinc[400]'),
            '--tw-prose-invert-bullets': theme('colors.zinc[200]'),
            '--tw-prose-invert-hr': theme('colors.zinc[500]'),
            '--tw-prose-invert-quotes': theme('colors.zinc[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-captions': theme('colors.zinc[400]'),
            '--tw-prose-invert-code': theme('colors.indigo[400]'),
            '--tw-prose-invert-pre-code': theme('colors.indigo[300]'),
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-invert-th-borders': theme('colors.zinc[100]'),
            '--tw-prose-invert-td-borders': theme('colors.zinc[500]'),
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
