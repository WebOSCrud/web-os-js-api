import {FileClipboard, ContextMenu, Menu, MessageBoxOption, OsApi, WapWindow, WindowOption} from "../os.type";
import * as  FileApi from "../api/file.api";
import {FileOpenWapInfoListVo, ResponseBody, WapWindowOptionVo} from "../api/os.vo.type";
import ajax from "../api/ajax";
import ClipboardImpl from "../Clipboard";



export default class DesktopOsApi implements OsApi {
    private _clipboard = new ClipboardImpl();

    creatWindow(op: WindowOption,args?:any): WapWindow {
        return window.desktopEnv.creatWindow(op,args);
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

    showMenu(menus: ContextMenu, event: MouseEvent): void {
        return window.desktopEnv.showMenu(menus, event.x, event.y);
    }

    fileClipboard(): FileClipboard {
        return this._clipboard;
    }

    openFile(filePath: string,wapId?:string,def?:boolean): void {
        let that = this;
        FileApi.openFile(filePath,wapId,def)
            .then((res: ResponseBody<WapWindowOptionVo>) => {
                let data = res.data;
                that.creatWindow(data,{filePath:filePath});
            }).catch(err => {
            console.log(err)
        })
    }

    messageBox(op: MessageBoxOption): Promise<boolean> {
        return window.desktopEnv.messageBox(op);
    }

    openFileMode(filePath: string): void {
        FileApi.getOpenWapList(filePath).then((res: ResponseBody<FileOpenWapInfoListVo>) => {
            window.desktopEnv.openFileMode(res.data);
        })
    }

}