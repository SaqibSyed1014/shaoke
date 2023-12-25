<script setup>
const solutions = [
  {
    heading: 'Savings',
    text: 'Savings of about 30-50%',
    icon: 'piggy-bank'
  },
  {
    heading: 'Quotation',
    text: 'Market-low quotation',
    icon: 'styled-newspaper'
  },
  {
    heading: 'Options',
    text: 'Multiple options to suit your needs',
    icon: 'distributions'
  }
]
</script>

<template>
  <section class="brand-solutions bg-primary mb-40">
    <div class="container">
      <div class="flex">
        <div class="flex flex-col justify-center text-white py-16">
          <label class="text-inherit">reasonable</label>
          <h2 class="text-inherit pt-4">
            Economical Solutions
          </h2>
        </div>

        <div class="grid grid-cols-3 gap-3.5">
          <template v-for="(item, i) in solutions" :key="i">
            <div class="flex flex-col justify-center -my-10 z-10 !h-96 bg-white px-5 shadow-[-40px_100px_70px_0px_rgba(121,121,121,0.05)]">
              <span
                  :class="[`icon-${item.icon}`]"
                  class="text-primary text-8xl -ml-2"
              ></span>
              <h3 class="pb-5 pt-2">
                {{ item.heading }}
              </h3>
              <p>
                {{ item.text }}
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
