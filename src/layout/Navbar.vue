<script setup>

</script>
<template>
  <div class="tw-flex tw-z-40 tw-sticky tw-top-0 tw-left-0 tw-flex-col tw-w-full">
    <div
    class="navbar   tw-w-full tw-p-1 tw-flex tw-justify-center tw-items-center"
  >
    <div
      class="nav_in  tw-flex tw-w-3/4 tw-p-3 tw-justify-between tw-items-center"
    >
      <div class="logo tw-w-1/5 tw-p-1">
        <span class="tw-text-4xl tw-font-bold tw-text-white tw-font-mono">FRUITABLES</span>
      </div>
      <ul
        class="tw-flex tw-gap-6 tw-font-semibold tw-text-gray-900 tw-text-lg tw-items-center"
      >
        <RouterLink
          class="home tw-py-1 tw-text-center tw-px-4 tw-rounded-3xl tw-text-white"
          to="/"
          >Home</RouterLink
        >
        <li class="tw-py-1 tw-text-center tw-px-4 tw-rounded-3xl tw-text-white">
          Shop
        </li>
        <li class="tw-py-1 tw-text-center tw-px-4 tw-rounded-3xl tw-text-white">
         Shop Detail
        </li>
        <li class="tw-py-1 tw-text-center tw-px-4 tw-rounded-3xl tw-text-white">
         Pages
        </li>
        <li class="tw-py-1 tw-text-center tw-px-4 tw-rounded-3xl tw-text-white">
         Contact
        </li>
       
      </ul>
      <div class="tw-flex tw-p-1  tw-gap-5">
        <i class="ri-shopping-bag-fill icon tw-text-4xl"></i>
      <i class="ri-search-line icon tw-text-3xl"></i>
      <i class="ri-account-circle-fill icon tw-text-4xl"></i>
      </div>
    </div>
   
  </div>
 
  </div>
</template>
<style>
.navbar {
  background-color: #8bc34a;
}
.icon{
    color: #fff;
}
ul li,
.home  {
  background-color: #FFA726;
}

</style>
