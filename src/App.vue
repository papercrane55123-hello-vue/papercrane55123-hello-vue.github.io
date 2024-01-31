<script setup>
	import {ref} from 'vue'
	import category from "@/assets/category.json"
	const [one, two, three, four] = category
	const categories = [one, two, three, four]
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
