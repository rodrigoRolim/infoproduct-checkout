<template>
  <div class="personal-datas-step">
    <IpInputText
      class="personal-datas-step-input"
      forProperty="name"
      label="Nome Completo"
      placeholder="Ex: fulano de tal"
    />

    <IpInputText
      class="personal-datas-step-input"
      forProperty="email"
      label="Email"
      placeholder="Ex: meuemail@email.com"
    />

    <IpInputText
      class="personal-datas-step-input"
      forProperty="cpf"
      label="CPF"
      placeholder="___.___.___-__"
    />
  </div>
</template>
<script setup>
import IpInputText from '@/ui-lib/IpInputText.vue'

</script>
<style lang="scss">
.personal-datas-step {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: fit-content;
}

</style>