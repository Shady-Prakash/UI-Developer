import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pluginRewriteAll from 'vite-plugin-rewrite-all'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), pluginRewriteAll()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      src: path.resolve('src/')
    }
  }
})
