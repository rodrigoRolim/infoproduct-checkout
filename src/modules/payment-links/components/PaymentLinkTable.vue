<template>
  <div class="payment-link">
    <table class="payment-link-table" cellspacing="0">
      <thead class="header">
        <tr class="row">
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
          class="row"
          v-for="paymentLink in paymentLinkList"
          :key="paymentLink.id"
        >
          <td class="cell created-data">{{ paymentLink.createdAt }}</td>
          <td class="cell image-product"><img class="image" :src="paymentLink.image.src"/></td>
          <td class="cell name-product">{{ paymentLink.name }}</td>
          <td class="cell product-price">{{ paymentLink.price }}</td>
          <td class="cell product-type">{{ paymentLink.type }}</td>
          <td class="cell product-expiration">{{ paymentLink.expiration }}</td>
          <td class="cell product-access-level">{{ paymentLink.accessLevel }}</td>
          <td class="cell payment-link-table-actions">
            <button class="button-remove">
              <img class="image-remove" src="../../../renderer/img/trash.svg" />
            </button>
            <button class="button-edit" title="editar link de pagamento">
              <img class="image-clipboard" src="../../../renderer/img/pen-to-square.svg" alt="">
            </button>
            <button class="button-clipboard" title="copiar link de pagamento">
              <img class="image-clipboard" src="../../../renderer/img/clipboard-regular.svg">
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="payment-link-table-paginate">
      <slot>
        << 1 >>
      </slot>
    </div>
  </div>
</template>

<script setup>
const columns = Object.freeze([
  { id: 0, value: 'Data de criação' },
  { id: 3, value: 'Imagem' },
  { id: 1, value: 'Nome' },
  { id: 2, value: 'Preço' },
  { id: 4, value: 'Tipo' },
  { id: 5, value: 'duração' },
  { id: 6, value: 'nível de acesso' },
  { id: 7, icon: '' },
])
const paymentLinkList = [
  { id: 0,
    type: 'curso online',
    expiration: '12 meses',
    accessLevel: 'básico',
    image: { src: '/src/renderer/img/course.png',
    alt: 'foto do produto' },
    price: 'R$ 50.00',
    name: 'Nome do produto A',
    createdAt: '12/08/2024',
    action: '' 
  },
  { 
    id: 1, 
    type: 'curso online',
    expiration: '12 meses',
    accessLevel: 'básico',
    image: { src: '/src/renderer/img/course.png',
    alt: 'foto do produto' },
    price: 'R$ 50,00',
    name: 'Nome do produto A',
    createdAt: '12/08/2024',
    action: '' 
  },
  { 
    id: 2,
    type: 'curso online',
    expiration: '12 meses',
    accessLevel: 'básico',
    image: { src: '/src/renderer/img/course.png',
    alt: 'foto do produto' },
    price: 'R$ 50,00',
    name: 'Nome do produto A',
    createdAt: '12/08/2024',
    action: '' 
  },
  { 
    id: 3,
    type: 'curso online',
    expiration: '12 meses',
    accessLevel: 'básico',
    image: { src: '/src/renderer/img/course.png',
    alt: 'foto do produto' },
    price: 'R$ 50,00',
    name: 'Nome do produto A',
    createdAt: '12/08/2024',
    action: '' 
  },
  { 
    id: 4,
    type: 'curso online',
    expiration: '12 meses',
    accessLevel: 'básico',
    image: { src: '/src/renderer/img/course.png',
    alt: 'foto do produto' },
    price: 'R$ 50,00',
    name: 'Nome do produto A',
    createdAt: '12/08/2024',
    action: '' 
  },
  { 
    id: 5,
    type: 'curso online',
    expiration: '12 meses',
    accessLevel: 'básico',
    image: { src: '/src/renderer/img/course.png',
    alt: 'foto do produto' },
    price: 'R$ 50,00',
    name: 'Nome do produto A',
    createdAt: '12/08/2024',
    action: '' 
  },
]

</script>

<style lang="scss">
.payment-link {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.payment-link-table {
  height: fit-content;
  width: 100%;

  border-collapse: collapse;

  .created-data {
    width: 15%;
  }

  .image-product {
    width: 10%;
  }

  .product-price {
    width: 10%;
  }

  .header {
    height: 60px;

    .cell {
      border-top: 2px solid $color-700;
      border-bottom: 2px solid $color-700;
      text-align: left;
    }
  }

  .image {
    width: 50px;
  }
  
  .body {
    .row {
      user-select: none;
      .cell {
        border-top: 1px solid $color-700;
        border-bottom: 1px solid $color-700;
      }
    }
  }

  .cell {
    padding: 8px;
  }

  .button-clipboard,
  .button-edit,
  .button-remove {
    cursor: pointer;
    background-color: transparent;
    color: $color-base;
    padding: 5px;
    border: 1px solid transparent;

    .image-clipboard,
    .image-remove {
      width: 20px;
    }
  }

  &-actions {
    text-align: end;
    width: 15%;

    > *:not(:last-child) {
      margin-right: 8px;
    }

    max-height: 20px;
  }

  &-paginate {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid $color-700;
    border-bottom: 2px solid $color-700;
    width: 100%;
    height: 5vh;
  }
}
</style>