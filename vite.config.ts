/*
 * @Author: allenxing
 * @Date: 2024-04-29 17:46:34
 * @LastEditors: allenxing
 * @LastEditTime: 2024-05-03 22:37:01
 * @Description: Vite配置
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
 */
import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import fs from 'fs'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_APP_ENV } = env

  const lessResources: Array<String> = []
  fs.readdirSync('src/assets/styles').map((dirname) => {
    if (fs.statSync(`src/assets/styles/${dirname}`).isFile()) {
      lessResources.push(`@import "src/assets/styles/${dirname}";`)
    }
  })

  return {
    // 部署生产环境和开发环境下的URL。
    // 默认情况下，vite 会假设你的应用是被部署在一个域名的根路径上
    // 例如 https://www.allen.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.allen.com/admin/，则设置 baseUrl 为 /admin/。
    base: VITE_APP_ENV === 'production' ? '/' : '/',
    build: {
      outDir: "dist",
      assetsDir: "assets", //指定静态资源存放路径
        sourcemap: false, //是否构建source map 文件
    },
    plugins: createVitePlugins(env, command === 'build'),
    resolve: {
      // https://cn.vitejs.dev/config/#resolve-alias
      alias: {
        // 设置路径
        '~': path.resolve(__dirname, './'),
        // 设置别名
        '@': path.resolve(__dirname, './src')
      },
      // https://cn.vitejs.dev/config/#resolve-extensions
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    // vite 相关配置
    server: {
      port: 80,
      host: true,
      open: true,
      proxy: {
        // https://cn.vitejs.dev/config/#server-proxy
        '/dev-api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/dev-api/, '')
        }
      }
    },
    //fix:error:stdin>:7356:1: warning: "@charset" must be the first rule in the file
    css: {
      preprocessorOptions: {
        less: {
          charset: false,
          additionalData: lessResources.join(''),
          modifyVars: {
            'primary-color': '#0080FF',
            'link-color': '#0080FF',
            'border-radius-base': '4px',
          },
          javascriptEnabled: true,
        },
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              }
            }
          }
        ]
      }
    }
  }
})
