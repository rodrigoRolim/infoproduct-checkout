<template>
  <div class="payment-types-credit">
    <IpInputText
      forProperty="card-number"
      label="Número do cartão"
    />
    <IpInputText
      forProperty="card-fullname"
      label="Nome completo no cartão"
    />
    <div class="group-linear-form">
      <IpInputText
        forProperty="month"
        label="mês"
        placeholder="MM"
      />
      <IpInputText
        forProperty="year"
        label="ano"
        placeholder="AA"
      />
      <IpInputText
        forProperty="cvv"
        label="cvv"
        placeholder="ex: 333"
      />
    </div>
  </div>
</template>
<script setup>
import IpInputText from '@/ui-lib/IpInputText.vue';

</script>
<style lang="scss">
.payment-types-credit {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  .group-linear-form {
    display: flex;
    gap: 1.5rem;
  }
}
</style>