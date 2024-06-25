<template>
  <div class="payment-datas-step">
    <p class="text">Selecione a forma de pagamento</p>
    <div class="payment-steps">
      <PaymentTypes @select-payment-type="setPaymentType"/>
      <PaymentTypesCredit v-show="selectedPaymentType === CREDIT"/>
      <PaymentTypesPix v-show="selectedPaymentType === PIX"/>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import PaymentTypes from './PaymentTypes.vue';
import PaymentTypesCredit from './PaymentTypesCredit.vue';
import PaymentTypesPix from './PaymentTypesPix.vue';

const PIX = 'pix'
const CREDIT = 'credit'
const BARCODE = 'barcode'

const selectedPaymentType = ref(CREDIT)

function setPaymentType(paymentType) {
  selectedPaymentType.value = paymentType
}
</script>
<style lang="scss">
.payment-datas-step {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .payment-steps {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
}
</style>