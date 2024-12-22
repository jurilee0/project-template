import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import next from "vite-plugin-next";
import path from "path";

export default defineConfig({
  plugins: [react(), next()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
