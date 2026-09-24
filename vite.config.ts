import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base works both for a user site (sapir0507.github.io)
// and for a project site (sapir0507.github.io/<repo>/).
export default defineConfig({
  plugins: [react()],
  base: './',
});
