<template>
  <div class="payment-link-card">
    <div class="name">
     <h1>Nome do Produto</h1>
    </div>
    <div class="price"><strong>R$ 100,00</strong></div>
    <div class="type">Curso online</div>
    <div class="level">premium</div>
    <div class="expired-at">12/08/2025</div>
    <div class="create-at">20/06/2023</div>
  </div>
</template>

<style lang="scss">
.payment-link-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid $color-700;
  border-radius: 8px;

  padding: 16px;
}
</style>