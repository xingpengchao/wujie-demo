/*
 * @Author: allenxing
 * @Date: 2024-05-03 22:09:08
 * @LastEditors: allenxing
 * @LastEditTime: 2024-05-03 22:10:04
 * @Description: 
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
 */

export interface RequestOptions {
    // Whether to process the request result
    isTransformResponse?: boolean;
}

export interface IResponse<T = any> {
    code: number | string;
    result: T;
    data: T;
    message: string;
    status: string | number;
}