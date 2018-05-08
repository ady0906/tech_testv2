<template>
	<div style="padding-top:20px;" class="delete">
		Delete the entry <strong>{{this.id}}</strong> ?
		<div style="cursor:pointer;margin-top:20px;color:red;" @click="onDelete">Delete</div>
	</div>
</template>

<script>
export default {
	name: 'delete',

	created(){
		this.id = this.$route.params.id;
	},

	methods:{
		onDelete(){
			var targetUrl = "https://arfkcpx7m7.execute-api.us-east-1.amazonaws.com/dev/todos/" + this.id;
			
			this.axios.delete(targetUrl, {id:this.id}).then((response) => {
			
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