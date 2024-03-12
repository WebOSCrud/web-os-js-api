import {FileOpenWapInfoListVo} from "./api/os.vo.type";
import ClipboardImpl from "./Clipboard";


export type HtmlString = string;
/**
 * 窗口类型
 * normal 常规窗口
 * tool 没有最大化，最小化，不能改变窗口大小
 */
export type WindowType = "normal" | "tool"

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

    windowType?: WindowType,
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

export interface SubMenu {
    label: string,
    divider?: boolean,
    enable?: boolean,
    icon?: string,
    show?: boolean,
    click?: () => void,
}

export interface Menu extends SubMenu {
    subMenu?: SubMenu[]
}

export interface GroupMenu {
    icon: string,
    show?: boolean,
    click?: () => void,
    tip: string
}

export interface ContextMenu {
    group: GroupMenu[],
    menus: Menu[]
}


export interface MessageBoxOption {
    /**
     * 消息标题
     * 默认显示 type
     */
    title?: string,
    /**
     * 可以是html
     */
    msg: HtmlString,
    /**
     * 消息类型
     * 默认 info
     */
    type: "error" | "info" | "warn",
    /**
     * 显示ok 按钮
     * 默认true
     */
    okBtn?: boolean,
    /**
     * 显示 取消按钮
     * 默认 true
     */
    cancelBtn?: boolean,
}

/**
 * 窗口事件类型
 * 基本的
 * max: 窗口最大化
 * min: 窗口最小化
 * close: 窗口关闭
 * focus: 窗口获取焦点
 * unfocus: 窗口失去焦点
 * string: 自定义事件
 */
export type WindowEventType = 'max' | 'min' | 'close' | 'focus' | ' unfocus' | string

/**
 * 窗口事件
 */
export class WindowEvent {

    private _defaultPrevented: boolean = false;

    private readonly _data: any;

    constructor(data?: any) {
        this._data = data;
    }

    /**
     * 阻止默认事件操作
     * 一般是 'max'|'min'|'close'
     */
    preventDefault() {
        this._defaultPrevented = true;
    }

    get defaultPrevented(): boolean {
        return this._defaultPrevented;
    }

    get data() {
        return this._data;
    }
}

export type WindowEvenListener = (event: WindowEvent) => void;

/**
 * wap 窗口属性
 */
export interface WapWindow {
    url: string,
    title: string
    icon: string
    width: number
    height: number
    /**
     * 是否允许最大化
     */
    maximizable: boolean
    /**
     * 是否允许最小化
     */
    minimizable: boolean
    /**
     * 背景色
     */
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

    /**
     * 执行窗口最大化
     */
    max(): void;

    /**
     * 执行窗口最小化
     */
    min(): void;

    /**
     * 执行窗口关闭
     */
    close(): void;

    /**
     * 获取窗口id
     */
    id(): number;

    /**
     * 窗口x 位置
     */
    x: number;
    /**
     * 窗口x 位置
     */
    y: number;

    /**
     * 创建窗口时的 参数
     */
    args(): any;

    /**
     * 窗口类型
     */
    windowType(): WindowType;

    /**
     * 添加窗口事件
     * @param type
     * @param listener
     */
    addEventListener(type: WindowEventType, listener: WindowEvenListener): void;

    /**
     * 移除窗口事件
     * @param type
     * @param listener
     */
    removeEventListener(type: WindowEventType, listener: WindowEvenListener): void;

    /**
     * 发布窗口事件
     * @param type
     * @param event
     */
    pushEvent(type: WindowEventType, event: WindowEvent): void;
}


export type FileClipboardListener = (fileClipboard: FileClipboard) => void;

/**
 * 文件剪切板
 */
export interface FileClipboard {
    get type(): ClipboardType,
    get data(): {
        filePaths: string[]
    } | null,
    setData(type: ClipboardType, data: { filePaths: string[] }): void;
    clear: () => void
    addChangeListener: (listener: FileClipboardListener) => void;
    removeChangeListener: (listener: FileClipboardListener) => void;
}

/**
 * 文件剪切类型
 */
export type ClipboardType = "cut" | "copy" | null;

/**
 * osApi
 */
export interface OsApi {
    /**
     * 创建窗口
     * @param op 窗口参数
     * @param args 窗口args 额外参数
     */
    creatWindow(op: WindowOption, args?: any): WapWindow

    /**
     * 获取WapWindow 实例
     * @param id 窗口id
     */
    getWindow(id: number): WapWindow

    /**
     * 显示右键菜单
     * @param menus 菜单项
     * @param event 鼠标事件
     */
    showMenu(menus: ContextMenu, event: MouseEvent): void

    /**
     * 隐藏菜单
     */
    hideMenu(): void

    /**
     * 获取当前的 窗口对象
     */
    currentWindow(): WapWindow

    /**
     * 文件剪切板
     */
    fileClipboard(): FileClipboard

    /**
     * 打开一个文件
     * @param filePath 文件路径
     */
    openFile(filePath: string, wapId?: string, def?: boolean): void

    /**
     * 文件打开方式
     * @param filePath 文件路径
     */
    openFileMode(filePath: string): void

    /**
     * 消息弹窗
     * @param op 弹窗参数
     * @param call 回调函数
     */
    messageBox(op: MessageBoxOption): Promise<boolean>

}

/**
 * 消息弹窗 参数
 */
export interface MessageBoxOption {
    /**
     * 类型
     */
    type: 'info' | 'warn' | 'error',
    /**
     * 标题
     */
    title?: string,
    /**
     * 图标
     */
    icon?: string,
    /**
     * 消息
     */
    msg: HtmlString
}