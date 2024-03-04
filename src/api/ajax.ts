import {ResponseBody} from "./os.vo.type";
import axios, {AxiosResponse} from "axios";
axios.defaults.baseURL = "/os"

function post<T>(url: string, body?: any): Promise<ResponseBody<T>> {
    return new Promise<ResponseBody<T>>((resolve, reject) => {
        axios.post(url, body).then((res: AxiosResponse<ResponseBody<T>>) => {
            resolve(res.data);
        }).catch((err: Error) => {
            console.error(err);
            reject(err);
        })
    })
}

function get<T>(url: string, params?: any): Promise<ResponseBody<T>> {
    return new Promise<ResponseBody<T>>((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then((res: AxiosResponse<ResponseBody<T>>) => {
            resolve(res.data);
        }).catch((err: Error) => {
            console.error(err);
            reject(err);
        })
    })
}

function deleteAxios<T>(url: string, params?: any): Promise<ResponseBody<T>> {
    return new Promise<ResponseBody<T>>((resolve, reject) => {
        axios.delete(url, {
            params: params
        }).then((res: AxiosResponse<ResponseBody<T>>) => {
            resolve(res.data);
        }).catch((err: Error) => {
            console.error(err);
            reject(err);
        })
    })
}


export default {
    post,get,delete:deleteAxios
}
