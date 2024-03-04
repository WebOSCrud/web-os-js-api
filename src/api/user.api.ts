/**
 *
 *os core 用户相关的api
 *
 *
 */
import {LoginForceVo, ResponseBody, UserVo} from "./os.vo.type";
import ajax from "./ajax";

/**
 * 登陆
 * @param username 用户名
 * @param password 密码
 */
export function userLogin(username: string, password: string): Promise<ResponseBody<LoginForceVo | UserVo>> {
    return ajax.post("/user/login", {
        name: username,
        password: password
    });
}

/**
 * 强制登陆
 * @param loginId 登陆id
 * @see LoginForceVo
 * @see {@link userLogin}
 */
export function userLoginForce(loginId: string): Promise<ResponseBody<UserVo>> {
    return ajax.post("/user/login/force", {
        loginId: loginId,
    });
}

/**
 * 用户登出
 */
export function userLogout(): Promise<ResponseBody<void>> {
    return ajax.post("/user/login/force");
}

/**
 * 获取当前用户登陆信息
 */
export function userLoginInfo(): Promise<ResponseBody<UserVo>> {
    return ajax.post("/user/login/user");
}

/**
 * 获取用户列表
 */
export function userList(): Promise<ResponseBody<UserVo[]>> {
    return ajax.get("/user/login/user/list");
}

/**
 * 修改用户信息
 * @param info
 */
export function modifyUserInfo(info: {
    oldPassword?: string,
    password?: string,
    avatarFilePath?: string,
    description?: string
}): Promise<ResponseBody<UserVo>> {
    return ajax.post("/user/login/user/info", info);
}

/**
 * 删除用户
 * @param username
 */
export function deleteUser(username: string): Promise<ResponseBody<void>> {
    return ajax.delete("/user/login/user", {
        userName: username
    });
}

/**
 * 一些可以直接用于 src 上的 url 地址，一般是用来获取图片显示
 */
export let scrUrl = {
    //获取用户头像的 url 地址
    userAvatar: "/os/user/avatar"
}