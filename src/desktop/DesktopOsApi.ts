import {Clipboard, Menu, OsApi, WapWindow, WindowOption} from "../os.type";
import ClipboardImpl from "../Clipboard";

export default class DesktopOsApi implements OsApi {
    private _clipboard = new ClipboardImpl();
    creatWindow(op: WindowOption): WapWindow {
        return window.desktopEnv.creatWindow(op);
    }

    currentWindow(): WapWindow {
        throw new Error("不是wap 环境");
    }

    getWindow(id: number): WapWindow {
        return window.desktopEnv.getWindow(id);
    }

    hideMenu(): void {
        return window.desktopEnv.hideMenu();
    }

    showMenu(menus: Menu[], event: MouseEvent): void {
        return window.desktopEnv.showMenu(menus, event.x, event.y);
    }

    get fileClipboard(): Clipboard {
        return this._clipboard;
    }

}