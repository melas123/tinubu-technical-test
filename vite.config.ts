import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup",
    coverage: {
      provider: "istanbul", // or 'v8'
    },
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@config": path.resolve(__dirname, "src/config"),
      "@customTypes": path.resolve(__dirname, "src/types"),
      "@models": path.resolve(__dirname, "src/models"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@sections": path.resolve(__dirname, "src/sections"),
      "@public": path.resolve(__dirname, "public"),
    },
  },
});
