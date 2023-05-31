<script setup>
// const route = useRoute();
// console.log(route.params.id)

const nuxtApp = useNuxtApp();

</script>

<template>
    <div>event id: {{ $route.params.id }}</div>
</template>
