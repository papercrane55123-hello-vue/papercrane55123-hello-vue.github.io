<!--
<script setup>
import {ref, onMounted} from 'vue'

// reactive state
const count = ref(3)

// functions that mutate state and trigger updates
function increment(){
 count.value = count.value + 1
}

// lifecycle hooks
onMounted (() => {
 console.log(`The initial count is ${count.value}. `
})
</script>

<template>
 <button @click="increment">Count is: {{count +1}}</button>
</template>
-->
<script setup>
import {ref, onMounted} from 'vue'
const count = ref({
	cnt: 0,
	name: "kim"
})
function increment() {
//count.value  = count.value + 1
count.value.cnt++
count.value.name = count.value.name.split('').reverse().join('')
}
onMounted(() => {
console.log(`The initial count is ${count.value}.`)
})

</script>
<template>
	<button @click="increment">Count is : {{count.cnt > 10 ? "크다" : "작다"}}, name: {{count.name}} </button>
</template>
<style scoped>
button {
font-weight: bold;
}
</style>

