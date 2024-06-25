import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import vike from 'vike/plugin'

export default {
  plugins: [vue(), vike({ baseServer: '/'})],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))}
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/renderer/styles/index.scss";`
      }
    }
  }
}
