// @lovable.dev/vite-tanstack-config supplies the TanStack Start, React, Tailwind,
// TypeScript paths, and Nitro defaults used by this project.
import netlify from "@netlify/vite-plugin-tanstack-start";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Keep the project's SSR error wrapper.
    server: { entry: "server" },
  },
  // Add Netlify's adapter while retaining the existing Lovable configuration.
  vite: {
    plugins: [netlify()],
  },
});
