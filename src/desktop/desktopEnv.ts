import {Menu, WapWindow, WindowOption} from "../os.type";
declare global {
    interface Window {
        desktopEnv:DesktopEnv
    }
}

export  interface DesktopEnv{
    creatWindow(op:WindowOption):WapWindow
    getWindow(id:number):WapWindow
    showMenu(menus:Menu[],x:number,y:number):void
    hideMenu():void
}

export default {
    initDesktopEnv(env: DesktopEnv) {
        window.desktopEnv=env;
    },

}