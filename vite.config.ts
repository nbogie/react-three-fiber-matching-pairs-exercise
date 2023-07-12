/// <reference types="vite/client" />

// See https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts

//import eslint from "vite-plugin-eslint"  //...or vite-plugin-checker
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
    // currently seems to require you manually reload the app ?
    plugins: [
        // eslint(),
        react(),
        checker({
            typescript: true,
            eslint: {
                lintCommand: "eslint src/**/*.ts src/**/*.tsx",
            },
        }),
    ],
});
