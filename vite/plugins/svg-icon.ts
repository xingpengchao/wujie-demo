/*
 * @Author: allenxing
 * @Date: 2024-04-29 18:05:49
 * @LastEditors: allenxing
 * @LastEditTime: 2024-04-30 18:19:08
 * @Description: 将图标整合成雪碧图，用来优化性能， 减少请求次数
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

export default function createSvgIcon(isBuild: boolean): any {
	return createSvgIconsPlugin({
		iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
		symbolId: 'icon-[dir]-[name]',
		svgoOptions: isBuild
	})
}
