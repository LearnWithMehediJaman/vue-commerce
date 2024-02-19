<script setup>
import { inject } from 'vue';

const person = inject('person');
</script>

<template>

    Name: {{ person.name }} <br>
    Age: {{ person.age }} <br>
    City: {{ person.city }} <br>
    Country: {{ person.country }}
</template>