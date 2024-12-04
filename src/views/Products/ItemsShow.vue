<script setup>
import { ref, reactive } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();
import { globalInput } from "@/stores/global";
const global = globalInput()

import appleImg from '@/FruitablesAssets/asset 22.jpeg';
import bananaImg from '@/FruitablesAssets/asset 14.png';
import orangeImg from '@/FruitablesAssets/asset 17.jpeg';
import tomatoImg from '@/FruitablesAssets/asset 13.jpeg';
import spinachImg from '@/FruitablesAssets/asset 12.jpeg';
import broccoliImg from '@/FruitablesAssets/asset 10.jpeg';
import almondImg from '@/FruitablesAssets/asset 20.jpeg';
import cashewImg from '@/FruitablesAssets/asset 21.jpeg';
import walnutImg from '@/FruitablesAssets/asset 1.jpeg';


const Products = [
  // Fruits
  {
    id: "1",
    name: "Apple",
    category: "Fruit",
    details: "A sweet, edible fruit produced by an apple tree. Apples are high in fiber and vitamin C.",
    pricePerKg: '$150',
    image: appleImg
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruit",
    details: "A tropical fruit that's rich in potassium, making it great for energy and muscle health.",
    pricePerKg: 60,
    image: bananaImg,
  },
  {
    id: 3,
    name: "Orange",
    category: "Fruit",
    details: "A juicy tropical stone fruit, known for its sweetness and vibrant orange flesh.",
    pricePerKg: 200,
    image: orangeImg,
  },
  
  // Vegetables
  {
    id: 4,
    name: "Tomato",
    category: "Vegetable",
    details: "A tomato is red in colour and rich in protein, and it is almost used in ever dish.",
    pricePerKg: 50,
    image: tomatoImg
  },
  {
    id: 5,
    name: "Spinach",
    category: "Vegetable",
    details: "A leafy green vegetable that is a great source of iron and other vitamins.",
    pricePerKg: 40,
    image: spinachImg
  },
  {
    id: 6,
    name: "Broccoli",
    category: "Vegetable",
    details: "A green vegetable rich in vitamins and minerals, known for its high fiber content.",
    pricePerKg: 70,
    image: broccoliImg
  },
  // Nuts
  {
    id: 10,
    name: "Almond",
    category: "Nut",
    details: "A highly nutritious nut, rich in healthy fats, fiber, protein, magnesium, and vitamin E.",
    pricePerKg: 1200,
    image: almondImg
  },
  {
    id: 11,
    name: "Cashew",
    category: "Nut",
    details: "A creamy nut that is often used in cooking and snacks, high in healthy fats and minerals.",
    pricePerKg: 1000,
    image: cashewImg
  },
  {
    id: 12,
    name: "Walnut",
    category: "Nut",
    details: "A highly nutritious nut, known for being rich in antioxidants and omega-3 fatty acids.",
    pricePerKg: 1500,
    image: walnutImg
  }
];
// let Products = ref()

// async function fetchData(){
//   const api = 'https://api.escuelajs.co/api/v1/products'
//   try {
//     const resp = await fetch(api);
//     const data = await resp.json(); // Wait for the data
//     Products = data; // Assign the fetched data to Products
//     console.log('yeye', Products)
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchData()
console.log('here is global showDetail value before click',global.showDetail)
function changeShowDetail(id){
    global.idForDetail = id
    console.log('heelo')
    console.log('here is global showDetail value after click',global.showDetail)
}
</script>

<template>
    <div v-if="!route.params.uri" class="tw-w-full tw-flex  tw-p-1 tw-justify-center">
        <div class="img tw-w-10/12 tw-p-2 tw-flex tw-flex-wrap tw-gap-16">
          <div v-for="item in Products" :key="item.id" class="tw-w-1/5 tw-flex-col tw-overflow-hidden item_container tw-flex tw-justify-center tw-items-center tw-gap-2  tw-bg-white tw-rounded-xl">
            <img class="tw-rounded-tl-xl tw-rounded-tr-xl" :src="item.image " :alt="item.id">
            <span class="name tw-text-center tw-font-semibold tw-text-gray-700 tw-text-xl tw-block">{{ item.name }}</span>
            <span  class="name tw-text-center tw-text-gray-500 tw-block tw-cursor-pointer">{{item.details}}</span>
            <router-link :to="`home/${item.name}`"  class="tw-w-40 tw-text-center tw-rounded-md  tw-p-1  tw-text-white bg tw-bg-orange-400 tw-mb-3">See Details</router-link>
          </div>
        </div>
    </div>
   <router-view v-else/>
</template>
<style scoped>
    .item_container{
        border: 1px solid #ffa726;
    }
    .item_container img{
        transition: ease 0.2s;
    }
    .item_container img:hover{
        transition: ease 0.5s;
    transform: scale(1.05);
    }
</style>