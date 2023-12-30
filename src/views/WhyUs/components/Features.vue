<script setup>
import PageTitle from "@/@core/components/PageTitle.vue";
</script>

<template>
  <section class="brand-features pb-24 sm:pb-32 pt-40">
    <div class="container">
      <PageTitle />

      <div class="grid md:grid-cols-2 gap-10 md:gap-20 mb-14">
        <div>
          <label>Local</label>
          <h2 class="py-2 lg:py-3.5">Local Expert</h2>
          <ul>
            <li>A wealth of local expertise with years of local operation</li>
            <li>Culturally sensitive</li>
            <li>Offices in Netherland, UK, Germany, and Shenzhen, China.</li>
          </ul>
        </div>
        <div>
          <div class="relative">
            <img src="/images/features/trains.png" alt="Trains">
            <div class="hidden sm:flex absolute bottom-5 lg:bottom-8 left-0  md:-left-38 gap-5">
              <div class="bg-primary text-white py-3 lg:py-6 pl-5 lg:pl-9 pr-12 lg:pr-20 shrink-0">
                <small>Orders</small>
                <h2 class="text-3xl text-inherit">120M</h2>
                <small>completed last year.</small>
              </div>
              <div class="bg-white text-primary py-3 lg:py-6 pl-5 lg:pl-9 pr-12 lg:pr-20 shrink-0">
                <small>Monthly</small>
                <h2 class="text-3xl text-inherit">80+</h2>
                <small>Trucks deliver the order.</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-10 md:gap-20">
        <div class="order-2 md:order-1">
          <div class="relative">
            <img src="/images/features/plane-cargo.png" alt="Plane" class="w-full">
            <div class="hidden sm:flex absolute bottom-5 lg:bottom-8 right-0 md:-right-38 gap-5">
              <div class="bg-white text-primary py-3 lg:py-6 pl-5 lg:pl-9 pr-12 lg:pr-20 shrink-0">
                <small>Monthly</small>
                <h2 class="text-3xl text-inherit">318+</h2>
                <small>Boeing 747 processed.</small>
              </div>
              <div class="bg-primary text-white py-3 lg:py-6 pl-5 lg:pl-9 pr-12 lg:pr-20 shrink-0">
                <small>Orders</small>
                <h2 class="text-3xl text-inherit">120M</h2>
                <small>completed last year.</small>
              </div>
            </div>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <label>Professional</label>
          <h2 class="py-2 lg:py-3.5">Professional Expert</h2>
          <ul>
            <li>Always have a solution</li>
            <li>Care-free service to leave you focus on your core business</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
ul li{
  @apply relative pl-9 md:pl-10
}
ul li:before{
  @apply content-[''] block w-3.5 h-3.5 bg-primary absolute left-0 top-1 md:top-1.5 rounded-full
}
</style>
