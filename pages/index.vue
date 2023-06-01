<!-- -https://icones.js.org
-https://vueuse.org/ -->

<template>
    <div>home index page</div>
    <Alert />
    <Profile />
    <IconsBell />
    <Counter />
</template>

<script setup>
//composables
const { sayHello } = useUtils();
sayHello();

//plugin
const { $hello } = useNuxtApp()
$hello("world from plugins")
</script>