import {WindowOption} from "../os.type";

export interface ResponseBody<T> {
    code: number
    msg: string
    data: T
}

export interface UserVo {
    name: string;
    description: string;
    avatarUrl: string;
}

export interface LoginForceVo {
    loginId: string;
}

export interface WapWindowOptionVo extends WindowOption {

}

export interface WapBaseInfoVo {
    name: string;
    iconUrl: string;
    wapId: string;
}

export interface FileOpenWapInfoListVo {
    normal: WapBaseInfoVo[]
    others: WapBaseInfoVo[]
}

export interface FileTypeVo {
    extName: string;
    description: string;
    wapId: string;
    iconUrl: string;
}

export enum WapWindowType {
    Normal = "Normal",
    Desktop = "Desktop",
    FileManagerSelect = "FileManagerSelect",
    OpenFile = "OpenFile"
}

export interface WapWindowVo extends WapWindowOptionVo {
    name: string
    description: string
    iconUrl: string
    type: WapWindowType
}

export interface WapInfoVo {
    id: string
    name: string
    iconUrl: string
    description: string
    version: string
    numberVersion: number
    wapWindows: WapWindowVo[]
    fileTypes: FileTypeVo[]
    installTime: number
    updateTime: number
    activeThread: number
}

export enum WapStatus {
    Loading = "Loading",
    Loaded = "Loaded",
    Starting = "Starting",
    Running = "Running",
    Stopping = "Stopping",
    Stopped = "Stopped",
}

export interface WapVo {
    httpLastVisitTimme: number,
    startTime: number,
    startUpTime: number,
    wapStatus: WapStatus,
    wapInfo: WapInfoVo,
}

export enum TaskState {
    /**
     * 创建时，提交任务是只能是该状态
     */
    Creat = "Creat",
    /**
     * 任务运行中
     */
    Running = "Running",
    /**
     * 停止中
     */
    Stopping = "Stopping",
    /**
     * 任务正常结束
     */
    End = "End",
    /**
     * 任务异常结束
     * 一般指 在{@link TaskState#Running} 中发生异常
     */
    ErrorEnd = "ErrorEnd",
}

export interface TaskVo {
    /**
     * 任务名称
     */
    taskName: string;

    /**
     * 任务Id
     */
    taskId: string;

    /**
     * 创建时间
     */
    createTime: number;
    /**
     * 停止时间
     */
    stopTime: number;

    /**
     * 开始时间
     */
    startTime: number;

    /**
     * 结束时间
     */
    endTime: number;

    /**
     * 任务状态
     */
    taskState: TaskState;

    /**
     * 创建者(提交任务的用户)
     */
    username: string;

    /**
     * 隶属于哪个wap
     */
    wapId: string;

    /**
     * 用于显示这个 task 的 url
     */
    openUrl: string;

    /**
     * 任务进度 0-100
     */
    progress: number;
    /**
     * 异常消息
     */
    exceptionMsg?:string
    /**
     * 任务描述
     */
    description?:string
    /**
     * task 显示的窗口参数
     */
    wapWindowOption?:WapWindowOptionVo
}