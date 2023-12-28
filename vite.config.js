import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { BASE_URL_PREFIX } from "./src/utils/constants.utils";

// https://vitejs.dev/config/
export default defineConfig({
  base: BASE_URL_PREFIX,
  plugins: [react()],
});
