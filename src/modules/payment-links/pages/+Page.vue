<template>
  <div class="payment-link-page">
    <div class="payment-link-page-actions">
      <button class="payment-link-page-new">Novo link de pagamento</button>
    </div>
    <div class="payment-link-page-list">
      <input-search
        forProperty="name"
        label="busca geral"
        placeholder="Ex: fulano de tal"
      />
      <ClientOnlyPaymentLinkTable>
        <template #fallback>
          <skeleton :height="50" :quantity="4"/>
        </template>
      </ClientOnlyPaymentLinkTable>
    </div>
  </div>
</template>

<script setup>
import InputSearch from '@/ui-lib/InputSearch.vue'
import { clienOnly } from '@/helpers/clientOnly';
import Skeleton from '@/ui-lib/skeleton.vue';

const ClientOnlyPaymentLinkTable = clienOnly(() => import('../components/PaymentLinkTable.vue'))
</script>

<style lang="scss">
.payment-link-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  width: 100%;
  max-width: 1248px;

  &-actions {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    align-content: flex-start;
    width: 100%;
  }

  &-new {
    cursor: pointer;
    padding: 16px 32px;
    font-size: 18px;
    font-weight: 600;
    color: $color-base;
    background-color: $color-700;
    border: 1px solid transparent;
    border-radius: 8px;
  }

  &-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }
}

</style>
