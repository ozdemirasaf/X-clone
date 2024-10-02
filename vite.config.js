import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as paht from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': paht.resolve(__dirname, 'src')
    },
  },
})
