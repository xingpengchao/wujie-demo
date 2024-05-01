<script setup lang='ts'>
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
  console.log('proxy', router, proxy)
})

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