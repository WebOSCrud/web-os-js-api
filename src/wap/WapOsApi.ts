import {FileClipboard, ContextMenu, Menu, MessageBoxOption, OsApi, WapWindow, WindowOption} from "../os.type";
import {FileOpenWapInfoListVo} from "../api/os.vo.type";


export default class OsApiImpl implements OsApi {

    private readonly _windowId: number;

    constructor(windowId: number) {
        this._windowId = windowId;
    }

    getOsApiImpl(): OsApi {
        // @ts-ignore
        return window.top.osApi;
    }

    creatWindow(op: WindowOption,args?:any): WapWindow {
        return this.getOsApiImpl().creatWindow(op,args);
    }

    getWindow(id: number): WapWindow {
        return this.getOsApiImpl().getWindow(id);
    }

    hideMenu(): void {
        this.getOsApiImpl().hideMenu();
    }

    showMenu(menus: ContextMenu, event: MouseEvent): void {
        let frameElement = window.frameElement;
        // @ts-ignore
        let boundingClientRect = frameElement.getBoundingClientRect();
        // @ts-ignore
        window.top.desktopEnv.showMenu(menus, boundingClientRect.x + event.x, boundingClientRect.y + event.y);
    }

    currentWindow(): WapWindow {
        return this.getWindow(this._windowId);
    }

    fileClipboard(): FileClipboard {
        return this.getOsApiImpl().fileClipboard();
    }

    openFile(filePath: string,wapId?:string,def?:boolean): void {
        this.getOsApiImpl().openFile(filePath,wapId,def);
    }

    openFileMode(filePath: string) {
        this.getOsApiImpl().openFileMode(filePath);
    }
    messageBox(op: MessageBoxOption): Promise<boolean>{
        return this.getOsApiImpl().messageBox(op);
    }
}
