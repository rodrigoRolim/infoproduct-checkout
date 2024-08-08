<template>
  <nav class="ip-steps">
    <button
      v-for="(step, index) in steps"
      :key="index"
      class="step"
      @click="dispatchStepIndex(index)"
    >
      {{ step }}
    </button>
  </nav>
</template>
<script setup>
defineProps({
  steps: {
    type: Array,
    required: true,
    default: []
  }
})
const emit = defineEmits(['getStepIndex'])
function dispatchStepIndex(stepIndex) {
  emit('getStepIndex', stepIndex)
}
</script>
<style lang="scss">
.ip-steps {
  display: flex;
  
  & .step {
    flex: 1
  }
}
</style>