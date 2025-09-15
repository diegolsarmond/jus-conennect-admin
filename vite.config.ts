import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
const normalizeBasePath = (value?: string) => {
  if (!value) {
    return "./";
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return "./";
  }

  if (trimmed === "." || trimmed === "./") {
    return "./";
  }

  const normalized = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
  const withoutTrailingSlash = normalized.replace(/\/+$/, "");

  return `${withoutTrailingSlash}/`;
};

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = normalizeBasePath(env.VITE_APP_BASE_PATH);

  return {
    base,
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      sourcemap: mode !== "production",
      chunkSizeWarningLimit: 1024,
    },
  };
});
