import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: "https://app2.abtasty.com/login",
    },
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
});
