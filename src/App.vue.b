<script setup>
	import {ref} from 'vue'
	import country from "@/assets/country.json"
	const countries = ref(country)
function searchCode(){
	
}

</script>



<template>
	<li v-for = "ctr in countries" >	
		{{ ctr.Name }} - {{ ctr.Code }}
	</li>
</template>
