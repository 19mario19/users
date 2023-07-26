import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import BASE_URL from "../users/src/globalVariable"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/",
})
