<template>
	<div class="create">
		Implement code to create an entry (Add inputs then post to the endpoints)
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
			// Post data

			this.axios.post("https://arfkcpx7m7.execute-api.us-east-1.amazonaws.com/dev/todos", {text:"toto"}).then((response) => {
			
			  this.$router.push('/List')
		
			})
		}
	},

	data(){
		return{
			id:null,
		}
	}
}

</script>