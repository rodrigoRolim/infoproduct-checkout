<template>
  <form class="checkout">
    <fieldset class="fields">
      <legend class="legend">{{ currentStepName }}</legend>
      <personal-datas-step
        class="step personal-datas"
        v-show="currentStep === PERSONAL_DATAS_STEP"
      />
      <payment-datas-step 
        class="step payment-datas"
        v-show="currentStep === PAYMENT_DATAS_STEP"
      />
      <div class="actions">
        <button 
          class="button"
          @click.stop.prevent="goNextStep"
        >
          {{ currentButtonLabel }}
        </button>
      </div>
    </fieldset>
  </form>
</template>

<script setup>
import PersonalDatasStep from '@/modules/checkout/components/PersonalDatasStep.vue';
import PaymentDatasStep from '@/modules/checkout/components/PaymentDatasStep.vue';

import { ref } from 'vue';

const PERSONAL_DATAS_STEP = 0;
const PAYMENT_DATAS_STEP = 1;
const PERSONAL_DATAS_STEP_NAME = 'Dados Pessoais'
const PAYMENT_DATAS_STEP_NAME = 'Dados de Pagamento'
const CONTINUE_BUTTON = 'continuar'
const FINISH_BUTTON = 'finalizar'

const steps = Object.freeze([PERSONAL_DATAS_STEP, PAYMENT_DATAS_STEP])
const stepNames = Object.freeze([PERSONAL_DATAS_STEP_NAME, PAYMENT_DATAS_STEP_NAME])
const currentStepIndex = ref(0)
const currentStep = ref(PERSONAL_DATAS_STEP)
const currentStepName = ref(PERSONAL_DATAS_STEP_NAME)
const stepLength = steps.length

const buttonLabels = Object.freeze([CONTINUE_BUTTON, FINISH_BUTTON])
const currentButtonLabel = ref('continuar')

function goNextStep() {
  if (currentStepIndex.value + 1 === stepLength) return

  const nextIndex = ++currentStepIndex.value

  currentStep.value = steps[nextIndex]
  currentStepName.value = stepNames[nextIndex]

  currentButtonLabel.value = buttonLabels[nextIndex]
}
</script>

<style lang="scss">
.checkout {
  min-height: 100dvh;
  width: 100%;
  padding: 1rem;

  .fields {
    display: flex;
    flex-direction: column;
    gap: 100px;
    border: unset;

    .legend {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: $color-950;
    }

    .actions {
      display: flex;
    }

    .button {
      flex: 1;
      font-size: 1rem;
      font-weight: 600;
      border: 1px solid $color-600;
      background-color: $color-600;
      color: $color-950;
      height: 48px;
      border-radius: 8px;

      &:hover {
        border: 1px solid $color-700;
        background-color: $color-700;
      }

      &:active {
        border: 1px solid $color-800;
        background-color: $color-800;
      }

      &:disabled {
        border: 1px solid $color-100;
        background-color: $color-100;
        color: $color-400;
      }
    }
  }
}
</style>
