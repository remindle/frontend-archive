import * as path from 'path';
import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

import federation from '@originjs/vite-plugin-federation';
import reactRefresh from '@vitejs/plugin-react-refresh';

import pkg from './package.json';

process.env.VITE_APP_VERSION = pkg.version;
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}

const bundle_filename = ''
const css_filename = 'style.css'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // css: {
  //   modules: {
  //     scopeBehaviour: 'global',
  //     localsConvention: 'camelCase'
  //   },
  //   // postcss: { plugins: [autoprefixer()] }
  // },
  plugins: [
    // viteExternalsPlugin({
    //   react: "React",
    //   "react-dom": "ReactDOM",
    // }),
    reactRefresh(),
    federation({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './Bootstrap': './src/bootstrap',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: pkg.dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: pkg.dependencies['react-dom'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: pkg.dependencies['react-router-dom'],
        },
        'history': {
          singleton: true,
          requiredVersion: pkg.dependencies['history'],
        },
      },
    }),
  ],
  build: {
    // lib: {
    //   entry: path.resolve(__dirname, "src/bootstrap.tsx"),
    //   name: "auth",
    // },
    // target: 'esnext',
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    // rollupOptions: {
    //   output: {
    //     format: 'es',
    //     minifyInternalExports: false
    //   }
    // }
  },
  server: {
    port: 8080,
    strictPort: true,
    open: './index.html'
  },
  preview: {
    port: 8080,
    strictPort: true,
    open: './index.html'
  }
});
