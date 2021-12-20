import * as path from 'path';
import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

import federation from '@originjs/vite-plugin-federation';
import reactRefresh from '@vitejs/plugin-react-refresh';

import pkg from './package.json';

// import federation from './plugins/vite-plugin-react-federation';

process.env.VITE_APP_VERSION = pkg.version;
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ["auth"],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    // viteExternalsPlugin({
    //   "react": "React",
    //   "react-dom": "ReactDOM",
    // }),
    reactRefresh(),
    federation({
      name: 'container_app',
      mode: 'development',
      remotes:{
        auth: 'http://localhost:8080/assets/remoteEntry.js',
        home: 'http://localhost:5001/assets/remoteEntry.js'
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
    target: 'esnext',
    // cssCodeSplit: false,
  },
  server: {
    port: 3000,
    strictPort: true,
    open: './index.html'
  }
});
