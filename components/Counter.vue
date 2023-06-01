<script setup>
const color = useColor()
const counter = useCounter()
</script>

<template>
    <p>Current color: {{ color }}</p>

    <p>Counter: {{ counter }}</p>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
</template>
