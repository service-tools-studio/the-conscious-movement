import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ⬅️ this boots Tailwind v4
  ],
  base: "/tess-conscious-movement/",
});
