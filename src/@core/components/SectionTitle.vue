<script setup>
defineProps({
  subHeading: String,
  heading: String
})
</script>

<template>
  <div class="text-center pb-14">
    <label>
      {{ subHeading }}
    </label>
    <h2 class="pt-3.5">
      {{ heading }}
    </h2>
  </div>
</template>
