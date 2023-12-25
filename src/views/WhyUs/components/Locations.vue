<script setup>
import SectionTitle from "@/@core/components/SectionTitle.vue";

const locationsList = [
  {
    title: 'Single entry',
    description: 'at any port & delivery across Europe',
    icon: 'package-dropping'
  },
  {
    title: 'Daily access',
    description: 'to the core distribution centers',
    icon: 'delivery-distribution'
  },
  {
    title: 'More flexibility',
    description: 'to cut your cost down',
    icon: 'package-flexibility'
  }
]
</script>

<template>
  <section class="brand-locations bg-[#F8F8F8] relative py-28">
    <div class="container">
      <div class="bg-curve absolute top-1/2 left-1/2 transform scale-[1.75] -translate-x-1/2 -translate-y-1/2">
        <img src="/images/bg-curve.png" alt="Background Curve">
      </div>
      <SectionTitle
          sub-heading="Our whereabouts"
          heading="Various Locations"
      />

      <div class="location-cards-wrapper relative">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <template v-for="(item, i) in locationsList" :key="i">
            <div class="flex flex-col justify-center text-center bg-white h-[350px]">
              <div class="px-12">
                <span
                    class="text-primary text-8xl"
                    :class="[`icon-${item.icon}`]"
                />
                <h3 class="mt-5">
                  {{ item.title }}
                </h3>
                <p class="capitalize pt-3.5">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>

</style>
