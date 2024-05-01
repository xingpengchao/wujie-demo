<script setup lang="ts">
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    customClass: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    }
})

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
    if (props.customClass) {
        return `svg-icon ${props.customClass}`
    }
    return 'svg-icon'
})
</script>

<template>
    <svg :class="svgClass" aria-hidden="true">
        <use :xlink:href="iconName" :fill="color" />
    </svg>
</template>
  
<style scoped lang="less">
.svg-icon {
    width: 1em;
    height: 1em;
    position: relative;
    fill: currentColor;
    vertical-align: middle;
}
</style>
  