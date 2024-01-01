<script setup>
import SectionTitle from "@/@core/components/SectionTitle.vue";

const items = [
  {
    text: 'Directly connected with Germany Customs system ATLAS',
    image: '/images/resources/truck.png'
  },
  {
    text: 'Partnerships with industry-leading companies',
    image: '/images/resources/ship.png'
  },
  {
    text: '90%+ word-of-mouth recommendations',
    image: '/images/resources/train.png'
  }
]
</script>

<template>
  <section class="brand-credibility py-24 sm:py-32">
    <div class="container">
      <SectionTitle
          sub-heading="trustworthy"
          heading="Verified Credibility"
      />

      <div class="services-wrapper">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <template v-for="(item, i) in items" :key="i">
            <div class="">
              <img :src="item.image" alt="Pictures" class="w-full h-full object-cover">
              <h3 class="text-lg sm:text-2xl -mt-24 sm:-mt-28 text-white w-[90%] pl-7">
                {{ item.text }}
              </h3>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

