import {ClipboardType, FileClipboard, FileClipboardListener} from "./os.type";

export default class ClipboardImpl implements FileClipboard {
    private _data:{filePath:string}|null = null;
    private _type: ClipboardType;
    private _listener: FileClipboardListener[] = [];

    constructor() {
        this._type = null;
    }

    setData(type: ClipboardType, data: { filePath: string; }): void {
        this._data = data;
        this._type = type;
        for (let i = 0; i < this._listener.length; i++) {
            this._listener[i](this);
        }
    }

    addChangeListener(listener: FileClipboardListener) {
        this._listener.push(listener);
    }

    removeChangeListener(listener: FileClipboardListener) {
        for (let i = 0; i < this._listener.length; i++) {
            if (this._listener[i] == listener) {
                this._listener.splice(i, 1);
                return
            }
        }
    }
    clear(): void {
        this._data = null;
        this._type = null;
        for (let i = 0; i < this._listener.length; i++) {
            this._listener[i](this);
        }
    }
    get data(): any {
        return this._data;
    }
    get type(): any {
        return this._type;
    }

}