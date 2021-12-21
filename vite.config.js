import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ssr()],
});