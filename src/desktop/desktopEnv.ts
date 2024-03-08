import {ContextMenu, Menu, MessageBoxOption, WapWindow, WindowOption} from "../os.type";
import {FileOpenWapInfoListVo} from "../api/os.vo.type";
declare global {
    interface Window {
        desktopEnv:DesktopEnv
    }
}

export  interface DesktopEnv{
    creatWindow(op:WindowOption,data?:any):WapWindow
    getWindow(id:number):WapWindow
    showMenu(menus:ContextMenu,x:number,y:number):void
    hideMenu():void
    messageBox(op: MessageBoxOption): Promise<boolean>
    openFileMode(wapList:FileOpenWapInfoListVo):void
}

export default {
    initDesktopEnv(env: DesktopEnv) {
        window.desktopEnv=env;
    },

}