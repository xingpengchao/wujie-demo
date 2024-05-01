import { defineStore } from "pinia";

const useAboutStore = defineStore("about", () =>{
  const count: Ref<number> = ref(0)
  const doubleCount: ComputedRef<number> = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }

  return {
    count,
    doubleCount,
    increment
  }
});

export { useAboutStore };