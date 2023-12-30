<script setup>
import {ref} from 'vue'
import NavBar from '@/layouts/Default/components/NavBar.vue'
import Footer from '@/layouts/Default/components/Footer.vue'
import CookieBanner from "@/@core/components/CookieBanner.vue";
import SideBar from "@/layouts/Default/components/SideBar.vue";

const isSideBarOpen = ref(false)

document.cookie = ''
</script>

<template>
  <NavBar @toggle-sidebar="(val) => isSideBarOpen = val" />
  <slot />
  <Footer />
  <CookieBanner />
  <SideBar
      :is-expanded="isSideBarOpen"
      @toggle-sidebar="(val) => isSideBarOpen = val"
  />
</template>

