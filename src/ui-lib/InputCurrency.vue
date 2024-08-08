<template>
 <label class="input-currency">
    <small class="label">{{ label }}</small>
    <input
      v-model="currencyValue"
      spellcheck="false"
      type="text"
      inputmode="numeric"
      class="input"
      :aria-describedby="$attrs.ariaDescribedby"
      :aria-labelledby="$attrs.ariaLabelledby"
      :placeholder="placeholder"
      :autocomplete="$attrs.autocomplete"
    />
    <ip-hint
      class="hint"
      :hidden="hint === ''"
      :id="$attrs.ariaDescribedby"
      :content="hint"
    />
  </label>
</template>
<script setup>
const mapCurrencyCodeToSymbol = Object.freeze({
  'BRL': 'R$',
  'USA': '$'
})
// 0: thousand separator, 1: decimal separator and 2: number of digits after decimal point
const mapCurrencyCodeToSeparators = Object.freeze({
  'BRL': ['.', ',', 2], 
  'USD': [',', '.', 2]
})

defineProps({
  hint: {
    type: String,
    default: ''
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  }
})

const currencyValue = defineModel({
  type: String,
  required: true,
  set(newCurrencyValue) {

  }
})

function removeNonNumerics(inputValue) {
  return inputValue.replace(/[^0-9.-]+/g, '')
}
function prependCurrencySymbol(inputValue, currencyCode = 'BRL') {
  return `${mapCurrencyCodeToSymbol[currencyCode]} ${inputValue}`
}
function formatNumberToCurrency(inputValue, currencyCode = 'BRL') {
  const digitsAfterDecimalPoint = mapCurrencyCodeToSeparators[currencyCode][2]
  const decimalSeparator = mapCurrencyCodeToSeparators[currencyCode][1]

  inputValue.splice(0, digitsAfterDecimalPoint) + decimalSeparator + inputValue.slice(digitsAfterDecimalPoint)
}
</script>
<style lang="scss">
.input-currency {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  min-height: $input-components-height;
  border: 2px solid $color-700;
  border-radius: 8px;

  .label {
    font-size: 14px;
    font-weight: 600;
    color: $color-950;
    margin-left: 8px;
  }

  .input {
    font-size: 1rem;
    font-weight: 500;
    color: $color-950;
    border: unset;
    outline: unset;
    border-radius: 8px;
    width: 100%;
    height: 25px;
    padding: 0 0.5rem;

    &::placeholder {
      color: $color-950;
      opacity: 0.5;
    }
  }

  .hint {
    margin-left: 0.5rem;
  }
}
</style>
