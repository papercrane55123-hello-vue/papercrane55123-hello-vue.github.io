<script setup>
	import {ref} from 'vue'
	import country from "@/assets/country.json"
	const countries = ref(country)
function searchCode(ctr){
	const b = 'BO'
	if(ctr.Code === b){
	return ctr.Name
	}else{
	return null 
	}
}
</script>

<template>
	<ul v-for = "ctr in countries" >	
	<span>{{searchCode(ctr)}}</span>
	</ul>
</template>
