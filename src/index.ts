
import {Menu, OsApi, WapWindow, WindowOption} from "./os.type";
import DesktopOsApi from "./desktop/DesktopOsApi";
import WapOsApi from "./wap/WapOsApi";

export * from "./os.type";

declare global {
    interface Window {
        osApi: OsApi
    }
}
let desktop = window.top == null || window.top === window;
let windowId: number = -1;
if (!desktop) {
    let frameElement = window.frameElement;
    if (frameElement == null) {
        throw new Error("不处于desktop 环境 frameElement==null")
    }
    let windowIdStr = frameElement.getAttribute("windowid");
    if (windowIdStr == null) {
        throw new Error("不处于desktop 环境 windowIdStr==null")
    }
    windowId = Number.parseInt(windowIdStr);
    //隐藏菜单
    window.addEventListener("mouseup",(event:MouseEvent)=>{
        window.osApi.hideMenu();
    },true)
}
console.log("desktop:", desktop)
if (desktop) {
    window.osApi = new DesktopOsApi();
} else {
    window.osApi = new WapOsApi(windowId);
}
export default window.osApi;
