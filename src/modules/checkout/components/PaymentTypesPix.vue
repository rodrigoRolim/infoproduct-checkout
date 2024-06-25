<template>
  <div class="payment-types-pix">
    <div class="qrcode">
      <img src="../../../renderer/icons/qrcode.png"/>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.payment-types-pix {
  display: flex;
  flex-direction: column;
  align-items: center;

  .qrcode {
    display: flex;
    align-items: center;

    img {
      width: 300px;
    }
  }
}
</style>