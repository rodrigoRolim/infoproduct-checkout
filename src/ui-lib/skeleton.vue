<template>
  <div 
    v-for="_ in quantity"
    :class="$style.skeleton" 
    :style="{ height: height + 'px', width: width + '%' }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  height: {
    type: Number,
    required: true,
    default: 16
  },
  width: {
    type: Number,
    required: true,
    default: 100
  },
  quantity: {
    type: Number,
    default: 1
  }
})
</script>
<style lang="scss" module>
.skeleton {
  background: linear-gradient(90deg, var(--color-base), var(--color-100), var(--color-base)) 0 0/ 100vh 100% fixed;
  animation: bgslide 6s infinite linear;
}

@keyframes bgslide {
  to {
    background-position: 100vw 0
  }
}
</style>