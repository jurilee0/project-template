import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import next from "vite-plugin-next";
import path from "path";

export default defineConfig({
  plugins: [react(), next()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/app/components"),
      "@contexts": path.resolve(__dirname, "./src/app/contexts"),
      "@hooks": path.resolve(__dirname, "./src/app/hooks"),
      "@styles": path.resolve(__dirname, "./src/app/styles"),
      "@types": path.resolve(__dirname, "./src/app/types"),
      "@utils": path.resolve(__dirname, "./src/app/utils"),
    },
  },
});
