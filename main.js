const { Plugin } = require("obsidian");

const DESIRED_ZOOM_LEVEL_PERCENTAGE = 120;

module.exports = class ScaleOnloadPlugin extends Plugin {
    onload() {
        this.app.workspace.onLayoutReady(() => {
            setTimeout(() => {
                this.setInterfaceScale(DESIRED_ZOOM_LEVEL_PERCENTAGE);
            }, 200);
        });
    }

    setInterfaceScale(percent) {
        try {
            const { webFrame } = require("electron");
            if (webFrame && typeof webFrame.setZoomFactor === "function") {
                webFrame.setZoomFactor(percent / 100);
            }
        } catch (error) {
            console.error("[zsolt-scale] Failed to set interface scale:", error);
        }
    }
};