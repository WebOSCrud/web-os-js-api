import {Menu, MessageBoxOption, WapWindow, WindowOption} from "../os.type";
import {FileOpenWapInfoListVo} from "../api/os.vo.type";
declare global {
    interface Window {
        desktopEnv:DesktopEnv
    }
}

export  interface DesktopEnv{
    creatWindow(op:WindowOption,data?:any):WapWindow
    getWindow(id:number):WapWindow
    showMenu(menus:Menu[],x:number,y:number):void
    hideMenu():void
    messageBox(op: MessageBoxOption,call?:(confirm:boolean)=>void):void
    openFileMode(wapList:FileOpenWapInfoListVo):void
}

export default {
    initDesktopEnv(env: DesktopEnv) {
        window.desktopEnv=env;
    },

}