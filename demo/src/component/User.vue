<template>
  <div class="user">
      <h1>{{ user.name }}</h1>
      <button class="delete" v-on:click="handleDelete">Delete</button>
  </div>
</template>

<script>
export default {
    name:'user',
    props:{
        user:{
            type:Object,
            default: {}
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        
        handleDelete(){
            console.log('delete trong User')
            var data ={
                // lấy ra id muốn xóa
                id:this.user.id 
            }
            this.$emit('deleteUser',data)
        }
    }
}
</script>

<style>
.user{
    position: relative;
}
.user .delete{
    position: absolute;
    top: 0;
    right: 0;
}
</style>