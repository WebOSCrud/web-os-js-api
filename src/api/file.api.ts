import ajax from "./ajax";
import {FileOpenWapInfoListVo, FileTypeVo, LoginForceVo, ResponseBody, UserVo, WapWindowOptionVo} from "./os.vo.type";

/**
 * 获取打开文件的窗口 参数
 * @param path
 * @param wapId
 * @param setDef
 */
export function openFile(path: string, wapId?: string, setDef?: boolean): Promise<ResponseBody<WapWindowOptionVo>> {
    return ajax.post("/file/open", {
        flePath: path,
        wapId: wapId,
        setDef: setDef,
    });
}

/**
 * 获取能打开文件 的 wap 列表
 * @param path 文件路径
 */
export function getOpenWapList(path: string): Promise<ResponseBody<FileOpenWapInfoListVo>> {
    return ajax.get("/file/open/wap/list", {
        path: path,
    });
}

/**
 * 获取系统注册的 文件类型
 */
export function getTypes(): Promise<ResponseBody<FileTypeVo[]>> {
    return ajax.get("/file/types");
}
/**
 * 获取 选择文件的窗口参数
 */
export function getSelectWindowOption(): Promise<ResponseBody<WapWindowOptionVo>> {
    return ajax.get("/file/select/window/option");
}

export let scrUrl = {
    //获取 文件图标
    fileIcon: (filePath: string) => {
        return "/os/file/icon?path=" + encodeURIComponent(filePath);
    }
}