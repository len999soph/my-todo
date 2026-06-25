import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Required for GitHub Pages: the site is served from /my-todo/ (the repo name).
  base: '/my-todo/',
})
