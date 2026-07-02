import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
=======

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> 140f7ee46e3680335efb09c81ef605cb21207e9f
  test: {
    globals: true,
    environment: 'jsdom',
  },
})
