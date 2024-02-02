<script setup>
import { ref } from 'vue'

let show = ref(true)
const list = ref([1,2,3])

function landering(){
	console.log(show.value)
	if(show.value === true){
		show.value = false
	} else { show.value = true }
}
function addList(){
	let i = list.value.length + 1 
	list.value.push(i)
}
function deleteList(){
	list.value.splice(list.value.length-1)
}
function reverseList(){
	list.value.reverse()
}
</script> 

<template>
	<button @click.prevent="landering">List 랜더링 ON/Off </button>
	<button @click.prevent="addList">List 추가 </button>
	<button @click.prevent="deleteList">List 제거 </button>
	<button @click.prevent="reverseList">List 뒤집기</button>
	
	<ul v-if="list.length > 0 && show">
		<li v-for="item of list">{{ item }} </li>
	</ul>
	<p v-else-if="list.length > 0">List is not empty, but hidden</p>
	<p v-else>List is empty</p>
</template>
