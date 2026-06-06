import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const toSassPath = (filePath) => filePath.replace(/\\/g, '/')
const varPath = toSassPath(path.resolve('./src/styles/base/_variables.scss'))
const mixPath = toSassPath(path.resolve('./src/styles/base/_mixins.scss'))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      '@components': path.resolve('./src/components'),
      '@sections': path.resolve('./src/components/sections'),
      '@ui': path.resolve('./src/components/ui'),
      '@hooks': path.resolve('./src/hooks'),
      '@utils': path.resolve('./src/utils'),
      '@styles': path.resolve('./src/styles'),
      '@data': path.resolve('./src/data'),
      '@context': path.resolve('./src/context'),
      '@animations': path.resolve('./src/animations'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: (content, filepath) => {
          if (
            filepath.includes('_variables.scss') ||
            filepath.includes('_mixins.scss') ||
            filepath.includes('global.scss')
          ) {
            return content
          }
          return `@use "${varPath}" as *;\n@use "${mixPath}" as *;\n${content}`
        }
      }
    }
  }
})
