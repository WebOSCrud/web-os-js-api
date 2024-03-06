import {ResponseBody} from "./os.vo.type";
import axios, {AxiosResponse} from "axios";
let ajax=axios.create({
    baseURL: "/os",
    timeout: 3000,
})
function post<T>(url: string, body?: any): Promise<ResponseBody<T>> {
    return new Promise<ResponseBody<T>>((resolve, reject) => {
        ajax.post(url, body).then((res: AxiosResponse<ResponseBody<T>>) => {
            if(res.data.code!=200){
                reject(res.data);
                window.osApi.messageBox({type:"error",msg:res.data.msg})
            }else {
                resolve(res.data);
            }
        }).catch((err: Error) => {
            console.error(err);
            reject(err);
        })
    })
}

function get<T>(url: string, params?: any): Promise<ResponseBody<T>> {
    return new Promise<ResponseBody<T>>((resolve, reject) => {
        ajax.get(url, {
            params: params
        }).then((res: AxiosResponse<ResponseBody<T>>) => {
            if(res.data.code!=200){
                reject(res.data);
                window.osApi.messageBox({type:"error",msg:res.data.msg})
            }else {
                resolve(res.data);
            }
        }).catch((err: Error) => {
            console.error(err);
            reject(err);
        })
    })
}

function deleteAxios<T>(url: string, params?: any): Promise<ResponseBody<T>> {
    return new Promise<ResponseBody<T>>((resolve, reject) => {
        ajax.delete(url, {
            params: params
        }).then((res: AxiosResponse<ResponseBody<T>>) => {
            if(res.data.code!=200){
                reject(res.data);
                window.osApi.messageBox({type:"error",msg:res.data.msg})
            }else {
                resolve(res.data);
            }
        }).catch((err: Error) => {
            console.error(err);
            reject(err);
        })
    })
}


export default {
    post,get,delete:deleteAxios
}
