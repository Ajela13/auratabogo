import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'
import path from 'path';
import { fileURLToPath } from 'url'; // 1. Importa las herramientas necesarias
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react()],
  resolve: {
    alias: {
      // 3. Tu alias ahora funcionará correctamente
      '@': path.resolve(__dirname, './src'),
    },
  },
});