const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true, // Activer nodeIntegration si nécessaire pour Electron
      builderOptions: {
        appId: "com.venture.editor",
        productName: "Venture Editor",
        mac: { target: "dmg" },
        win: { target: "nsis" },
        linux: { target: "AppImage" },
      },
    },
  },
});
