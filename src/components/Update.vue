<template>
	<div style="padding-top:20px;" class="update">
		Update the entry <strong>{{itemId}}</strong>:
		<br>
		<div>
			<br/>
			<div>{{todo.text}}</div>
		</div>
		<br>
		<input v-model="newInput"
			style="width:30%;height:25px;margin-bottom:20px;padding-left:10px;font-size:15px;"
			id="newInput"
  			placeholder="New item on your list">
		<div style="cursor:pointer;margin-top:20px;color:blue;" @click="onUpdate">Update</div>
	</div>
</template>

<script>
export default {
	name: 'update',

	created(){
		this.itemId = this.$route.params.id;
		var itemId = this.$route.params.id;
		var targetUrl = "https://arfkcpx7m7.execute-api.us-east-1.amazonaws.com/dev/todos/" + itemId;
		this.axios.get(targetUrl).then((response) => {
		  this.todo = response.data;
		})
	},
	
	methods:{
		onUpdate(){
			
			var newText = this.newInput;
			var targetUrl = "https://arfkcpx7m7.execute-api.us-east-1.amazonaws.com/dev/todos/" + this.itemId;
			this.axios.put(targetUrl, {text:newText}).then((response) => {
			  this.$router.push('/List')
			})
		}
	},

	data(){
		return{
			id:null,
			todo: {},
			newInput: ''
		}
	}
}

</script>