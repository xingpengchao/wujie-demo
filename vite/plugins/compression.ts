/*
 * @Author: allenxing
 * @Date: 2024-04-29 18:05:49
 * @LastEditors: allenxing
 * @LastEditTime: 2024-04-29 18:59:19
 * @Description: 用于 gzip 或 Brotli 压缩资源，从而减少页面的加载时间和网络带宽
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
 */

import compression from 'vite-plugin-compression'

export default function createCompression(env: any): any {
    const { VITE_BUILD_COMPRESS } = env
    const plugin = []
    if (VITE_BUILD_COMPRESS) {
        const compressList = VITE_BUILD_COMPRESS.split(',')
        if (compressList.includes('gzip')) {
            // http://doc.ruoyi.vip/ruoyi-vue/other/faq.html#使用gzip解压缩静态文件
            plugin.push(
                compression({
                    ext: '.gz',
                    deleteOriginFile: false
                })
            )
        }
        if (compressList.includes('brotli')) {
            plugin.push(
                compression({
                    ext: '.br',
                    algorithm: 'brotliCompress',
                    deleteOriginFile: false
                })
            )
        }
    }
    return plugin
}
