<template>
  <div class="payment-link-list">
    <PaymentLinkCard />
    <PaymentLinkCard />
    <PaymentLinkCard />
    <PaymentLinkCard />
    <PaymentLinkCard />
  </div>
</template>
<script setup>
import PaymentLinkCard from './PaymentLinkCard.vue';
</script>
<style lang="scss">
.payment-link-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>