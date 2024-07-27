import { post } from "@/utils/request/index";
import { IResponse } from "@/utils/request/type";

export interface LoginData {
  username?: string;
  password?: string;
}

enum URL {
  login = "/user_center/login",
}

/**
 * @description: 用户登录
 * @params {LoginData} params
 * @return {Promise}
 */

const login = async (data: LoginData) =>
  post<IResponse>({ url: URL.login, data });

export { login };