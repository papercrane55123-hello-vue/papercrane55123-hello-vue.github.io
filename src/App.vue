<script setup>
	import {ref} from 'vue'
	const parentMessage = ref('Parent')
	const items = ref([{ message: 'Foo', name: 'min' }, {message: 'Bar'}])
</script>

<template>
	<li v-for = "(item, index) in items">
		{{ item.name }} - {{ index }} - {{ item.message }}
	</li>
</template>
