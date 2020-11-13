"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_electron_titlebar_1 = require("custom-electron-titlebar");
const url = require("url");
const path = require("path");
window.addEventListener('DOMContentLoaded', () => {
    const titleBar = new custom_electron_titlebar_1.Titlebar({
        backgroundColor: custom_electron_titlebar_1.Color.fromHex('#444444'),
        icon: url.format(path.join(__dirname, '/../../../dist/invoc-frontend/assets/images', '/icon.png')),
    });
    titleBar.updateItemBGColor(custom_electron_titlebar_1.Color.fromHex('#A83700'));
});
//# sourceMappingURL=preload.js.map