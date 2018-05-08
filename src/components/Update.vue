<template>
	<div class="update">
		Implement code to show and update this entry {{this.id}}
	</div>
</template>

<script>
export default {
	name: 'update',

	created(){
		this.id = this.$route.params.id;
	},

	data(){
		return{
			id:null,
		}
	}
}

</script>