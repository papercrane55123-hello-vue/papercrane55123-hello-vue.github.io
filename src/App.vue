<script setup>
	import {ref} from 'vue'
	import category from "@/assets/category.json"
	const [...rest] = category
	const categories = [...rest] 
	const parentMessage = ref('Parent')
	const items = ref([{ message: 'Foo', name: 'min' }, {message: 'Bar'}])
</script>

<template>
	<li v-for = "(item, index) in items">
		{{ item.name }} - {{ index }} - {{ item.message }}
	</li>

	<li v-for = "(ctr) in categories">
		{{ ctr.name }} - {{ ctr.code }}
	</li>
</template>
