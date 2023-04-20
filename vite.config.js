import react from '@vitejs/plugin-react'
import { resolve } from "path"
import { defineConfig } from 'vite'
import * as packageJson from "./package.json"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve("src", "index.js"),
      name: "dnfx-hurricane-blocks",
      formats: ["es", "cjs"],
      fileName: (format) =>
        `dnfx-hurricane-blocks.${format === "cjs" ? "cjs" : "es.js"
        }`,
    },
    optimizeDeps: {
      exclude: Object.keys(packageJson.peerDependencies),
    },
    esbuild: {
      minify: true,
    },
  }
})
