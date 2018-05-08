<template>
	<div class="delete">
		Implement code to delete this entry {{this.id}}
		<div @click="onDelete">Delete</div>
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
			
		}
	},

	data(){
		return{
			id:null,
		}
	}
}

</script>