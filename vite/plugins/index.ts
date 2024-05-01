/*
 * @Author: allenxing
 * @Date: 2024-04-29 18:05:49
 * @LastEditors: allenxing
 * @LastEditTime: 2024-04-29 23:12:55
 * @Description: 支持Vite使用Vue单文件组件（SFC）；插件集中起来
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
 */

import vue from '@vitejs/plugin-vue'

import createAutoImport from './auto-import'
import createSvgIcon from './svg-icon'
import createCompression from './compression'
import createSetupExtend from './setup-extend'
import createComponents from './components'

export default function createVitePlugins(viteEnv: any, isBuild = false): any {
  const vitePlugins = [vue()]
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createSetupExtend())
  vitePlugins.push(createComponents())
  vitePlugins.push(createSvgIcon(isBuild))
  isBuild && vitePlugins.push(...createCompression(viteEnv))
  return vitePlugins
}
