<script setup>
import PageTitle from "@/@core/components/PageTitle.vue";

const cases = [
  {
    name: 'Shipkoo',
    description: 'Shipkoo is the one-stop solution provider',
    image: '/images/cases/containers.png'
  },
  {
    name: 'Shipkoo',
    description: 'Shipkoo is the one-stop solution provider',
    image: '/images/cases/containers-01.png'
  },
  {
    name: 'Shipkoo',
    description: 'Shipkoo is the one-stop solution provider',
    image: '/images/cases/containers-02.png'
  },
  {
    name: 'Shipkoo',
    description: 'Shipkoo is the one-stop solution provider',
    image: '/images/cases/containers-03.png'
  },
  {
    name: 'Shipkoo',
    description: 'Shipkoo is the one-stop solution provider',
    image: '/images/cases/containers-04.png'
  },
  {
    name: 'Shipkoo',
    description: 'Shipkoo is the one-stop solution provider',
    image: '/images/cases/containers-05.png'
  },
  {
    name: 'Shipkoo',
    description: 'Shipkoo is the one-stop solution provider',
    image: '/images/cases/truck-02.png'
  },
  {
    name: 'Shipkoo',
    description: 'Shipkoo is the one-stop solution provider',
    image: '/images/cases/trucks.png'
  },
  {
    name: 'Shipkoo',
    description: 'Shipkoo is the one-stop solution provider',
    image: '/images/cases/truck.png'
  },
]

const casesCategories = [
    'Custom',
    'Freight Forwarding',
    'Last-mile Delivery',
    'Contract Logistics'
]
</script>

<template>
  <section class="cases-list-view pb-32 pt-40">
    <div class="container">
      <PageTitle />

      <div class="cases-filtration px-5">
        <div class="flex justify-center items-center gap-6 border-b border-[#DBDBDB] pb-5 mb-10">
          <span class="text-lg font-medium cursor-pointer active">All</span>
          <template v-for="item in casesCategories" :key="item">
            <div class="text-lg font-medium cursor-pointer">{{ item }}</div>
          </template>
          <div class="w-fit">
            <input type="search" placeholder="Search">
          </div>
        </div>
      </div>
      <div class="cases-list grid grid-cols-3 gap-y-14 gap-x-8">
        <template v-for="(item, i) in cases" :key="i">
          <div class="blog-card flex flex-col cursor-pointer">
            <div class="blog-thumbnail">
              <img :src="item.image" alt="Blog Image">
            </div>
            <h3 class=" pt-7 pb-3">
              {{ item.name }}
            </h3>
            <p class="text-lg">
              {{ item.description }}
            </p>
            <hr class="border-t border-[#DBDBDB] my-3">
            <div class="flex items-center gap-5 cursor-pointer w-fit">
              <div class="flex justify-center items-center cursor-pointer rounded-full bg-primary text-white w-12 h-12 shrink-0">
                <span class="icon-right-long-arrow rotate-[325deg] text-lg"></span>
              </div>
              <span class="font-medium">View Details</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cases-filtration .active{
  @apply bg-primary text-white rounded py-3 px-4
}
</style>
