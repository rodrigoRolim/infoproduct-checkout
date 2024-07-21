<template>
  <label class="input-search">
    <input 
      type="text"
      :aria-describedby="describedby"
      :id="forProperty"
      :placeholder="placeholder"
      autocomplete="off"
    >
    <button class="input-search-loopa">
      <img src="../renderer/img/glass.svg">
    </button>
  </label>
</template>
<script setup>
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
.input-search {
  display: flex;
  width: 100%;
  border: 2px solid $color-700;
  border-radius: 8px;
  background-color: white;

  input {
    border: unset;
    border-radius: 8px;
    width: 100%;
    outline: unset;
    padding: 12px 16px;
    font-size: 16px;
    color: $color-950;
  }

  img {
    width: 24px;
    height: 24px;
  }

  &-loopa {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;
    border: 0;
    border-left: 1px solid $color-700;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: transparent;
  }
}
</style>