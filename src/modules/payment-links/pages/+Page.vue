<template>
  <table class="payment-links">
    <thead class="header">
      <tr class="content">
        <th 
          class="cell"
          v-for="column in columns"
          :key="column.id"
        >
          {{ column.value }}
        </th>
      </tr>
    </thead>
    <tbody class="body">
      <tr
        class="register"
        v-for="paymentLink in paymentLinkList"
        :key="paymentLink.id"
      >
        <td class="cell">{{ paymentLink.id }}</td>
        <td class="cell"><img :src="paymentLink.image.src" :alt="paymentLink.image.alt"/></td>
        <td class="cell">{{ paymentLink.name }}</td>
        <td class="cell">{{ paymentLink.price }}</td>
        <td class="cell">{{ paymentLink.createdAt }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const columns = [
  { id: 0, value: 'id' },
  { id: 0, value: 'imagem' },
  { id: 1, value: 'nome' },
  { id: 2, value: 'preço' },
  { id: 3, value: 'data de criação'}
]
const paymentLinkList = [
  { id: 0, image: { src: '', alt: 'foto do produto' }, price: 'R$ 50,00', name: 'Nome do produto Aasdasdsadasadasasdsad', createdAt: '12/08/2024' },
  { id: 1, image: { src: '', alt: 'foto do produto' }, price: 'R$ 50,00', name: 'Nome do produto A', createdAt: '12/08/2024' },
  { id: 2, image: { src: '', alt: 'foto do produto' }, price: 'R$ 50,00', name: 'Nome do produto A', createdAt: '12/08/2024' },
  { id: 3, image: { src: '', alt: 'foto do produto' }, price: 'R$ 50,00', name: 'Nome do produto A', createdAt: '12/08/2024' },
  { id: 4, image: { src: '', alt: 'foto do produto' }, price: 'R$ 50,00', name: 'Nome do produto A', createdAt: '12/08/2024' },
  { id: 5, image: { src: '', alt: 'foto do produto' }, price: 'R$ 50,00', name: 'Nome do produto A', createdAt: '12/08/2024' },
]
</script>

<style lang="scss">
.payment-links {
  display: grid;
  grid-template-rows: 50px 1fr;

  .header {
    .content {
      display: grid;
      grid-template-columns: max(50px) max(130px) max(200px) max(100px) max(130px);
      justify-items: start;
      column-gap: 20px;
      background-color: rgb(194, 194, 194);
    }
  }

  .body {
    .register {
      display: grid;
      grid-template-columns: max(50px) max(130px) max(200px) max(100px) max(130px);
      justify-items: start;
      column-gap: 20px;
      .cell {
        word-break: break-all;
      }
    }
  }
  .cell {
    height: 50px;
  }
}
tr:nth-child(2n) {
  background-color: rgb(194, 194, 194);
}
</style>