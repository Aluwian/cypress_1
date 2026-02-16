const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      const device = config.env.device || 'laptop'
      const presets = config.env[device]

      if (presets) {
        config.viewportWidth = presets.viewportWidth
        config.viewportHeight = presets.viewportHeight
      }

      return config
    },
  },
});
