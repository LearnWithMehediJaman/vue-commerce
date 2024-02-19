<script setup>
import ProductCard from '@/components/ProductCard.vue';
import { ref, onMounted } from 'vue';

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