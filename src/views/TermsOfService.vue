<script setup>
import { provide } from 'vue';
import PersonDetails from './PersonDetails.vue';
import About from './About.vue';
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    country: 'USA'
}

provide('person', person);
</script>

<template>
    <PersonDetails></PersonDetails>
    <About></About>
</template>