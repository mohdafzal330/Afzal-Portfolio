import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps asset paths relative so the build works on GitHub Pages or any static host.
export default defineConfig({
  plugins: [react()],
  base: "./",
  // Own port so it doesn't clash with other Vite apps on the default 5173.
  server: { port: 5180, strictPort: true, open: true },
  preview: { port: 5181, strictPort: true },
});
