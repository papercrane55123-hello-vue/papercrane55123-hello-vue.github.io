<script setup>
// hello world
import { ref } from 'vue'
const message = ref({name: "MIN", age:28})
const name = "KIN"
</script>

<template>
 <h1>{{ message }}</h1>
</template>


