<script setup>
// import DetailPage from './DetailPage.vue'
import { ref, reactive } from 'vue';
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


// let Products = reactive([])
// let newProducts = reactive([])
// async function fetchData(){
//   const api = 'https://api.escuelajs.co/api/v1/products'
//   try {
//     const resp = await fetch(api);
//     const data = await resp.json(); // Wait for the data
//     Products.value = data; // Assign the fetched data to Products
//     console.log('iam detailshow', Products.value)
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// fetchData()



const props = defineProps({
    uri:String,
    details:String,
    img:String
})


// function makeProductsArray(id ){
//     Products.forEach(element => {
//         if(element.id === id ){
//             newProducts.push(element)
//         }
//         console.log('ye ah new array', newProducts)
//         console.log('ye hai props.id', props.id)
//     });
// }
// makeProductsArray(props.id)


const Products = [
  // Fruits
  {
    id: 1,
    name: "Apple",
    category: "Fruit",
    details: "A sweet, edible fruit produced by an apple tree. Apples are high in fiber and vitamin C.",
    pricePerKg: 150,
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

// let itemName = ref('');
// let itemDetail = ref('');
// let itemImg = ref('');
// let itemId = ref(0)

// itemId = global.idForDetail

// Products.forEach(elem => {
//     if(elem.id === itemId)
//     {
//         itemName = elem.name;
//         itemDetail = elem.details;
//         itemImg = elem.image;
//     }
// })



</script>

<template>
    <div class="tw-w-3/4 detail_view h-screen tw-p-1 tw-flex">
        <div class="img tw-w-2/5 tw-flex tw-items-center tw-justify-center">
            <img class="tw-w-3/4 tw-h-3/5" src="" alt="">
        </div>
        <div class="content tw-w-1/2 tw-gap-5 tw-flex tw-flex-col tw-justify-center tw-items-center">
            <div class="name tw-text-5xl tw-font-bold">{{ props.uri }}</div>
            <div class="about tw-text-xl tw-font-semibold tw-w-4/5 tw-text-center"></div>
        </div>
    </div>
</template>
<style scoped>
    .name{
        color: #8bc34a;
    }
    .about{
        color: #ff5c16;
    }
    .detail_view{
        background-color: #fffaed;
    }
</style>