import {ResponseBody} from "./os.vo.type";
import axios, {AxiosError, AxiosResponse} from "axios";

let ajax = axios.create({
    baseURL: "/os",
    timeout: 3000,
})

function post<T>(url: string, body?: any): Promise<ResponseBody<T>> {
    return new Promise<ResponseBody<T>>((resolve, reject) => {
        ajax.post(url, body).then((res: AxiosResponse<ResponseBody<T>>) => {
            resolve(res.data);
        }).catch((err: AxiosError) => {
            console.error(err);
            if (err.response) {
                let data = err.response.data as ResponseBody<any>;
                window.osApi.messageBox({type: "error", msg: data.msg, cancelBtn: false})
            }
            reject(err);
        })
    })
}

function get<T>(url: string, params?: any): Promise<ResponseBody<T>> {
    return new Promise<ResponseBody<T>>((resolve, reject) => {
        ajax.get(url, {
            params: params
        }).then((res: AxiosResponse<ResponseBody<T>>) => {
            resolve(res.data);
        }).catch((err: AxiosError) => {
            console.error(err);
            if (err.response) {
                let data = err.response.data as ResponseBody<any>;
                window.osApi.messageBox({type: "error", msg: data.msg, cancelBtn: false})
            }
            reject(err);
        })
    })
}

function deleteAxios<T>(url: string, params?: any): Promise<ResponseBody<T>> {
    return new Promise<ResponseBody<T>>((resolve, reject) => {
        ajax.delete(url, {
            params: params
        }).then((res: AxiosResponse<ResponseBody<T>>) => {
            resolve(res.data);
        }).catch((err: AxiosError) => {
            console.error(err);
            if (err.response) {
                let data = err.response.data as ResponseBody<any>;
                window.osApi.messageBox({type: "error", msg: data.msg, cancelBtn: false})
            }
            reject(err);
        })
    })
}


export default {
    post, get, delete: deleteAxios
}
