<script setup>
defineProps({
  outlined: Boolean
})

</script>

<template>
  <button
      class="flex justify-center items-center gap-2  rounded-[5px] text-base tracking-wider font-bold shrink-0 px-5 py-3"
      :class="[outlined ? 'bg-white border border-[#707376]' : 'bg-primary text-white']"
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
