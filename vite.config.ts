import autoprefixer from 'autoprefixer'
import postcssImport from 'postcss-import'
import tailwindcss from 'tailwindcss'
import {CSSOptions, defineConfig} from 'vite'

import {resolve} from 'path'

import {extensionBuilder} from './build/vite-plugin-extension-builder'

export default defineConfig({
  plugins: [
    extensionBuilder({
      manifestPath: './src/manifest.ts',
      publicDir: 'public',
      outDir: 'dist',
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssImport(),
        tailwindcss({config: './tailwind.config.ts'}),
        autoprefixer(),
      ] as CSSOptions['postcss'] extends {plugins: infer P} ? P : never,
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'popup.html'),
        content: resolve(__dirname, 'src/content.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
})