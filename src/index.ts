//desktop 需要去实现的 os.js.api.js
// 应该在最开始就引入 os.js.api.js
// <script src="/os/api/os.js.api.js"></script>
//
//桌面使用 iframe 创建一个 wap 窗口时

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
}
console.log("desktop:", desktop)
if (desktop) {
    window.osApi = new DesktopOsApi();
} else {
    window.osApi = new WapOsApi(windowId);
}
export default window.osApi;
