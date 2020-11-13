import { Titlebar, Color } from 'custom-electron-titlebar';
import * as url from 'url';
import * as path from 'path';


window.addEventListener('DOMContentLoaded', () => {
    const titleBar = new Titlebar({
        backgroundColor: Color.fromHex('#444444'),
        icon: url.format(path.join(__dirname, '/../../../dist/invoc-frontend/assets/images', '/icon.png')),
    });

    titleBar.updateItemBGColor(Color.fromHex('#A83700'));
});
