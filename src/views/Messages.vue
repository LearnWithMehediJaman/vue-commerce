<script setup>
import { messages } from '@/data/messages.js';

</script>
<template>
    <h1>
        Messages
    </h1>
    <pre>
        {{ messages.list }}
    </pre>
</template>