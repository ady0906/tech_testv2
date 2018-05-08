<template>
	<div class="list">
		<div v-for="item in todos">
			<br/>
			<div><router-link :to="'/Update/'+item.id">{{item.id}}</router-link></div>
			<div>{{item.text}}</div>
			<div><router-link :to="'/Delete/'+item.id">Delete</router-link></div>
			<br/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'list',

	mounted(){

		this.axios.get("https://arfkcpx7m7.execute-api.us-east-1.amazonaws.com/dev/todos").then((response) => {
		  this.todos = response.data;
		})
		
	},

	data(){
		return {
			todos:[],
		}
	}
}

</script>
