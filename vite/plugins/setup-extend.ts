/*
 * @Author: allenxing
 * @Date: 2024-04-29 18:05:49
 * @LastEditors: allenxing
 * @LastEditTime: 2024-04-30 00:56:18
 * @Description: 解决vue3下 script setup语法糖下，手动设置组件name不方便的问题
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
 */
import setupExtend from 'unplugin-vue-setup-extend-plus/vite'

export default function createSetupExtend(): any {
	return setupExtend({ 
		enableAutoExpose: true 
	})
}
