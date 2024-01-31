<script setup>
	import {ref} from 'vue'
	import country from "@/assets/country.json"
	const [...rest] = country
	const countries = ref([...rest])
</script>

<template>
	<li v-for = "ctr in countries">
		{{ ctr.Name }} - {{ ctr.Code }}
	</li>
</template>
