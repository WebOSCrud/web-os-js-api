import {Clipboard, ClipboardType} from "./os.type";

export default class ClipboardImpl implements Clipboard {
    private _data: any;
    private _type: ClipboardType;

    constructor() {
        this._type = null;
    }

    clear(): void {
        this._data = null;
        this._type = null;
    }

    get data(): any {
        return this._data;
    }

    get type(): any {
        return this._type;
    }
}

