import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        // si necesitas aislamiento fuerte por estado de módulo:
        isolate: true
    }
});
