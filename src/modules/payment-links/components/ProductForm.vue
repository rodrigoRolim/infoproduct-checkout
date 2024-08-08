<template>
  <form class="create-product">
    <fieldset class="product-fields">
      <IpInputText
        class="input name"
        forProperty="product-name"
        label="Nome do produto"
        hint="sou uma mensagem de validação de entrada"
      />
      <IpSelect
        v-model="productDatas.category"
        label="Categoria do produto" 
        :options="productCategories"
        aria-controls="product-categories" 
        aria-labelledby="product-categories-label"
        aria-describedby="category-select-describe"
      />
      <InputCurrency
        v-model="productDatas.type"
        label="Tipo do produto" 
        :options="productTypes" 
        aria-labelledby="product-types-label"
        aria-describedby="type-select-describe"
      />
      <InputCurrency
        v-model="productDatas.currency"
        label="Moeda"
        aria-controls="product-currency" 
        aria-labelledby="product-currency-label"
        aria-describedby="currency-select-describe"
      />
      <IpInputText
        class="input price"
        forProperty="product-price"
        label="preço"
      />
      <IpInputText
        class="input validity"
        forProperty="product-validity"
        label="Validade do produto"
      />
      <IpSelect
        v-model="productDatas.accessLevel"
        label="Nível de acesso"
        aria-describedby="access-select-describe"
      />
      <IpTextarea
        class="input description"
        forProperty="product-description"
        label="Descrição do produto"
        name="description"
        id="description"
        rows="5"
      />
      <IpButton 
        text="confirmar"
      />
    </fieldset>
  </form>
</template>

<script setup>
import IpInputText from '@/ui-lib/IpInputText.vue'
import InputCurrency from '@/ui-lib/InputCurrency.vue';
import IpSelect from '@/ui-lib/IpSelect.vue';
import IpTextarea from '@/ui-lib/IpTextarea.vue';
import IpButton from '@/ui-lib/IpButton.vue';

import { shallowReactive } from 'vue';

const productDatas = shallowReactive({
  category: '',
  type: '',
  currency: '',
  accessLevel: ''
})
const productCategories= [
  {
    id: 0, value: 'Software e Aplicativos',
  },
  {
    id: 1, value: 'Serviços de Assinatura'
  },
  {
    id: 2, value: 'Serviços Online'
  },
  {
    id: 3, value: 'Conteúdos Digitais'
  },
  {
    id: 4, value: 'Licenças e Direitos'
  },
  {
    id: 5, value: 'Plataformas e Ferramentas SaaS (Software as a Service)'
  },
  {
    id: 6, value: 'Serviços Financeiros e Bancários'
  },
  {
    id: 7, value: 'Serviços em Nuvem'
  },
  {
    id: 9, value: 'Assinaturas de Software e Ferramentas'
  },
  {
    id: 10, value: 'Infraestrutura Digital'
  },
  {
    id: 11, value: 'Produtos Educacionais'
  },
  {
    id: 12, value: 'Serviços de Saúde e Bem-Estar'
  },
  {
    id: 13, value: 'Entretenimento e Lazer'
  }
]

const productTypes = [
  { id: 0, value: 'Sistemas Operacionais', category: 'Software e Aplicativos' },
  { id: 1, value: 'Aplicativos de Produtividade', category: 'Software e Aplicativos' },
  { id: 2, value: 'Jogos Digitais', category: 'Software e Aplicativos' },
  { id: 3, value: 'Aplicativos de Comunicação', category: 'Software e Aplicativos' },
  { id: 4, value: 'Ferramentas de Desenvolvimento', category: 'Software e Aplicativos' },

  { id: 5, value: 'Streaming de Vídeo', category: 'Serviços de Assinatura' },
  { id: 6, value: 'Streaming de Música', category: 'Serviços de Assinatura' },
  { id: 7, value: 'Assinaturas de Notícias', category: 'Serviços de Assinatura' },
  { id: 8, value: 'Revistas e Jornais Digitais', category: 'Serviços de Assinatura' },

  { id: 9, value: 'Consultoria', category: 'Serviços Online' },
  { id: 10, value: 'Desenvolvimento Web e Design Gráfico', category: 'Serviços Online' },
  { id: 11, value: 'Marketing Digital e SEO', category: 'Serviços Online' },
  { id: 12, value: 'E-learning e Cursos Online', category: 'Serviços Online' },
  { id: 13, value: 'Serviços de Tradução', category: 'Serviços Online' },

  { id: 14, value: 'E-books', category: 'Conteúdos Digitais' },
  { id: 15, value: 'Áudio Livros', category: 'Conteúdos Digitais' },
  { id: 16, value: 'Artigos e Publicações Científicas', category: 'Conteúdos Digitais' },
  { id: 17, value: 'Webinars e Vídeo Aulas', category: 'Conteúdos Digitais' },
  { id: 18, value: 'Podcasts', category: 'Conteúdos Digitais' },

  { id: 19, value: 'Licenças de Software', category: 'Licenças e Direitos' },
  { id: 20, value: 'Direitos Autorais e Patentes', category: 'Licenças e Direitos' },
  { id: 21, value: 'Licenças de Uso de Imagem e Vídeo', category: 'Licenças e Direitos' },

  { id: 22, value: 'Gestão de Projetos', category: 'Plataformas e Ferramentas SaaS (Software as a Service)' },
  { id: 23, value: 'Ferramentas de Colaboração', category: 'Plataformas e Ferramentas SaaS (Software as a Service)' },
  { id: 24, value: 'CRM (Customer Relationship Management)', category: 'Plataformas e Ferramentas SaaS (Software as a Service)' },
  { id: 25, value: 'ERP (Enterprise Resource Planning)', category: 'Plataformas e Ferramentas SaaS (Software as a Service)' },

  { id: 26, value: 'Serviços de Pagamento Online', category: 'Serviços Financeiros e Bancários' },
  { id: 27, value: 'Consultoria Financeira Online', category: 'Serviços Financeiros e Bancários' },
  { id: 28, value: 'Serviços de Contabilidade e Gestão Financeira', category: 'Serviços Financeiros e Bancários' },

  { id: 29, value: 'Armazenamento em Nuvem', category: 'Serviços em Nuvem' },
  { id: 30, value: 'Hospedagem de Sites', category: 'Serviços em Nuvem' },
  { id: 31, value: 'Serviços de Backup e Recuperação', category: 'Serviços em Nuvem' },

  { id: 32, value: 'Softwares de Design', category: 'Assinaturas de Software e Ferramentas' },
  { id: 33, value: 'Ferramentas de Análise de Dados', category: 'Assinaturas de Software e Ferramentas' },
  { id: 34, value: 'Ferramentas de Automação', category: 'Assinaturas de Software e Ferramentas' },

  { id: 35, value: 'Domínios de Internet', category: 'Infraestrutura Digital' },
  { id: 36, value: 'Certificados SSL', category: 'Infraestrutura Digital' },
  { id: 37, value: 'Serviços de DNS', category: 'Infraestrutura Digital' },

  { id: 38, value: 'Licenças de Software Educacional', category: 'Produtos Educacionais' },
  { id: 39, value: 'Ferramentas de Ensino a Distância', category: 'Produtos Educacionais' },
  { id: 40, value: 'Materiais Didáticos Digitais', category: 'Produtos Educacionais' },

  { id: 41, value: 'Telemedicina', category: 'Serviços de Saúde e Bem-Estar' },
  { id: 42, value: 'Consultoria Psicológica Online', category: 'Serviços de Saúde e Bem-Estar' },
  { id: 43, value: 'Programas de Fitness e Saúde', category: 'Serviços de Saúde e Bem-Estar' },

  { id: 44, value: 'Jogos e Aplicativos Móveis', category: 'Entretenimento e Lazer' },
  { id: 45, value: 'Serviços de Aluguel de Filmes Online', category: 'Entretenimento e Lazer' },
  { id: 46, value: 'Conteúdos Interativos (VR/AR)', category: 'Entretenimento e Lazer' },
]
</script>
<style lang="scss">
.create-product {
  width: 100%;

  .title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .product-fields {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 0;
    width: inherit;
  }
}
</style>