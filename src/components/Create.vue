<template>
	<div class="create">
		<br>
		<input v-model="todoInput"
			style="width:30%;height:25px;margin-bottom:20px;padding-left:10px;font-size:15px;"
			id="todoInput"
  			placeholder="What's on your list?">
		<div style="cursor:pointer;" @click="onCreate">Create</div>
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