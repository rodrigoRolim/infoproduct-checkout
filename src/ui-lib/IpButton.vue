<template>
 <button class="ip-button">
  {{ text }}
 </button> 
</template>
<script setup>
defineProps({
  text: {
    type: String,
    required: true,
    default: ''
  }
})
</script>
<style lang="scss">
.ip-button {
  display: flex;
  justify-content: center;

  padding: 14px 20px;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid transparent;
  background-color: $color-950;
  color: $color-base;
  width: 100%;
}
</style>

<!-- 
button.small {
    width: 90px; /* Small width */
    height: 32px; /* Small height */
    padding: 5px 10px; /* Small padding */
    font-size: 13px; /* Small font size */
    border-radius: 5px; /* Rounded corners */
    background-color: #007BFF; /* Background color */
    color: white; /* Text color */
    border: none; /* Remove default border */
    cursor: pointer; /* Pointer cursor on hover */
}

button.medium {
    width: 135px; /* Medium width */
    height: 42px; /* Medium height */
    padding: 10px 20px; /* Medium padding */
    font-size: 15px; /* Medium font size */
    border-radius: 5px; /* Rounded corners */
    background-color: #007BFF; /* Background color */
    color: white; /* Text color */
    border: none; /* Remove default border */
    cursor: pointer; /* Pointer cursor on hover */
}

button.large {
    width: 180px; /* Large width */
    height: 55px; /* Large height */
    padding: 15px 25px; /* Large padding */
    font-size: 17px; /* Large font size */
    border-radius: 5px; /* Rounded corners */
    background-color: #007BFF; /* Background color */
    color: white; /* Text color */
    border: none; /* Remove default border */
    cursor: pointer; /* Pointer cursor on hover */
}

button.small:hover,
button.medium:hover,
button.large:hover {
    background-color: #0056b3; /* Darker background on hover */
}
-->