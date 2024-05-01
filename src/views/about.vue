<script setup lang='ts'>
import { useAboutStore } from '@/store'
const { proxy } = getCurrentInstance()! // 非空断言 -- 用于断言操作对象是非null和非undefined类型
const store = useAboutStore()

const { count, doubleCount } = storeToRefs(store)
const { increment } = store

function handleClick(){
    increment()
}

onMounted(() => {
  console.log('proxy', proxy)
})
</script>

<template>
  <div class='wrapper'>
    <a-button type="primary" @click="handleClick">点击</a-button>
    {{ count }} -- {{ doubleCount}} 
    about页面
  </div>
</template>

<style scoped lang='less'>

</style>