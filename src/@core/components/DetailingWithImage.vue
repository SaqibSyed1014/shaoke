<script setup>
defineProps({
  content: Object,
  reverse: Boolean
})
</script>

<template>
  <div class="grid md:grid-cols-2 gap-14 pb-14 last:pb-0">
    <div
        class="client-details border-r border-[#DBDBDB]"
        :class="[reverse ? 'order-1 md:order-2' : 'order-1']"
    >
      <div class="flex flex-col justify-center border-b border-[#DBDBDB] py-10 md:pr-10 pr-3">
        <h2 class="pb-6">{{ content.name }}</h2>
        <template v-for="(item, i) in content.details" :key="i">
          <h4 v-if="item.heading" class="pb-3.5">
            {{ item.heading }}
          </h4>
          <p v-if="item.text" class="pb-6 last:pb-0">
            {{ item.text }}
          </p>
        </template>
      </div>
      <div class="view-more-group flex items-center gap-5 py-5">
        <div class="flex justify-center items-center cursor-pointer rounded-full bg-primary text-2xl text-white w-14 h-14 shrink-0">
          +
        </div>
        <div class="flex flex-col">
          <span>View More</span>
          <span>About {{ content.name }}</span>
        </div>
      </div>
    </div>
    <div
        class="client-logo-wrapper shrink-0"
        :class="[reverse ? 'order-2 md:order-1' : 'order-2']"
    >
      <img :src="content.image" :alt="content.name" class="mx-auto h-full object-contain">
    </div>
  </div>
</template>

<style scoped>
.view-more-group{
  position: relative;
}
.view-more-group:after{
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  background: theme('colors.primary');
  position: absolute;
  right: -8px;
  top: -8px;
  border-radius: 50%;
}
</style>

