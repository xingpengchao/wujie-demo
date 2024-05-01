/*
 * @Author: allenxing
 * @Date: 2024-04-30 18:56:42
 * @LastEditors: allenxing
 * @LastEditTime: 2024-04-30 18:57:42
 * @Description: 
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
 */
import { createPinia } from "pinia";
import { useAboutStore } from "./modules/about.ts";

const pinia = createPinia();

export { useAboutStore };
export default pinia;