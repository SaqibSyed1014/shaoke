<script setup>
import NavBar from '@/layouts/Default/components/NavBar.vue'
import Footer from '@/layouts/Default/components/Footer.vue'
import CookieBanner from "@/@core/components/CookieBanner.vue";
</script>

<template>
  <NavBar />
  <slot />
  <Footer />
  <CookieBanner />
</template>

