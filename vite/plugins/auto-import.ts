/*
 * @Author: allenxing
 * @Date: 2024-04-29 18:05:49
 * @LastEditors: allenxing
 * @LastEditTime: 2024-04-30 01:11:14
 * @Description: 按需自动导入Vue、Vue-Router、Pinia官方Api
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
 */
import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport(): any {
  return autoImport({
    imports: [
      'vue',
      'vue-router',
      'pinia'
    ],
    dts: 'types/auto-import.d.ts'
  })
}
