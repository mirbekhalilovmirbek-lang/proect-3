import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/' // обязательно, чтобы пути к скриптам были корректные
})
