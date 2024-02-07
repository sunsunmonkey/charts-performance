import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import path from 'path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

//确定路径重命名
const pathSrc = path.resolve(__dirname, 'src');
const pathTypes = path.resolve(__dirname, 'types');
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${pathTypes}/`,
      '@/': `${pathSrc}/`,
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer({}), tailwindcss],
    },
  },
});
