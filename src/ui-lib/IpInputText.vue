<template>
  <label :for="forProperty" class="ip-input">
    <div class="container">
      <small class="label">{{ label }}</small>
      <input 
        type="text"
        class="input"
        :aria-describedby="describedby"
        :id="forProperty"
        :placeholder="placeholder"
        autocomplete="off"
      />
    </div>
    <ip-hint
      v-if="hint"
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
  width: 100%;

  .container {
    position: relative;
    display: inherit;
    flex-direction: inherit;
    border: 2px solid $color-600;
    border-radius: 8px;

    .label {
      font-size: 14px;
      font-weight: 600;
      color: $color-950;
      position: absolute;
      left: 8px;
      top: 2px;
    }
  }

  .input {
    font-size: 1rem;
    font-weight: 500;
    color: $color-950;
    height: 50px;
    padding: 1rem 0.5rem 0.3rem;
    border: unset;
    outline: unset;
    border-radius: 8px;
    width: 100%;

    &::placeholder {
      color: $color-950;
      opacity: 0.5;
    }
  }
}
</style>