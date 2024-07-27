<!--
 * @Author: allenxing
 * @Date: 2024-04-29 23:32:44
 * @LastEditors: allenxing
 * @LastEditTime: 2024-05-03 22:25:13
 * 
 * Copyright (c) 2024 by allenxing All Rights Reserved. 
-->
<script setup lang='ts'>
// const { exec } = require('child_process');
import child_process from "child_process";
import { login } from '@/api/test'

const route = useRoute()
const router = useRouter()
const { proxy } = getCurrentInstance()! // 非空断言 -- 用于断言操作对象是非null和非undefined类型

const count = ref(0)
const data = reactive({
  name: '橘右溪',
  age: '你猜',
  hobby: 'make money'
})

computed(() => {

})

watch(
  route,
  () => {
    count.value += 1
  },
  { immediate: true, deep: true }
)
watchEffect(() => {

})

onMounted(() => {
  login({
    username: 'allenxing',
    password: '123456'
  })
  console.log('proxy', router, proxy)
})

const runShellScript = () => {
  console.log(22222, child_process);
  
  const scriptPath = '/src/shell/test.sh'; // 替换为你的脚本路径
  child_process.exec(`sh ${scriptPath}`, (error, stdout, stderr) => {
    console.log('执行Shell脚本', error, stdout, stderr);
    
    if (error) {
      console.error(`执行出错: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    if (stderr) {
      console.error(`stderr: ${stderr}`);
    }
  });
}

defineExpose({
  ...toRefs(data)
})
</script>

<template>
  <div class='wrapper'>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <svg-icon name="vue" customClass="vue-icon" color="blue"/>
    </a>
    <HelloWorld msg="Vite + Vue" />

    <a-button @click="runShellScript">运行Shell脚本</a-button>
  </div>
</template>

<style scoped lang='less'>
.wrapper {
  background-color: @page-bgc;
}

.vue-icon {
  height: 6em;
  width: 6em;
  padding: 1.5em;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>