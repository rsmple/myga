/* eslint-disable no-console */
import {Plugin, build} from 'vite'

import {mkdir, readFile, readdir, rm, writeFile} from 'fs/promises'
import {join, resolve} from 'path'

import packageJson from '../package.json' with { type: 'json' }

export function extensionBuilder(options: {
  manifestPath: string
  publicDir: string
  outDir: string
}): Plugin {
  const {manifestPath, publicDir, outDir} = options

  return {
    name: 'vite-plugin-extension-builder',

    async buildStart() {
      await rm(outDir, {recursive: true, force: true})
      await mkdir(outDir, {recursive: true})

      const result = await build({
        configFile: false,
        build: {
          lib: {
            entry: resolve(manifestPath),
            formats: ['es'],
          },
          emptyOutDir: true,
          write: false,
        },
      })

      const compiledCode = Array.isArray(result)
        ? result[0].output[0].code
        : 'output' in result
          ? result.output[0].code
          :undefined

      if (!compiledCode) {
        throw new Error(`Failed to read ${ manifestPath } contents.`)
      }

      const moduleUrl = `data:text/javascript;base64,${ Buffer.from(compiledCode).toString('base64') }`
      const module = await import(moduleUrl)

      const content = {...module.default}

      content.version = packageJson.version

      const outputPath = resolve(outDir, 'manifest.json')

      await writeFile(
        outputPath,
        JSON.stringify(content, null, 2),
        'utf-8',
      )

      console.log(`✓ manifest.json generated at: ${ outputPath }`)
    },

    async closeBundle() {
      const walk = async (dir: string, relBase = '') => {
        const entries = await readdir(dir, {withFileTypes: true})

        for (const entry of entries) {
          const fullPath = join(dir, entry.name)
          const relPath = join(relBase, entry.name)
          const outPath = join(outDir, relPath)

          if (entry.isDirectory()) {
            await mkdir(outPath, {recursive: true})
            await walk(fullPath, relPath)
          } else {
            const data = await readFile(fullPath)
            await writeFile(outPath, data)
          }
        }
      }

      try {
        await walk(publicDir)
      } catch (e) {
        console.warn(`[extensionBuilder] Skipped static asset copy: ${ e instanceof Object && 'message' in e ? e.message : e }`)
      }
    },
  }
}
