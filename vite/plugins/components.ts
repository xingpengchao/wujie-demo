/*
 * @Author: allenxing
 * @Date: 2024-04-29 23:07:54
 * @LastEditors: allenxing
 * @LastEditTime: 2024-04-30 00:55:01
 * @Description: 自动按需引入全局组件（src/components目录下）和Ant Design Vue组件
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
 */

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default function createComponents(): any {
  return Components({
    extensions: ['vue', 'md'],
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    dts: 'types/components.d.ts',
    deep: true, // 搜索子目录
    dirs: ['src/components'], // 按需加载的文件夹
    resolvers: [  // 自动按需引入Ant Design Vue组件
      AntDesignVueResolver({
        importStyle: false, // css in js
      }),
    ],
  })
}
