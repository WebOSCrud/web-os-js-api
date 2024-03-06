import {FileOpenWapInfoListVo} from "./api/os.vo.type";



export type WindowType="normal" | "tool"
/**
 * 创建窗口的参数
 */
export interface WindowOption {
    /**
     * 窗口打开的url
     */
    url: string
    /**
     * 标题
     */
    title?: string

    windowType?:WindowType,
    /**
     * 窗口图标
     */
    iconUrl?: string
    /**
     * 宽度
     */
    width?: number
    /**
     * 高度
     */
    height?: number
    /**
     * x 偏移量
     * 默认居中
     */
    x?: number
    /**
     * y 偏移量
     * 默认居中
     */
    y?: number

    /**
     * 最小宽度
     * 默认值为 0.
     */
    minWidth?: number
    /**
     * 最小高度
     *  默认值为 0.
     */
    minHeight?: number
    /**
     * 最大宽度
     *  默认值不限
     */
    maxWidth?: number
    /**
     * 最大高度
     * 默认值不限
     */
    maxHeight?: number
    /**
     * 窗口大小是否可调整
     * 默认值为 true
     */
    resizable?: boolean
    /**
     * 窗口是否可移动
     * 默认值为 true
     */
    movable?: boolean
    /**
     * 窗口是否可最小化
     *  默认值为 true
     */
    minimizable?: boolean
    /**
     * 窗口是否最大化
     *  默认值为 true
     */
    maximizable?: boolean
    /**
     * 窗口主题背景色
     */
    background?: string
}

export interface Menu {
    label: string,
    divider?: boolean,
    enable?: boolean,
    icon?: string,
    show?:boolean,
    suMenu?: Menu[],
    click?: () => void,
}

export interface MessageBoxOption {
    /**
     * 消息标题
     */
    title?: string,
    msg: string,
    type: "error" | "info" | "warn",
    /**
     * 显示ok 按钮
     * 默认true
     */
    okBtn?: boolean,
    /**
     * 显示 取消按钮
     * 默认 fasle
     */
    cancelBtn?: boolean,
}

export type BtnType = "ok" | "cancel" | "close"

export type WindowEventType= 'max'|'min'|'close' | 'focus' |' unfocus' | string
export class WindowEvent{

    private _defaultPrevented:boolean=false;

    private readonly _data:any;

    constructor(data?: any) {
        this._data = data;
    }

    preventDefault(){
        this._defaultPrevented=true;
    }
    get defaultPrevented():boolean{
        return this._defaultPrevented;
    }
    get data(){
        return this._data;
    }
}
export type WindowEvenListener=(event:WindowEvent)=>void;
export interface WapWindow {
    url: string,
    title: string
    icon: string
    width: number
    height: number
    maximizable: boolean
    minimizable: boolean
    background?: string
    /**
     * 最小宽度
     * 默认值为 .
     */
    minWidth: number
    /**
     * 最小高度
     *  默认值为 0.
     */
    minHeight: number
    /**
     * 最大宽度
     *  默认值不限
     */
    maxWidth: number
    /**
     * 最大高度
     * 默认值不限
     */
    maxHeight: number
    /**
     * 窗口大小是否可调整
     * 默认值为 true
     */
    resizable: boolean
    /**
     * 窗口是否可移动
     * 默认值为 true
     */
    movable: boolean

    max(): void;

    min(): void;

    close(): void;

    id(): number;

    x: number;

    y: number;

    args():any;

    windowType():WindowType;

    addEventListener(type:WindowEventType,listener:WindowEvenListener):void;

    removeEventListener(type:WindowEventType,listener:WindowEvenListener):void;

    pushEvent(type:WindowEventType,event:WindowEvent):void;
}

export interface Clipboard {
    type: ClipboardType,
    data: any
    clear: () =>void
}

export type ClipboardType = "cut" | "copy" | null;

export interface OsApi {
    creatWindow(op: WindowOption,args?:any): WapWindow

    getWindow(id: number): WapWindow

    showMenu(menus: Menu[], event: MouseEvent): void

    hideMenu(): void

    currentWindow(): WapWindow

    fileClipboard(): Clipboard

    openFile(filePath:string):void

    openFileMode(filePath:string):void

    messageBox(op: MessageBoxOption,call?:(confirm:boolean)=>void ):void

}

export interface MessageBoxOption{
    type:'info'| 'warn'| 'error',
    title?:string,
    icon?:string,
    msg:string
}