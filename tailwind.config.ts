import type {Config} from 'tailwindcss'

import colors from 'tailwindcss/colors'

import tailwindBase from 'eco-vue-js/tailwind-base'

export default {
  mode: 'jit',
  content: [
    './popup.html',
    './src/**/*.{,ts}',
    ...tailwindBase.content,
  ],
  presets: [
    tailwindBase,
  ],
  theme: {
    extend: {
      colors: colors as never,
    },
  },
} satisfies Config
