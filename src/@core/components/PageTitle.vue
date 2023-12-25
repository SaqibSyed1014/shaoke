<script setup>
import { useRoute } from "vue-router";

const route = useRoute()
</script>

<template>
  <div class="text-center pb-32">
    <h2>{{ route.meta?.title }}</h2>
  </div>
</template>

<style scoped>

</style>
