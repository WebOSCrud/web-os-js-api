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
    icon?: boolean,
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
}

export interface Clipboard {
    type: ClipboardType,
    data: any
    clear: () =>void
}

export type ClipboardType = "cut" | "copy" | null;

export interface OsApi {
    creatWindow(op: WindowOption): WapWindow

    getWindow(id: number): WapWindow

    showMenu(menus: Menu[], event: MouseEvent): void

    hideMenu(): void

    currentWindow(): WapWindow;

    fileClipboard: Clipboard
}