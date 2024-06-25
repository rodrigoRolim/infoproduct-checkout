<template>
  <p class="ip-hint">{{ content }}</p>
</template>

<script setup>
defineProps({
  content: {
    type: String,
  }
})
</script>

<style lang="scss">
.ip-hint.p {
  margin: 0 0 0 8px;
  font-size: 12px;
}
</style>