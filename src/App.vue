<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

import { reactive } from 'vue';


const customer = reactive({
    name: '',
    phone: '',
});
</script>

<template>
<Header></Header>
name: {{ customer.name }}
Phone: {{ customer.phone }}

Name: <input v-model="customer.name" type="text">
Phone: <input v-model="customer.phone" type="text">
<RouterView />
<Footer></Footer>
</template>