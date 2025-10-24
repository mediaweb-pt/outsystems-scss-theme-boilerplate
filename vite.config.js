import { resolve } from 'path';
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import cssSort from 'postcss-sort-media-queries';

export default defineConfig({
  // Define the project root
  root: './',
  // Configure the build process
  build: {
    // Set the output directory to match your existing setup
    outDir: '1-dist',
    // Empty the output directory before building
    emptyOutDir: true,
    // Disable minification for CSS and JS
    minify: false,
    // Configure Rollup for more control over the output
    rollupOptions: {
      input: resolve(__dirname, 'index.html'),
    },
  },
  // Configure PostCSS plugins
  css: {
    postcss: {
      plugins: [autoprefixer(), cssSort()],
    },
  },
});