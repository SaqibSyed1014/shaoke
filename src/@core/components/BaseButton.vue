<script setup>
import {computed} from "vue";

defineProps({

})

</script>

<template>
  <button
      class="bg-primary text-white rounded-[5px] text-base font-bold px-5 py-3"
  >
    <slot />
  </button>
</template>

<style scoped>
button{
  transition: all .3s ease-in;
}
button:hover{
  box-shadow: 0 3px 9px 1px theme('colors.primary');
  transform: translateY(-3px);
}
</style>
