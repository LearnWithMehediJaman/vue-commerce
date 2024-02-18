<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { ref,  onMounted } from 'vue';
// const products = [
//     {
//         id: 1,
//         name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
//         price: '399.99',
//         image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//         id: 2,
//         name: 'Samsung Galaxy Watch 4 Classic 44mm, Silver',
//         price: '299.99',
//         image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//         id: 3,
//         name: 'Nokia Watch 5 44mm, Silver',
//         price: '499.99',
//         image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//         id: 4,
//         name: 'Nokia Watch 5 44mm, Silver',
//         price: '499.99',
//         image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//         id: 5,
//         name: 'Nokia Watch 5 44mm, Silver',
//         price: '499.99',
//         image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     },
//     {
//         id: 6,
//         name: 'Nokia Watch 5 44mm, Silver',
//         price: '499.99',
//         image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//     }
// ]

    const products = ref({});

    function getProducts() {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => products.value = data)
    }
    onMounted(() => {
        getProducts();
    })
</script>
<template>
    <div class="max-w-6xl mx-auto pt-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ProductCard v-for="product in products.products" :key="product.id" :product="product"></ProductCard>
        </div>
    </div>
</template>