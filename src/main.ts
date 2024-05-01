import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import '@/assets/styles/index.less'
import App from './App.vue'

// Ant Design Vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

// 自定义SvgIcon组件
import 'virtual:svg-icons-register'
import SvgIcon from "@/components/SvgIcon/index.vue"

const pinia = createPinia()
const app = createApp(App)

app.use(Antd)
   .use(router)
   .use(pinia) 
   .mount('#app')

app.component("svg-icon", SvgIcon)