<template>
  <div id="page-container">
    <div class="page-description">
      <button>
        <img src="../renderer/img/chevron-left-solid.svg"/>
      </button>
      <h1 class="title">Links de pagamento</h1>
    </div>
    <slot />
  </div>
</template>

<script setup>
</script>

<style lang="scss">
#page-container {
  display: flex;
  flex-direction: column;
  background-color: $color-white;
  height: 100vh;
  font-size: 14px;
  max-width: 1248px;
  margin: 0 auto;
  
  .page-description {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;

    button {
      cursor: pointer;
      display: flex;
      background-color: transparent;
      border: unset;
    }

    img {
      width: 12px;
    }
  }

  .title {
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;
  }
}

</style>
