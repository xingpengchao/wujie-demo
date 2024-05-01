/*
 * @Author: allenxing
 * @Date: 2024-04-29 23:30:06
 * @LastEditors: allenxing
 * @LastEditTime: 2024-04-30 02:22:37
 * @Description: 路由配置
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"; // 导入路由
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/", 
    component: () => import("../views/home.vue"),
  },
  {
    path: "/about", 
    component: () => import("../views/about.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});

router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  next();
});

router.afterEach((_to) => {
  NProgress.done();
});

export default router