<script setup>
import ContactForm from "@/views/ContactUs/components/ContactForm.vue";
</script>

<template>
  <header class="contact-us-section py-32 pt-40">
    <div class="container">
      <div class="text-center pb-32">
        <h2>Contact</h2>
      </div>

      <div class="grid grid-cols-2 gap-10">
        <div>
          <label>Contact Us</label>
          <h2 class="pb-5 pt-3.5">
            Have Questions? Get in Touch!
          </h2>
          <p>
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
          <div>
            <p>14 Rue de la Belle Borne Bat1, Porte 13 (Cargo 8) Tremblay-en-France, France</p>
            <p>+1 840 841 25 69</p>
            <p>info@shaoke.com</p>
          </div>
        </div>
        <div class="contact-form">
          <ContactForm />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
