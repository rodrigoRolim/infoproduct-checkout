<template>
  <div 
    class="ip-select"
    :class="$attrs?.class"
    role="combobox" 
    aria-expanded="false" 
    aria-haspopup="listbox" 
    :aria-controls="$attrs?.ariaControls" 
    :aria-labelledby="$attrs?.ariaLabelledby"
  >
    <span :id="$attrs?.ariaLabelledby" class="label">{{ label }}</span>
    <input
      v-model="selected"
      spellcheck="false"
      type="text" 
      class="input" 
      tabindex="0" 
      role="button"
      ref="inputRef"
      aria-describedby=""
      @click="settingListboxElement"
      @input="leachOptionsByInput"
      @keydown.enter="confirmOption"
      @keyup="reopenOptionsListWhenTypeAnyKeyNoEnter($event.key)"
    />
    <ip-hint
      class="hint"
      :hidden="hint === ''"
      :id="describedby"
      :content="hint"
    />
    <ul
      v-show="showOptions"
      :id="$attrs?.ariaControls"
      ref="optionListRef"
      class="options"
      :class="listBoxOrientation"
      role="listbox"
    >
      <li
        v-for="option in localOptions"
        class="option" 
        role="option" 
        aria-selected="false" 
        tabindex="-1"
        @click="selectOption(option[optionValue])"
      >
        {{ option[optionKey] }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, nextTick, ref, shallowRef } from 'vue';

const POSSIBLE_ORIENTATIONS_FOR_LISTBOX = Object.freeze({
  down: 'down',
  up: 'up',
  modal: 'modal'
})

defineOptions({
  inheritAttrs: false
})

const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: []
  },
  optionValue: {
    type: String,
    default: 'value'
  },
  optionKey: {
    type: String,
    default: 'value'
  }
})

const selected = defineModel({
  type: String,
  default: '',
  required: true
})

const inputRef = ref(null)
const optionListRef = ref(null)
const showOptions = ref(false)
const listBoxOrientation = ref(POSSIBLE_ORIENTATIONS_FOR_LISTBOX.down)
const localOptions = shallowRef(props.options)

const hasOptions = computed(() => Boolean(localOptions.value.length))

function leachOptionsByInput(event) {
  const value = event.target.value
  localOptions.value = leachOptions(value)
}
function leachOptions(value) {
  return props.options.filter(option => option[props.optionValue].toLowerCase().includes(value.toLowerCase()))
}
function findOption(value) {
  return props.options.find(option => option[props.optionValue].toLowerCase().includes(value.toLowerCase()))
}

async function settingListboxElement() {
  toggleOptionList()

  await nextTick()

  listBoxOrientation.value = determineListboxOrientation()
  listenForOutsideClicks(showOptions.value)
}
function listenForOutsideClicks(isOptionsVisible) {
  if (isOptionsVisible) {
    document.addEventListener('click', hiddenListWhenClickOutside, true)
  }
}
function determineListboxOrientation() {
  const optionsListHeight = optionListRef.value.getBoundingClientRect().height
  const inputBoudingRectClient = inputRef.value.getBoundingClientRect()
  const inputHeight = inputBoudingRectClient.height
  const inputBottomYPosition = inputBoudingRectClient.top + inputHeight
  const documentHeight = document.body.offsetHeight

  if (!showOptions.value || !hasOptions.value) return POSSIBLE_ORIENTATIONS_FOR_LISTBOX.down

  return documentHeight - inputBottomYPosition > optionsListHeight 
    ? POSSIBLE_ORIENTATIONS_FOR_LISTBOX.down 
    : POSSIBLE_ORIENTATIONS_FOR_LISTBOX.up
}
function selectOption(value) {
  selected.value = value
  closeOptionList()
}
function toggleOptionList() {
  showOptions.value = !showOptions.value
}
function closeOptionList() {
  if (showOptions.value)
    showOptions.value = false
}
function openOptionList() {
  if (!showOptions.value)
    showOptions.value = true
}
function reopenOptionsListWhenTypeAnyKeyNoEnter(key) {
  if (key !== 'Enter')
    openOptionList()
}
function confirmOption(event) {
  const foundOption = findOption(event.target.value) ?? {}
  selected.value = foundOption[props.optionValue] ?? ''
  closeOptionList()
}
function hiddenListWhenClickOutside(event) {
  const isClickInside = inputRef.value.contains(event.target)

  if (!isClickInside) {
    closeOptionList()
    document.removeEventListener('click', hiddenListWhenClickOutside, true)
  }
}

</script>

<style lang="scss">
$container-border-width: 2px;
$border-radius: 8px;

.ip-select {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: $container-border-width solid $color-700;
  border-radius: $border-radius;
  height: $input-components-height;

  .label {
    font-size: 14px;
    font-weight: 600;
    color: $color-950;
    position: absolute;
    left: 0.5rem;
    top: 2px;
  }

  .input {
    font-size: 1rem;
    font-weight: 500;
    color: $color-950;
    border: unset;
    outline: unset;
    border-radius: $border-radius;
    width: 100%;
    height: 25px;
    padding: 0 0.5rem;
    margin-top: 14px;

    &::placeholder {
      color: $color-950;
      opacity: 0.5;
    }
  }

  .selected {
    margin-left: 8px;
    margin-top: 10px;
  }

  .options {
    position: absolute;
    z-index: 2;
    padding-top: 16px;
    background-color: white;
    width: 100%;
    max-height: 350px;
    overflow: auto;
    
    &.up {
      bottom: calc(100% + $container-border-width);
    }
    
    &.down {
      top: calc(100% + $container-border-width);
    }

    .option {
      padding: 16px 16px;
      user-select: none;
      color: $color-950;
      font-weight: 600;
      cursor: pointer;

      :hover {
        background-color: $color-100;
      }

      :active {
        background-color: $color-200;
      }
    }
  }
}
</style>
