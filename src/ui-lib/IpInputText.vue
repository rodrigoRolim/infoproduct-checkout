<template>
  <label :for="forProperty" class="ip-input">
    <small class="label">{{ label }}</small>
    <input
      spellcheck="false"
      type="text"
      class="input"
      :aria-describedby="describedby"
      :id="forProperty"
      :placeholder="placeholder"
      autocomplete="off"
    />
    <ip-hint
      class="hint"
      :hidden="hint === ''"
      :id="describedby"
      :content="hint"
    />
  </label>
</template>

<script setup>
import IpHint from '@/ui-lib/IpHint.vue'

defineProps({
  describedby: {
    type: String,
  },
  forProperty: {
    type: String,
  },
  hint: {
    type: String,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  }
})
</script>

<style lang="scss">
.ip-input {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  min-height: $input-components-height;
  border: 2px solid $color-700;
  border-radius: 8px;

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
    border: unset;
    outline: unset;
    border-radius: 8px;
    width: 100%;
    height: 25px;
    padding: 0 0.5rem;

    &::placeholder {
      color: $color-950;
      opacity: 0.5;
    }
  }

  .hint {
    margin-left: 0.5rem;
  }
}
</style>