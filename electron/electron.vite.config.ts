import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@lib': 'src/main/lib',
        '@shared': 'src/shared'
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    assetsInclude: 'src/renderer/assests/**',
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@shared': resolve('src/shared'),
        '@hooks': resolve('src/renderer/src/hooks'),
        '@lib': resolve('src/main/lib'),
        '@components': resolve('src/renderer/src/components'),
        '@store': resolve('src/renderer/src/store'),
        '@assets': resolve('src/renderer/src/assets'),
        '@mocks': resolve('src/renderer/src/mocks')
      }
    },
    plugins: [react()]
  }
})
