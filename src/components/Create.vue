<template>
	<div class="create">
		<input v-model="todoInput"
			id="todoInput"
  			placeholder="What's on your list?">
		<div @click="onCreate">Create</div>
	</div>
</template>

<script>
export default {
	name: 'create',

	created(){
		
	},

	methods:{
		onCreate(){

			this.axios.post("https://arfkcpx7m7.execute-api.us-east-1.amazonaws.com/dev/todos", {text:this.todoInput}).then((response) => {
			
			  this.$router.push('/List')
		
			})
		}
	},

	data(){
		return{
			id:null,
			todoInput: ''
		}
	}
}

</script>