import ajax from "./ajax";
import {ResponseBody, WapInfoVo, WapVo, WapWindowOptionVo} from "./os.vo.type";

/**
 * 获取安装列表
 */
export function getInstalls(): Promise<ResponseBody<WapInfoVo[]>> {
    return ajax.get("/wap/installs");
}

/**
 * 卸载
 * @param wapId
 */
export function uninstall(wapId: string): Promise<ResponseBody<void>> {
    return ajax.post("/wap/uninstall", {wapId: wapId});
}

/**
 * 获取怎在运行的 Wap
 */
export function runtimes(): Promise<ResponseBody<WapVo[]>> {
    return ajax.get("/wap/runtimes");

}

/**
 * 停止一个怎在运行的wap
 * @param wapId
 */
export function stop(wapId: string): Promise<ResponseBody<void>> {
    return ajax.post("/wap/stop", {wapId: wapId});
}

export let scrUrl = {
    //获取wap 中 图像资源
    resourceImage: (wapId: string, resource: string) => {
        return "/os/wap/resource/image?wapId=" + wapId + "&resource=" + encodeURIComponent(resource);
    }
}