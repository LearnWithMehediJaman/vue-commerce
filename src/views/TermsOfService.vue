<script setup>
    import ChildComponent from './ChildComponent.vue';
    import ChildComponent2 from './ChildComonent2.vue';
    const numbers = [
        1,
        2,
        3,
        4,
        5,
    ];
</script>
<template>
    <ChildComponent :numbers="numbers"></ChildComponent>
    <ChildComponent2 :numbers="numbers"></ChildComponent2>
</template>