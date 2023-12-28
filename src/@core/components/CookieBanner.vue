<script setup>
import {ref} from "vue";
import BaseButton from "@/@core/components/BaseButton.vue";

const showBanner = ref(true)
</script>

<template>
  <div v-if="showBanner" class="fixed bottom-0 left-0 w-full bg-white drop-shadow-2xl">
    <div class="container py-4 md:py-8 xl:py-12">
      <div class="grid grid-cols-12 justify-between items-center gap-6 md:gap-0">
        <div class="col-span-12 md:col-span-7">
          <div class="flex items-center gap-5">
            <img src="/images/cookies.png" alt="Cookies" class="shrink-0">
            <p class="pr-10">
              Our website use cookies. By continuing navigating, we assume your permission to deploy cookies as detailed
              in our Privacy Policy.
            </p>
          </div>
        </div>
        <div class="col-span-12 md:col-span-5">
          <div class="flex justify-end items-center gap-12">
            <div class="flex gap-3">
              <BaseButton>
                <span class="icon-cookie text-white"></span>Accept cookies
              </BaseButton>
              <BaseButton outlined>Decline</BaseButton>
            </div>
            <span @click="showBanner = false" class="icon-x text-3xl text-[#272D4B] cursor-pointer"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
