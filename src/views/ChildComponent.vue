<script setup>
defineProps({
    numbers:Object
})
</script>

<template>
    {{ numbers }}
    <h1>This is child component</h1>
</template>