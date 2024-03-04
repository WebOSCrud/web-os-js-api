import {ResponseBody, TaskVo, WapWindowOptionVo} from "./os.vo.type";
import ajax from "./ajax";

/**
 * 获取当前登陆用户的 任务列表
 */
export function taskListCurrentUser(): Promise<ResponseBody<TaskVo[]>> {
    return ajax.get("/task/list/current/user")
}
/**
 * 更具taskId 获取任务
 */
export function task(taskId:string): Promise<ResponseBody<TaskVo>> {
    return ajax.get("/task",{
        taskId:taskId
    })
}
/**
 * 确认一个已经完成的 任务。 确认后将 从系统移除，不在能获取
 */
export function confirm(taskId:string): Promise<ResponseBody<TaskVo>> {
    return ajax.post("/task/confirm",{
        taskId:taskId
    })
}
/**
 * 停止一个正在进行的任务
 */
export function stop(taskId:string): Promise<ResponseBody<TaskVo>> {
    return ajax.post("/task/stop",{
        taskId:taskId
    })
}