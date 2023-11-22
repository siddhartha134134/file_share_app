import { join } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../server/public",
  },
  resolve: {
    alias: {
      "@": join(__dirname, "src"),
    },
  },
});