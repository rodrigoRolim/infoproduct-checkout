<template>
  <label class="ip-textarea" :class="$attrs?.class">
    <small class="label">{{ label }}</small>
    <textarea spellcheck="false" class="input" :rows="$attrs?.rows" :name="$attrs?.name" :id="$attrs?.id" />
  </label>
</template>

<script setup>
defineOptions({
  inheritAttrs: false
})
defineProps({
  label: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.ip-textarea {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid $color-700;
  border-radius: 8px;
  gap: 2px;

  .label {
    font-size: 14px;
    font-weight: 600;
    color: $color-950;
    margin-left: 8px;
  }

  .input {
    font-size: 1rem;
    font-weight: 500;
    color: $color-950;
    padding: 0 0.5rem;
    border: unset;
    outline: unset;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    resize: none;

    &::placeholder {
      color: $color-950;
      opacity: 0.5;
    }
  }
}
</style>