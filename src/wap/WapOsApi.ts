import {Clipboard, Menu, OsApi, WapWindow, WindowOption} from "../os.type";


export default class OsApiImpl implements OsApi {

    private readonly _windowId: number;

    constructor(windowId: number) {
        this._windowId = windowId;
    }

    getOsApiImpl(): OsApi {
        // @ts-ignore
        return window.top.osApi;
    }

    creatWindow(op: WindowOption): WapWindow {
        return this.getOsApiImpl().creatWindow(op);
    }

    getWindow(id: number): WapWindow {
        return this.getOsApiImpl().getWindow(id);
    }

    hideMenu(): void {
        this.getOsApiImpl().hideMenu();
    }

    showMenu(menus: Menu[], event:MouseEvent): void {
        let frameElement = window.frameElement;
        // @ts-ignore
        let boundingClientRect = frameElement.getBoundingClientRect();
        // @ts-ignore
        window.top.desktopEnv.showMenu(menus,boundingClientRect.x+event.x,boundingClientRect.y+event.y);
    }

    currentWindow(): WapWindow {
        return this.getWindow(this._windowId);
    }

    get fileClipboard():Clipboard{
        return this.getOsApiImpl().fileClipboard;
    }
}
