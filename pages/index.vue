<!-- -https://icones.js.org
-https://vueuse.org/ -->

<template>
    <div>home index page</div>
    <Alert />
    <Profile />
    <IconsBell />
</template>

<script setup>
const { sayHello } = useUtils();
sayHello();
</script>