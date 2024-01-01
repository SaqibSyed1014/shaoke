<script setup>

import BaseButton from "@/@core/components/BaseButton.vue";
</script>

<template>
  <form class="grid md:grid-cols-2 gap-5">
    <div class="col-span-2">
      <label>Purpose</label>
      <input type="text" placeholder="Choose">
    </div>
    <div class="col-span-2 md:col-span-1">
      <label>Name</label>
      <input type="text" placeholder="Alex">
    </div>
    <div class="col-span-2 md:col-span-1">
      <label>Phone</label>
      <input type="text" placeholder="+1 840 841 25 69">
    </div>
    <div class="col-span-2 md:col-span-1">
      <label>Email</label>
      <input type="email" placeholder="abc@gmail.com">
    </div>
    <div class="col-span-2 md:col-span-1">
      <label>Subject</label>
      <input type="text" placeholder="Business">
    </div>
    <div class="col-span-2">
      <label>Message</label>
      <textarea type="text" rows="5" placeholder="How can  we help you" />
    </div>
    <div class="col-span-2">
      <BaseButton>Get in touch</BaseButton>
    </div>
  </form>
</template>

<style scoped>

</style>
