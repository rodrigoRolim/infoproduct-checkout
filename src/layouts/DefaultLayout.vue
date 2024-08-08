<template>
  <div id="page-container">
    <header class="toolbar">
      
    </header>
    <div class="page-description">
      <button class="button">
        <img src="../renderer/img/chevron-left-solid.svg" width="12" height="12"/>
      </button>
      <h1 class="title">Links de pagamento</h1>
    </div>
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="scss">
@import '../renderer/styles/main.scss';

#page-container {
  display: flex;
  flex-direction: column;
  gap: 32px;

  background-color: $color-white;
 
  font-size: 14px;
  max-width: $max-layout-width;
  margin: 0 auto;
  
  @include respond-to(handhelds) {
    padding: 0px 1rem;
  }

  .page-description {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;

    .button {
      cursor: pointer;
      display: flex;
      background-color: transparent;
      border: unset;
    }
  }

  .title {
    font-size: 18px;
    line-height: 24px;
    cursor: pointer;
  }
}

</style>
