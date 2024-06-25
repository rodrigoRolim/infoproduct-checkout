<template>
  <div class="payment-types">
    <i class="icon i-credit-card" @click="selectPaymentType(1)" />
    <i class="icon i-pix" @click="selectPaymentType(0)" />
    <i class="icon i-barcode" @click="selectPaymentType(2)" />
  </div>
</template>
<script setup>
const PIX = 'pix'
const CREDIT = 'credit'
const BARCODE = 'barcode'

const emits = defineEmits(['selectPaymentType'])

const paymentTypeList = Object.freeze([PIX, CREDIT, BARCODE])

function selectPaymentType(paymentType) {
  emits('selectPaymentType', paymentTypeList[paymentType])
}
</script>
<style lang="scss">
.payment-types {
  display: flex;
  width: 100%;
  gap: 8px;

  .icon {
    border: 2px solid $color-600;
    border-radius: 8px;
    width: 100%;
    height: 100px;
    background-size: 80px 80px;

    &:active {
      background-color: $color-800;
    }

  }


}
</style>