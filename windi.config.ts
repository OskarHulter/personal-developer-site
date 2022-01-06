import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'
import filtersPlugin from 'windicss/plugin/filters'
import formsPlugin from 'windicss/plugin/forms'
import scrollSnapPlugin from 'windicss/plugin/scroll-snap'
import typography from 'windicss/plugin/typography'


export default defineConfig({
  darkMode: 'class',
  attributify: true,
  plugins: [
    typography({
      dark: true,
    }),
    formsPlugin,
    filtersPlugin,
    scrollSnapPlugin,
    require('windicss/plugin/aspect-ratio'),
    require('@windicss/plugin-scrollbar'),
  ],
  theme: {
    colors: {
      'primary-brand': '#1fb6ff',
      'secondary-brand': '#7e5bef',
      'primary-bg': '#ff49db',
      'secondary-bg': '#7e5bef',
      'primary-text': '#7e5bef',
      'secondary-text': '#7e5bef',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'inherit',
            a: {
              'color': 'inherit',
              'opacity': 0.75,
              'fontWeight': '500',
              'textDecoration': 'underline',
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
  variants: {
    filter: ['responsive'],
    backdropFilter: ['responsive'],
  },
  shortcuts: {
    'hstack': 'flex items-center',
    'vstack': 'flex flex-col',
    'icon': 'w-6 h-6 fill-current',
    'app-border': 'border-gray-200 dark:border-dark-300',
    'app-modal': 'fixed top-0 w-full h-full z-50 bg-white bg-opacity-70 blur-5 shadow-lg',
  },
})
