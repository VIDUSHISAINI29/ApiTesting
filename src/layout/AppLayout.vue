<script setup>
import navbar from "@/layout/Navbar.vue";
import ItemsShow from '@/views/Products/ItemsShow.vue'
</script>

<template>
  <div class="tw-w-full tw-flex tw-flex-col tw-relative">
    <navbar />

    <div class="tw-flex tw-w-full tw-flex-col">
      
      <ItemsShow />
    </div>

  </div>
</template>

<style scoped>
/* .routed{
      height: 86vh;
   } */
</style>
